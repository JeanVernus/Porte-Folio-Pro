import React, { Component } from 'react';
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import { Image } from 'semantic-ui-react';
import Facebook from './asset/PorteFolio/LogoFace.jpg';
import MenuBurger from './Components/PorteFolio/MenuBurger';
import './CSS/PorteFolio/App.css';

class Accueil extends Component {
  render() {
    return (
      <div className="responSize">
        <div><MenuBurger /></div>
        <footer className="fixedFooter">
          <h1 className="footer"><a href="https://www.facebook.com/jean.vernus.79" target="_blank"><Image className="logoFooter"src={Facebook}alt="" heigth="30px" width="30px" /></a>Mail: jeannywcs@gmail.com<a href="https://www.facebook.com/jean.vernus.79" target="_blank"><Image className="logoFooter"src={Facebook}alt="" heigth="30px" width="30px" /></a></h1>
        </footer>
        <div>
          <ScrollUpButton
            StopPosition={0}
            ShowAtPosition={500}
            EasingType='easeOutCubic'
            AnimationDuration={500}
            ContainerClassName='ScrollUpButton__Container'
            TransitionClassName='ScrollUpButton__Toggled'
            style={{}}
            ToggledStyle={{}}>
          </ScrollUpButton>
        </div>
      </div >
    );
  }
}

export default Accueil;
