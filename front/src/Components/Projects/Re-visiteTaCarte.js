import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'
import Login from './fakeLogin';
import Register from './fakeRegister';
import { BrowserRouter, Switch, NavLink, Route, } from 'react-router-dom';
import '../../CSS/Project/CarteVisite.css';
import logo from '../../asset/Project/Logo.png';

class RevisiteTaCarte extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="bodyCv">
        <div className="cvB">
          <BrowserRouter>
            <header className="cvH">
              <div>
                <NavLink exact to="/" className="Link" activeClassName="current"></NavLink>
                <NavLink to="/Register" className="floatHeader1" activeClassName="current">Enregistrement</NavLink>
              </div>
              <Image className="logo" src={logo} alt="logo" />
              <h1 className="cvTitle"> Bienvenue</h1>
              <div>
                <NavLink to="/login" className="floatHeader2" activeClassName="current">Connexion</NavLink>
              </div>
            </header>
            <div>
              <Switch>
                <Route path="/Register" component={Register}></Route>
                <Route path="/login" component={Login}></Route>
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
export default RevisiteTaCarte;