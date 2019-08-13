import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Logo1 from '../../asset/TaxiService/LogoTaxi.png';
import { Bounce } from 'react-reveal';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="navBarTaxis">
        <div id="start"className="displaylogoTaxis"><Bounce left><Image src={Logo1} /></Bounce></div>
        <div className="displayTitleTaxis">
          <h2 className="titleBar">Taxi-services</h2><a href='#Contact'><h2 className="titleBar">Me contacter</h2></a>
        </div>
      </div>
    );
  }
}

export default NavBar;