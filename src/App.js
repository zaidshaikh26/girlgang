import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalogue from './pages/catalogue';
import Blog from './pages/blog';
import About from './pages/about';
import Newsletter from './pages/newsletter';
import Kittyverse from './pages/kittyverse';
import Faq from './pages/faq';
import Guide from './components/guide';
import GettingStarted from './pages/guide/getting-started';
import Gas from './pages/guide/gas';
import KittyTypes from './pages/guide/kitty-types';
import WrappedKitties from './pages/wrapped-kitties';
import Pregnant from './pages/pregnant';
import Resting from './pages/resting';
import Cattributes from './pages/catalogue/cattributes';
import Mewtations from './pages/catalogue/mewtations';
import FancyCats from './pages/catalogue/fancy-cats';
import Purrstige from './pages/catalogue/purrstige';
import SpecialEditionCats from './pages/catalogue/special-edition-cats';
import ExclusiveCats from './pages/catalogue/exclusive-cats';

function App() {
  console.log('plp');
  return (
    <Router>
      <Topbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/catalogue" element={<Catalogue/>}/>
          <Route path="/guide" element={<Guide/>}/>
          <Route exact path="/blog" element={<Blog/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/newsletter" element={<Newsletter/>}/>
          <Route exact path="/kittyverse" element={<Kittyverse/>}/>
          <Route exact path="/faq" element={<Faq/>}/>
          <Route path="/guide/getting-started" element={<GettingStarted/>}/>
          <Route path="/guide/gas" element={<Gas/>}/>
          <Route path="/guide/kitty-types" element={<KittyTypes/>}/>
          <Route path="/wrapped-kitties" element={<WrappedKitties/>}/>
          <Route path="/pregnant" element={<Pregnant/>}/>
          <Route path="/resting" element={<Resting/>}/>
          <Route path="/catalogue/cattributes" element={<Cattributes/>}/>
          <Route path="/catalogue/mewtations" element={<Mewtations/>}/>
          <Route path="/catalogue/fancy-cats" element={<FancyCats/>}/>
          <Route path="/catalogue/purrstige" element={<Purrstige/>}/>
          <Route path="/catalogue/special-edition-cats" element={<SpecialEditionCats/>}/>
          <Route path="/catalogue/exclusive-cats" element={<ExclusiveCats/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
