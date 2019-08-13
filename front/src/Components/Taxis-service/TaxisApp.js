import React, { Component } from 'react';
import HomeContact from './HomeContact'
import NavBar from './NavBar';
import Footer from './Footer';
import '../../CSS/Taxis-service/TaxisApp.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar /><br /><br /><br />
        <HomeContact /><br /><br /><br />
        <Footer />
      </div>
    );
  }
}

export default App;
