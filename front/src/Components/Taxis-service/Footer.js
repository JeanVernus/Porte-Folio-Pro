import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Face from '../../asset/TaxiService/Facebook.png';
import Tweet from '../../asset/TaxiService/twitter.png';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="FooterTaxis">
        <a href='' target='_blank'><Image src={Face}/></a>
        <div><h2 className="h2F">Tel: 07.77.66 07.77</h2></div>
        <a href='' target='_blank'><Image className="circleLogo" src={Tweet}/></a>
      </div>
    );
  }
}

export default Footer;