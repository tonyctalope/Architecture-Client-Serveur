import React, { useState, useEffect, useRef, FormEventHandler } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Beer, SubmitForm } from '../../components';
import { BeerFullProps } from '../../types';
import { useAuth0 } from '@auth0/auth0-react';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postABeer, postABrewery } from '../../api/postRequests';

export const Add = () => {
  const { isAuthenticated, user } = useAuth0();

  const nameRef = useRef();
  const styleRef = useRef();
  const brewery_idRef = useRef();

  const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn: postABeer,
    onSuccess: (data) => {
      queryClient.setQueryData(['beers', data.id], data);
      queryClient.invalidateQueries(['beers'], { exact: true });
      setCurrentPage(<Post id={data.id} />);
    }
  });

  function handleSubmit(e: FormEventHandler<HTMLFormElement>) {
    e.preventDefault();
    createPostMutation.mutate({
      name: nameRef.current.value,
      style: styleRef.current.value,
      brewery_id: brewery_idRef.current.value
    });
  }

  return (
    <Container className="mt-4">
      <div className="relative px-2">
        {/* <SubmitForm /> */}
        {createPostMutation.isError && JSON.stringify(createPostMutation.error)}
        {isAuthenticated && user !== undefined ? (
          <>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title">Nom de la bière</label>
                <input id="title" ref={nameRef} />
              </div>
              <div>
                <label htmlFor="body">Style de la bière</label>
                <input id="body" ref={styleRef} />
              </div>
              <div>
                <label htmlFor="body">Id de la brasserie</label>
                <input id="body" ref={styleRef} />
              </div>
              <button disabled={createPostMutation.isLoading}>
                {createPostMutation.isLoading ? 'Loading...' : 'Create'}
              </button>
            </form>
            <ul>
              {beers.map((beer: BeerFullProps) => (
                <li key={beer.id}>
                  <div>Nom de la bière: {beer.name}</div>
                  <div>Style de bière: {beer.style}</div>
                  {/* 
                <Button
                  variant="danger"
                  onClick={() => {
                    postAnOrder(customer_name, beer.id, Date.now());
                  }}>
                  Supprimer la commande
                </Button> */}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>Veuillez vous connecter</p>
        )}
      </div>
    </Container>
  );
};
