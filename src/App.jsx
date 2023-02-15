import './App.css';
import Home from './Home';
import Nav from './Nav';
import AnimationDetails from './AnimationDetails';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/AnimationDetails:id">
            <AnimationDetails/>
          </Route>          

        </Switch>
      </div>
    </Router>
  );
}

export default App;