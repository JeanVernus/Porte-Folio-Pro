import React, { Component } from 'react';
import Facebook from '../../../asset/Resto/Facebook.png';
import { Image } from 'semantic-ui-react';
import CartesMenus from '../MenuAndCard';
import MenuButton from './MenuButton';
import ContactUs from '../ContactUs';
import Caroussel from './Caroussel';
import MenuItem from './MenuItem';
import AboutUs from '../AboutUs';
import Menu from './Menu';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    }
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  render() {
    const styles =
    {
      h1: {
        fontFamily: 'Parisienne',
        fontSize: '50px',
        color: ' white',
        webkitTextStroke: '0.5px',
        webkitTextStrokeColor: '#990e0e'
      },
      container: {
        position: 'relative',
        top: 0,
        left: 0,
        right: 1,
        zIndex: '99',
        opacity: 0.9,
        display: 'flex',
        alignItems: 'center',
        background: 'black',
        width: '100%',
        color: 'white',
      },
      logo: {
        margin: '0 auto',
        webkitTextStroke: '1px',
        webkitTextStrokeColor: '#990e0e'

      },
      bodyResto: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        transition: 'filter 0.5s ease',
      },
    }
    const menu = [
      <a style={styles.h1} href="#QSN">Qui somme nous?</a>,
      <a style={styles.h1} href="#CeM">Cartes et menus</a>,
      <a style={styles.h1} href="#ContactUs">Réservations et contact</a>
    ]
    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => { this.handleLinkClick(); }}>{val}</MenuItem>)
    });

    return (
      <div>
        <div style={styles.container}>
          <MenuButton open={this.state.menuOpen} onClick={() => this.handleMenuClick()} color='white' />
          <div style={styles.logo}><h1 style={styles.h1}>Ô bon Dîner</h1></div>
        </div>
        <Menu open={this.state.menuOpen}>
          {menuItems}
        </Menu>
        <div style={styles.bodyResto}>
          <section>
            <Caroussel />
          </section><br /><br /><br />
          <section id="QSN" className="displayAboutUs">
            <AboutUs />
          </section>
          <div className="displayBannDevisResto">
            <h3 className="InvertH1bResto">Une réservation exeptionnel?</h3>
            <a href="#ContactUs"><h3 className="ContactMeLinkResto">contacter nous</h3></a>
          </div>
          <section id="CeM">
            <CartesMenus />
          </section>
          <div className="displayBannDevisContactResto">
            <h1 className="InvertH1bResto">Une question? une réservation? Appelez nous au 07.77.66.07.77</h1>
          </div>
          <section id="ContactUs">
            <ContactUs />
          </section>
          <section>
            <footer>
              <h1 className="footerResto">
                <a href="https://www.facebook.com/" target="_blank"><Image className="logoFooterResto" src={Facebook} alt="" heigth="30px" width="30px" /></a>
                <h1 className="InvertH1bResto">Appelez nous au 07.77.66.07.77</h1>
                <a href="https://www.facebook.com/" target="_blank"><Image className="logoFooterResto" src={Facebook} alt="" heigth="30px" width="30px" /></a>
              </h1>
            </footer>
          </section>
        </div>
      </div>
    )
  }
}

export default NavBar;