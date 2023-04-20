import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Auth0Provider } from '@auth0/auth0-react';
// import { z } from 'zod';

// const envVariables = z.object({
//   VITE_AUTH_DOMAIN: z.string(),
//   VITE_AUTH_CLIENT_ID: z.string()
// });

// envVariables.parse(process.env);

// declare global {
//   interface ProcessEnv extends z.infer<typeof envVariables> {}
// }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Auth0Provider
    // domain={process.env.VITE_AUTH_DOMAIN ?? ''}
    // clientId={process.env.VITE_AUTH_CLIENT_ID ?? ''}
    domain="dev-ow5mhnbdk5tu0hik.us.auth0.com"
    clientId="ZIW4QsnjWWvp0gM8TcksIAn9NHWQDdIo"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
  </Auth0Provider>
);
