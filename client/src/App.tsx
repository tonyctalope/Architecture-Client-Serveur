import { useContext, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './features/components';
import { NotFound, Home, LogIn, Catalog } from './features/views';
import { z } from 'zod';
import './index.css';

const UserSchema = z.object({
  name: z.string(),
  isConnected: z.boolean(),
});

type User = z.infer<typeof UserSchema>;

const Context = createContext<User>({
  name: '',
  isConnected: false,
});

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/catalogue-bieres" element={<Catalog />} />
          <Route path="/log-in" element={<LogIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
