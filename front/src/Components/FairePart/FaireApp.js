import React, { Component } from 'react';
import zic from '../../asset/FairePart/zic.mp3';
import '../../CSS/FairePart/FaireApp.css';
import FairePart from './FairePart';
import {
  BrowserRouter,
  NavLink,
  Switch,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="displayStart">
        <h1 className="displayTitle">Bienvenue</h1><br />
        <audio autoplay="true" loop preload=" true">
          <source src={zic} />
        </audio>
        <BrowserRouter>
          <NavLink exact to="/MonFaire-part" />
          <NavLink to="/MonFaire-part/faire-part"><h1 className="displayLink">Veuillez cliquer ici</h1></NavLink><br />
          <Switch>
            <Route path="/MonFaire-part/faire-part" component={FairePart} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
