import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import FaceBook from '../asset/Facebook.png';
import Twitter from '../asset/twitter.jpg';
import Twich from '../asset/Twich.png';
import '../CSS/CNGFooter.css'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="Footer">
        <Segment className="display" inverted>
          <Menu pointing secondary color={"orange"}>
            <div className="displayFooterFlex" >
              <Menu.Item name='Facebook' onClick={this.handleItemClick} ><img src={FaceBook} className="imgLogoBorder" alt="Face" /></Menu.Item>
              <Menu.Item name='Twich' onClick={this.handleItemClick} ><img src={Twich} className="imgLogoBorder" alt="Twich" /></Menu.Item>
              <Menu.Item name='Twitter' onClick={this.handleItemClick} ><img src={Twitter} className="imgLogoBorder" alt="Tweet" /></Menu.Item>
            </div>
          </Menu>
        </Segment>
      </div>
    );
  }
}

export default Footer;