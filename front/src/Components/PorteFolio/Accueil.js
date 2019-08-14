import React, { Component } from 'react';
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import { Image, Card, Icon, Divider, Header } from 'semantic-ui-react';
import Facebook from '../../asset/PorteFolio/LogoFace.jpg';
import { Zoom, Fade, Bounce, Flip } from 'react-reveal';
import Carte from '../../asset/PorteFolio/banniere.png';
import JV from '../../asset/PorteFolio/logoJV.png';
import '../../CSS/PorteFolio/Accueil.css';
import { Link } from 'react-router-dom';
import Carroussel from './Caroussel'

class Accueil extends Component {
  render() {
    return (
      <div>
        <a href="/"><Image className="banniere" src={Carte} alt="" width="100%" /></a>
        <Zoom><Fade><h1 className="invertH1" >Accueil</h1></Fade></Zoom><br /><br /><br /><br />
        <Divider horizontal>
          <Header>
            <Flip><Image className="imgDivider" src={JV} alt="" /></Flip>
          </Header>
        </Divider><br /><br />
        <Zoom><Fade><div className="PrezCaroussel">
          <h4 className="InvertH1bis">Quelques projets</h4><br />
          <h4 className="InvertH1bis">professionnels ou personnels</h4><br />
          <h4 className="InvertH1bis">en images</h4><br />
        </div><br /><br /><br /><br /></Fade></Zoom>
        <Divider horizontal>
          <Header>
            <Flip><Image className="imgDivider" src={JV} alt="" /></Flip>
          </Header>
        </Divider><br /><br />
        <Carroussel /><br /><br />
        <Link to='/MesProjets'><h2 className="ToutVoirLink">Tout voir</h2></Link> <br /> <br />
        <Divider horizontal>
          <Header>
            <Flip><Image className="imgDivider" src={JV} alt="" /></Flip>
          </Header>
        </Divider> <br /> <br />
        <section >
          <Bounce cascade left ><div className="dislayPresentaion">
            <h3 className="SubtitleAccueil">Mon fonctionnement</h3>
            <Card>
              <Card.Content header='Conseils' />
              <Card.Content extra>
                <Icon name='lightbulb outline' />
              </Card.Content>
              <Card.Content description="A l'écoute pour vous guider dans vos choix et avec vous trouvé les meilleurs solutions pour votre projet" />
            </Card>
            <Card>
              <Card.Content header='Création' />
              <Card.Content extra>
                <Icon name='creative commons' />
              </Card.Content>
              <Card.Content description="Modéle prédifini ou création en suivant vos envies et idéés ou en toute confiance selon les chartes graphiques prédifinies ensemble" />
            </Card>
            <Card>
              <Card.Content header='Accompagnement' />
              <Card.Content extra>
                <Icon name='handshake' />
              </Card.Content>
              <Card.Content description="De la définition à l'aboutissement du projet et même au-dela jusqu'à plusieurs mois àprés le développement de votre site pour répondre a vos questions" />
            </Card>
          </div></Bounce>
        </section>
        <Divider horizontal>
          <Header>
            <Flip><Image className="imgDivider" src={JV} alt="" /></Flip>
          </Header>
        </Divider> <br /> <br />
        <section>
          <div className="displayBannDevis">
            <h1 className="InvertH1b">besoin d'un devis gratuit?</h1>
            <a href="/MeContacter"><h4 className="ContactMeLink">contacter moi</h4></a>
          </div>
        </section> <br /> <br />
        <Divider horizontal>
          <Header>
            <Flip><Image className="imgDivider" src={JV} alt="" /></Flip>
          </Header>
        </Divider> <br /> <br />
        <section >
          <Bounce cascade right><div className="dislayPresentaion">
            <h3 className="SubtitleAccueil">Mes engagements</h3>
            <Card>
              <Card.Content header='SAV' />
              <Card.Content extra>
                <Icon name='lightbulb outline' />
              </Card.Content>
              <Card.Content description="Après le développement de votre projet, je serait pendant 6 mois à l'écoute des problème que vous pourriez rencontrer avec l'utiisation de votre site " />
            </Card>
            <Card>
              <Card.Content header='Administrateur' />
              <Card.Content extra>
                <Icon name='creative commons' />
              </Card.Content>
              <Card.Content description="Pendant 1 an après livraison de votre site je m'engage à éditer gratuitement vos changements de renseignements de formulaire, tarifs ou autre photos" />
            </Card>
            <Card>
              <Card.Content header='Transparence' />
              <Card.Content extra>
                <Icon name='handshake' />
              </Card.Content>
              <Card.Content description="Pendant la durée du développement nous échangerons au grés de vos questionnement et visualiseront les avancée du projets dés que vous le souhaiterezPorteFolio/" />
            </Card>
          </div></Bounce>
        </section>
        <Divider horizontal>
          <Header>
            <Flip><Image className="imgDivider" src={JV} alt="" /></Flip>
          </Header>
        </Divider> <br /> <br /> <br /> <br /> <br /> <br />
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
      </div >
    );
  }
}

export default Accueil;
