import React, { Component } from 'react';
import { Image, Divider, Header } from 'semantic-ui-react';
import JV from '../../asset/PorteFolio/logoJV.png';
import Carte from '../../asset/PorteFolio/banniere.png'
import Github from '../../asset/PorteFolio/Github.png';
import { Zoom, Fade, Flip, Bounce, Rotate } from 'react-reveal';
import Franceioi from '../../asset/PorteFolio/Franceioi.png';
import SoloLearn from '../../asset/PorteFolio/SoloLearn.png';
import Linkedin from '../../asset/PorteFolio/Linkedin.png';
import '../../CSS/PorteFolio/Pages.css';

class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <a href="/"><Image className="banniere" src={Carte} alt="" width="100%" /></a>
        <Zoom><Fade><h1 className="invertH1" >Mes liens</h1></Fade></Zoom><br /><br />
        <Divider horizontal>
          <Header>
            <Flip><Image className="imgDivider" src={JV} alt="" /></Flip>
          </Header>
        </Divider><br /><br />
        <div className="centerLiens">
          <ul>
            <Zoom><Rotate><Bounce left><li><a href="https://github.com/JeanVernus" target="_blank">
              <h2 className="liens">Github</h2><Image className="displayImgPage" src={Github} alt=""/></a>
            </li></Bounce></Rotate></Zoom>
            <Zoom><Rotate><Bounce left><li><a href="http://www.france-ioi.org/user/perso.php?sLogin=enigmhatk" target="_blank">
              <h2 className="liens">FranceIOI</h2><Image className="displayImgPage" src={Franceioi} alt=""/></a>
            </li></Bounce></Rotate></Zoom>
          </ul>
          <ul>
          <Zoom><Rotate><Bounce right><li><a href="https://www.sololearn.com/Profile/9543772#_=_" target="_blank">
              <h2 className="liens">SoloLearn</h2><Image className="displayImgPage" src={SoloLearn} alt=""/></a>
            </li></Bounce></Rotate></Zoom>
            <Zoom><Rotate><Bounce right><li><a href="https://www.linkedin.com/in/jean-vernus/" target="_blank">
              <h2 className="liens">Linkedin</h2><Image className="displayImgPageLinkedin" src={Linkedin} alt=""/></a>
            </li></Bounce></Rotate></Zoom>
          </ul>
        </div>
        <Divider horizontal>
          <Header>
            <Flip><Image className="imgDivider" src={JV} alt="" /></Flip>
          </Header>
        </Divider><br /><br /><br /><br />
      </div>
    );
  }
}

export default Pages;