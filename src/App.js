import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Production from './pages/Production';
import DetailProject from './pages/DetailProject';
import PageNotFound from 'pages/PageNotFound';

function App() {
  return (
    <Router>
      <Route path="/" component={LandingPage} exact></Route>
      <Route path="/pricing" component={Pricing}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/production" component={Production}></Route>
      <Route path="/projects" component={Projects}></Route>
      <Route path="/pagenotfound" component={PageNotFound}></Route>
      <Route path="/detail-project/:id" component={DetailProject}></Route>
    </Router>
  );
}

export default App;
