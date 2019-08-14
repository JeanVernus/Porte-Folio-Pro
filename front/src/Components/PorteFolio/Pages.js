import React, { Component } from 'react';
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import { Zoom, Fade, Flip, Bounce, Rotate } from 'react-reveal';
import Franceioi from '../../asset/PorteFolio/Franceioi.png';
import SoloLearn from '../../asset/PorteFolio/SoloLearn.png';
import Facebook from '../../asset/PorteFolio/LogoFace.jpg';
import Linkedin from '../../asset/PorteFolio/Linkedin.png';
import { Image, Divider, Header } from 'semantic-ui-react';
import Carte from '../../asset/PorteFolio/banniere.png';
import Github from '../../asset/PorteFolio/Github.png';
import JV from '../../asset/PorteFolio/logoJV.png';
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
        <footer className="fixedFooter">
          <h1 className="footer"><a href="https://www.facebook.com/jean.vernus.79" target="_blank"><Image className="logoFooter"src={Facebook}alt="" heigth="30px" width="30px" /></a>Mail: jeannywcs@gmail.com<a href="https://www.facebook.com/jean.vernus.79" target="_blank"><Image className="logoFooter"src={Facebook}alt="" heigth="30px" width="30px" /></a></h1>
        </footer>
        <div>
          <ScrollUpButton
            StopPosition={0}
            ShowAtPosition={350}
            EasingType='easeOutCubic'
            AnimationDuration={500}
            ContainerClassName='ScrollUpButton__Container'
            TransitionClassName='ScrollUpButton__Toggled'
            style={{}}
            ToggledStyle={{}}>
          </ScrollUpButton>
        </div>
      </div>
    );
  }
}

export default Pages;