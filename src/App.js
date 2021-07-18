import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import DetailProject from './pages/DetailProject';

function App() {
  return (
    <Router>
      <Route path="/" component={LandingPage} exact></Route>
      <Route path="/projects" component={Projects}></Route>
      <Route path="/detail-project/:id" component={DetailProject}></Route>
    </Router>
  );
}

export default App;
