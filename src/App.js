import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={LandingPage} exact></Route>
      </Router>
    </div>
  );
}

export default App;
