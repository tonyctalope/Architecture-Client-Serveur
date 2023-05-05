import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './features/components';
import { NotFound, Home, Search, Cart, Create, SearchByBreweries } from './features/pages';

import { AllBeersByBrewery } from './features/pages/search/SearchByBreweries/AllBeersByBrewery';

export const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/creation" element={<Create />} />
          <Route path="/recherche" element={<Search />} />
          <Route path="/recherche-par-brasserie" element={<SearchByBreweries />} />
          <Route path="/recherche/:id" element={<AllBeersByBrewery />} />
          <Route path="/panier" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
};
