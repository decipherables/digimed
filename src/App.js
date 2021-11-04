import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './style.css';
import AppContainer from './Components/AppContainer';

function App() {
  return (
    <Router>
    <div className="App">
      <AppContainer/>
    </div>
    </Router>
  );
}

export default App;
