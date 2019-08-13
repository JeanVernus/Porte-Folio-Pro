import React, { Component } from 'react'
import SB1 from '../../asset/Project/SabreLaser1.png';
import SB2 from '../../asset/Project/SabreLaser2.png';
import Yassine from '../../asset/Project/Yassine.jpg'
import { Bounce } from 'react-reveal';
import FakeNavBar from './FAkeCNGNavBar';
import FakeFooter from './FakeCNGFooter';
import Remy from '../../asset/Project/Remy.jpg';
import '../../CSS/Project/CNG.css';

class CNG extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div><FakeNavBar /></div>
        <Bounce top><div className="marginTitle">
          <h1 className="titleHome1"><Bounce top cascade>Cult'N'Geek </Bounce><br />
            <Bounce bottom cascade><h2 className="titleHome2">La seule web-radio pour les Geeks</h2></Bounce></h1>
        </div></Bounce>
        <div className="displayPrez">
          <Bounce left><img className="displaySabre" src={SB1} alt="" /></Bounce>
          <p className="prez1">
            <span className="boldPrez">Cult'N'Geek</span> c'est le rendez-vous des amoureux de la culture de l'internet et du 2.0, que ce soit du jeu de rôle, des jeux vidéos, de sociétés, de manga, de séries, de l'e-sport ou bien de WTF.
          </p>
          <p className="prez1">
            Retrouvez une équipe passionnée par la culture Geek, avec des polémiques des jeux et des news. Tout ça entouré d'une ambiance parfois frôlant l'excuse "TG c'est magique".
          </p>
          <p className="prez2">
            Cult'N'Geek, 100% Culte 100% Geek, 200% barré.
          </p>
          <Bounce rigth><img className="displaySabre" src={SB2} alt="" /></Bounce>
        </div>
        <div className="backWallPrezTeam">
          <div className="prezTeam">
            <Bounce top cascade><h2 className="subTitlePrez">Présentation de l'équipe ===></h2></Bounce>
            <Bounce left><div className="prezPerso1">
              <img className="imgPrezPerso1" src={Remy} alt="" />
              <p className="fontPrez">
                Moi c'est Rémy, j'ai 20 ans et je suis animateur de l'émission Cult'N'Geek. Après le BAC j'ai foncé à Toulouse pour l'aventure Vigiste.
                Fan des jeux de rôles, jeux vidéos et de la culture de l'internet je suis chroniqueur et producteur de votre emission.
                Au sein de la Vigie Média je suis un couteau suisse. Technicien, web-master, animateur, chroniqueur et réalisateur, vous l'aurez compris, je suis un esclave.
            </p>
            </div></Bounce><br /><br />
            <Bounce right><div className="prezPerso2">
              <p className="fontPrez">
                Je m'appelle yassine ( ou Yanis pour les connards )
                Je suis l'expert du tout et n'importe quoi, celui qui a un avis sur n'importe quelle chose, et qui peux transformer la plus innocente des phrases en quelques choses de dégoûtant et pervers. Je suis votre chroniqueur préféré, et accessoirement etudiant en droit.
                Mais uniquement pour me défendre, faut pas déconner.
            </p>
              <img className="imgPrezPerso2" src={Yassine} alt="" />
            </div></Bounce><br /><br />
          </div>
        </div>
        <FakeFooter />
      </div>
    );
  }
}

export default CNG;