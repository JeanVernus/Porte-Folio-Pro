import React, { Component } from 'react';
import { Image, Card, Icon, Divider, Header } from 'semantic-ui-react';
import Carte from '../asset/banniere.png'
import JV from '../asset/logoJV.png';
import { Zoom, Fade, Bounce, Flip } from 'react-reveal';
import { Link } from 'react-router-dom';
import Carroussel from './Caroussel'
import '../CSS/Accueil.css'

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
        </Divider> <br /> <br /> <br /> <br /> <br /> <br />
      </div >

    );
  }
}

export default Accueil;
