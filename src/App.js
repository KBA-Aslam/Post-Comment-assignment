import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import PostDetails from './Components/PostDetails/PostDetails';
import NoMatch from './Components/NoMatch/NoMatch'

function App() {
  return (
    <div className="bg-color">
          <div style={{marginBottom: "10px"}}>
            <nav class="navbar navbar-dark bg-dark" style={{backgroundColor: "#e3f2fd"}}>
              <a class="navbar-brand">Daily KBA</a>
            </nav>
          </div>

      <Router>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/post/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
