import React, { Component } from 'react';
import { BrowserRouter, Switch, NavLink } from 'react-router-dom';
import { Menu, Segment, Image } from 'semantic-ui-react';
import logo from '../asset/cultngeek-logo.jpg';
import Mario1 from '../asset/marioSprite1.png';
import Mario2 from '../asset/marioSprite2.png';
import Carapace1 from '../asset/carapace1.png';
import Carapace2 from '../asset/carapace1.png';
import { Bounce, Zoom } from 'react-reveal';
import '../CSS/CNGNavBar.css'



class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Home'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div >
        <BrowserRouter>
          <Segment inverted>
            <Menu  pointing secondary color={"orange"}>
              <div><Zoom><Bounce left cascade><Image className="logoAnim1" src={Mario1} alt="" /></Bounce></Zoom></div><div><Zoom><Bounce left><Image className="logoAnim2" src={Carapace1} alt="" /></Bounce></Zoom></div>
              <div className="NavBar">
                <Menu.Item><Bounce left><Image className="imgLogo" src={logo} alt="logo" /></Bounce></Menu.Item>
                <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} ><NavLink exact to='/' activeClassName='current' className="link"><h1 className="navbarText">Accueil</h1></NavLink></Menu.Item>
                <Menu.Item name='Articles' active={activeItem === 'Articles'} onClick={this.handleItemClick} ><NavLink to='/Articles' activeClassName='current' className="link"><h1 className="navbarText">Articles</h1></NavLink></Menu.Item>
                <Menu.Item name='Podcast' active={activeItem === 'Podcast'} onClick={this.handleItemClick} ><NavLink to='/Podcast' activeClassName='current' className="link"><h1 className="navbarText">Podcast</h1></NavLink></Menu.Item>
                <Menu.Item name='ContactUs' active={activeItem === 'ContactUs'} onClick={this.handleItemClick} ><NavLink to='/ContactUs' activeClassNamess='current' className="link"><h1 className="navbarText">Nous Contacter</h1></NavLink></Menu.Item>
                <Menu.Item><Bounce right><Image className="imgLogo" src={logo} alt="logo" /></Bounce></Menu.Item>
              </div>
              <div><Zoom><Bounce right cascade><Image className="logoAnim3" src={Carapace2} alt="" /></Bounce></Zoom></div><div><Zoom><Bounce left><Image className="logoAnim4" src={Mario2} alt="" /></Bounce></Zoom></div>
            </Menu>
          </Segment>
          <Switch>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default NavBar;

