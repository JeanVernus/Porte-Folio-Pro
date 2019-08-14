import React, { Component } from 'react';
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import { Image, Divider, Header } from 'semantic-ui-react';
import Facebook from '../../asset/PorteFolio/LogoFace.jpg';
import ReVisiteTaCarte from '../Projects/Re-visiteTaCarte';
import Carte from '../../asset/PorteFolio/banniere.png';
import JV from '../../asset/PorteFolio/logoJV.png';
import FichTechQuiz from '../Projects/fichTechs';
import { Zoom, Fade, Flip } from 'react-reveal';
import WildQuiz from '../Projects/WildQuiz';
import '../../CSS/PorteFolio/Projet.css';
import Cra from '../Projects/Cra';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <a href="/"><Image className="banniere" src={Carte} alt="" width="100%" /></a>
        <Zoom><Fade><h1 className="invertH1">Mes projets</h1><br /><br /></Fade></Zoom>
        <Divider horizontal>
          <Header>
            <Flip><Image className="imgDivider" src={JV} alt="" /></Flip>
          </Header>
        </Divider>
        <h1 className="invertH2">FREELANCE VISION</h1>
        <h3 className="ProjectDescriptif">
          Projet de déploiement d'un intranet administratif pour une société de portage salarial de freelance.
          Les buts étaient de créer un espace personnel pour les employés leur permettant de saisir et
          d'enregistré des tableaux de CRA ou de notes de frais ainsi que d'uplaoder certains justificatifs
          administratifs et civils et aussi une interface administrateur permettant de visualiser, de valider
          et d'importer toutes ces données.
        </h3>
        <h6 className="ProjectDescriptif">
          Exemple d'un tableau de Compte Rendu d'Activité (CRA) d'un freelance de cet entrepise.
        </h6>
        <div >
          <Cra /><br /><br />
        </div>
        <Divider horizontal>
          <Header>
            <Flip><Image className="imgDivider" src={JV} alt="" /></Flip>
          </Header>
        </Divider>
        <h1 className="invertH2">RE-VISITE TA CARTE</h1>
        <h3 className="ProjectDescriptif">
          Projet personnel dont le but était de mettre en oeuvre tout les aspects techniques étudié pendant
          la formation à la Wild Code School, le front simple, après enregistrement ou connexion, permet suite
          à la saisie de quelques information de génrérer des cartes de visite aléatoire. Le back gère
          des routes classiques et récupèrent les informations de la bases de données pour le front ou vice et
          versa, chaques requêtes au serveur reçois une réponse cohérente de celui-ci.
        </h3>
        <h6 className="ProjectDescriptif">
          Exemple de l'interface d'enregistrement ou de connexion avant d'atteindre la page profile
        </h6>
        <div>
          <ReVisiteTaCarte /><br /><br />
        </div>
        <Divider horizontal>
          <Header>
            <Flip><Image className="imgDivider" src={JV} alt="" /></Flip>
          </Header>
        </Divider>
        <h1 className="invertH2">WILD-QUIZ</h1>
        <h3 className="ProjectDescriptif">
          Projet d'école pendant la formation de la Wild Code School, une jeu de questions réponse
          multi-joueurs en localhost. Un master, maître du jeu tel un administrateur il à la main
          sur tout les détail du jeu: Chrono, thème, questions et gestion des indices, il voit en
          tant réel leurs réponses et les joueurs qui jouent sans limite de nombres.
        </h3>
        <h6 className="ProjectDescriptif">
          Accueil choix joueur/maître du jeux
        </h6>*
        <div>
          <WildQuiz />
        </div><br /><br />
        <Divider horizontal>
          <Header>
            <Flip><Image className="imgDivider" src={JV} alt="" /></Flip>
          </Header>
        </Divider>
        <h1 className="invertH2">FICHES TECHNIQUES</h1><br /><br />
        <div>
          <FichTechQuiz />
        </div><br /><br /><br /><br />
        <footer className="fixedFooter">
          <h1 className="footer"><a href="https://www.facebook.com/jean.vernus.79" target="_blank"><Image className="logoFooter"src={Facebook}alt="" heigth="30px" width="30px" /></a>Mail: jeannywcs@gmail.com<a href="https://www.facebook.com/jean.vernus.79" target="_blank"><Image className="logoFooter"src={Facebook}alt="" heigth="30px" width="30px" /></a></h1>
        </footer>
        <div>
          <ScrollUpButton
            StopPosition={0}
            ShowAtPosition={500}
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

export default Projects;