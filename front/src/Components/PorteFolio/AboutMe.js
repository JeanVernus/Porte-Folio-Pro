import React, { Component } from 'react';
import { Image, Divider, Header } from 'semantic-ui-react';
import Carte from '../../asset/PorteFolio/banniere.png';
import JV from "../../asset/PorteFolio/logoJV.png"
import { Zoom, Fade, Bounce } from 'react-reveal';
import Perso from '../../asset/PorteFolio/perso.jpeg';
import '../../CSS/PorteFolio/APropos.css'

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="divBottom">
        <a href="/"><Image className="banniere" src={Carte} alt="" width="100%" /></a>
        <Zoom><Fade><h1 className="invertH1">Qui suis-je?</h1><br /><br /></Fade></Zoom>
        <Bounce bottom><Image className="imgAccueil" src={Perso} alt="" /><br /><br /></Bounce>
        <Bounce cascade top><div className="DisplayText">
          <Divider horizontal>
          <Header>
            <Image className="imgDivider" src={JV} alt="" />
          </Header>
          <h5 className="InvertH1b">Présentation</h5>
        </Divider><br /><br />
          <p>
            Jeune père de famille de 38 ans (Oui jeune!) né en vendée mais demeurant en région Toulousaine.
            J'ai deux filles 9ans et 5mois.
            Je suis passionné par le développement de site internet, de jeux en 2D, de dessins et illustrations.
          </p>
          <Divider horizontal>
            <Header>
              <Image className="imgDivider" src={JV} alt="" />
            </Header>
            <h5 className="InvertH1b">Le développement</h5>
          </Divider><br /><br />
          <p>
            Issue du milieu de la restauration et de la grande distribution à l'execution de poste de responsable et gérant
            je me suis tourné vers le développement par hasard et par passion. En effet, j'ai commencer il y a 5 ans par découvrir
            Blender et Unity qui m'ont demander outre leurs interfaces graphiques de créer mes premières lignes de code en Python
            et pour unity un peu de JS mais surtout à l'époque du C#, ce qui m'a permis surtout pour le C# de réaliser quelques
            petits jeux vidéos lié à mes dessins et illustrations mon autre passion.
            Quelques années plus tard j'ai eu la chance d'intégré un programme expérimental (non je ne suis pas Wolwerine) pour
            formation en 6 mois avec l'ambition d'aateindre un bac+2 de développeur web full stack sur les spécificités React,
            javaScript, Sql et phpMyAdmin aussi bien en frontEnd qu'en backEnd ou j'ai étét formé sur node.Js (Plus difficile
            mais plus complet).
          </p>
          <Divider horizontal>
            <Header>
              <Image className="imgDivider" src={JV} alt="" />
            </Header>
            <h5 className="InvertH1b">Ambitions</h5>
          </Divider><br /><br />
          <p>
            Plusieurs ambitions m'animent, certaines à court terme et d'autres à plus ou moin long terme.
            J'aimerais tout d'abord continué de monter en compétence en React et Node dans des entrprises spécialisé dans le
            domaine, mais j'aimerais aussi pouvoir partager mon savoir au particuliers en leur éditant et déployant leur site
            internet en React. Le travail à l'étranger me plairais aussi mais mes filles doivent grandir encore un peu.
          </p>
        </div></Bounce>
      </div>
    )
  }
}

export default AboutMe;