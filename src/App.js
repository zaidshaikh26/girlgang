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
import Guide from './pages/guide';
import Blog from './pages/blog';

function App() {
  console.log('plp');
  return (
    <Router>
      <Topbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/catalogue" element={<Catalogue/>}/>
          <Route exact path="/guide" element={<Guide/>}/>
          <Route exact path="/blog" element={<Blog/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
