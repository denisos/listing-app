import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import PropertyListing from './pages/PropertyListing';

// very basic implementation with react router for 1 route /listings (assuming more pages to come)
//  added simple temporary message in case
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/listings" element={<PropertyListing />} />

          <Route exact path="/" element={<h1>Change to /listings in the url</h1>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
