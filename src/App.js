import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  console.log('plp');
  return (
    <Router>
      <Topbar/>
      <Home/>
      <Footer/>
    </Router>
  );
}

export default App;
