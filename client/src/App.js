import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/login";
import Profile from "./pages/Profile";
import Lobbies from "./pages/Lobbies"
import { ReversiState } from "./utils/GlobalState";
import Board from './components/Board/board';
import './components/Board/board.css';
import CreateLobby from "./pages/CreateLobby";
import Games from './pages/Game';
import Wait from "./pages/Wait";
import CompGame from './pages/AIGame';

// const API = require("./utils/API")
// API.getGames("player1").then(res => {
//   console.log("jobs done")
// console.log(res)
// }).catch(err=>console.log(err))

function App() {
  return (
    <Router>
      
      <div>
        <ReversiState>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/games" component={Games} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/lobbies" component={Lobbies} />
            <Route exact path="/board" component={Board} />
            <Route exact path="/create" component={CreateLobby} />
            <Route exact path="/wait" component={Wait} />
            <Route exact path="/aigame" component={CompGame} />

            <Route component={NoMatch} />
          </Switch>
        </ReversiState>
      </div>

    </Router>
  );
}

export default App;
