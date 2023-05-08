import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './features/components';
import {
  NotFound,
  Home,
  Search,
  Cart,
  SearchByBreweries,
  Add,
  Edit,
  Delete
} from './features/pages';

export const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/recherche" element={<Search />} />
          <Route path="/recherche-par-brasserie" element={<SearchByBreweries />} />
          <Route path="/creation" element={<Add />} />
          <Route path="/modification" element={<Edit />} />
          <Route path="/suppression" element={<Delete />} />
          <Route path="/panier" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
};
