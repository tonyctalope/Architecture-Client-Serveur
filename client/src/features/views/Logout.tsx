import { useAuth0 } from '@auth0/auth0-react';

import '../../index.css';

export const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};
