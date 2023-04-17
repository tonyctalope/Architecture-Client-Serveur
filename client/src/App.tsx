import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './features/components';
import { NotFound, Home, Catalog } from './features/views';

export const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/catalogue-bieres" element={<Catalog />} />
        </Routes>
      </Router>
    </div>
  );
};
