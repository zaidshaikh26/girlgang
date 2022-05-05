import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Topbar from './components/Topbar';

function App() {
  console.log('plp');
  return (
    <Router>
      <Topbar/>
    </Router>
  );
}

export default App;
