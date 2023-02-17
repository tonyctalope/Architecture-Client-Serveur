import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

import { NotFound } from './features/views/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" element={<NotFound />} />
      </Router>
    </div>
  );
}

export default App;
