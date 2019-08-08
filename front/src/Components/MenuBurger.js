import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Image } from 'semantic-ui-react';
import Projects from './Projects';
import Accueil from './Accueil'
import Pages from './Pages';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import PowerOn from '../asset/Power-icon1.png'
import {
  BrowserRouter,
  Switch,
  NavLink,
  Route,
}
  from 'react-router-dom';
import '../CSS/Menu.css'

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
        </Switch>
      </BrowserRouter>
    );
  }
}
export default MenuBurger;