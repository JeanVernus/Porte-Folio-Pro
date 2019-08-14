import React, { Component } from 'react';
import MenuBurger from './Components/PorteFolio/MenuBurger';
import './CSS/PorteFolio/App.css';

class Accueil extends Component {
  render() {
    return (
      <div className="responSize">
        <div><MenuBurger /></div>
      </div >
    );
  }
}

export default Accueil;
