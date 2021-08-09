import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Board from './Components/Board.js';

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path={"/"} exact component={Board}/>
          <Redirect to={"/"} />
        </Switch>
    </Router>
    </>
  );
}

export default App;