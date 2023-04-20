import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './features/components';
import { NotFound, Home, Search, SearchDetails, Cart, Creation } from './features/views';

export const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/creation" element={<Creation />} />
          <Route path="/recherche" element={<Search />} />
          <Route path="/recherche-details" element={<SearchDetails />} />
          <Route path="/panier" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
};
