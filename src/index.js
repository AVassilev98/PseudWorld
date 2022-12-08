import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';

import LandingPage from './LandingPage/landingPage'

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
    </Routes>
  </Router>,

  document.getElementById('root')
);
