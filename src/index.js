import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CardMemory from "./cardmemorygame/CardMemory.js";
import RockPaper from "./rock-paper/RockPaper.js";
import Game from "./tictactoe-react/components/Game.js";
import Shapes from "./shapes/Shapes.js";
ReactDOM.render(
 <Router>
 <Switch>

          <Route exact path="/">
            <App />
          </Route>

          <Route exact path="/cardmemory">
            <CardMemory />
          </Route>
          
          <Route exact path="/rockpaper">
            <RockPaper />
          </Route>

          <Route exact path="/tictactoe">
            <Game />
          </Route>

          <Route exact path="/shapes">
            <Shapes />
          </Route>

        </Switch>
</Router>  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

