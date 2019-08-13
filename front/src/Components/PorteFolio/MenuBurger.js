import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import PowerOn from '../../asset/PorteFolio/Power-icon1.png'
import FaireApp from '../FairePart/FaireApp';
import { Image } from 'semantic-ui-react';
import ContactMe from './ContactMe';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Accueil from './Accueil';
import Vitrine from './VItrine';
import Pages from './Pages';
import '../../CSS/PorteFolio/Menu.css';
import {
  BrowserRouter,
  Switch,
  NavLink,
  Route,
}
from 'react-router-dom';

class MenuBurger extends Component {

  render() {
    return (
      <BrowserRouter>
        <Menu customBurgerIcon={<Image className="powerIcon" src={PowerOn} alt="" />} customCrossIcon={<Image className="powerIcon" src={PowerOn} alt="" />} noOverlay left width={'250px'}>
          <NavLink id="Accueil" exact to="/" className="menu-item" activeClassName="current" >Accueil</NavLink>
          <NavLink id="MesProjets" to="/MesProjets" className="menu-item" activeClassName="current" >Mes Projets</NavLink>
          <NavLink id="MesLiens" to="/MesLiens" className="menu-item" activeClassName="current" >Mes liens</NavLink>
          <NavLink id="APropos" to="/APropos" className="menu-item" activeClassName="current" >Qui suis-je?</NavLink>
          <NavLink id="MeContacter" to="/MeContacter" className="menu-item" activeClassName="current" >Me contacter</NavLink>
        </Menu>
        <Switch>
          <Route exact path="/" component={Accueil}></Route>
          <Route path="/MesProjets" component={Projects}></Route>
          <Route path="/MesLiens" component={Pages}></Route>
          <Route path="/APropos" component={AboutMe}></Route>
          <Route path="/MeContacter" component={ContactMe}></Route>
          <Route path="/MeContacter" component={ContactMe}></Route>
          <Route path="/MaVitrine" component={Vitrine}></Route>
          <Route path="/MonFaire-part" component={FaireApp}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default MenuBurger;