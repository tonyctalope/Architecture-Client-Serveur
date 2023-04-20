import React from 'react';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginButton = () => {
  const { loginWithPopup } = useAuth0();

  return (
    <Button variant="success" onClick={() => loginWithPopup()}>
      Se connecter
    </Button>
  );
};
