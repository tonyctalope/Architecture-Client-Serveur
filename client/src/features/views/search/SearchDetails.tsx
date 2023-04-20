import React from 'react';
import { Container } from 'react-bootstrap';

type SearchDetailsProps = {
  classNames: string;
  children: React.ReactNode;
};

export const SearchDetails = ({ classNames, children }: SearchDetailsProps) => {
  return (
    <Container className={classNames}>
      <div className="relative text-center px-2 mx-auto py-8">{children}</div>
    </Container>
  );
};
