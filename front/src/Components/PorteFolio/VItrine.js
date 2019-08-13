import React, { Component } from 'react';
import { Image, Divider, Header } from 'semantic-ui-react';
import Carte from '../../asset/PorteFolio//banniere.png';
import { Zoom, Fade, Flip, Bounce } from 'react-reveal';
import JV from '../../asset/PorteFolio/logoJV.png';
import SlideShowTaxi from '../MaVitrine/SlideShowTaxi';
import SlideShowResto from '../MaVitrine/SlideShowResto';
import '../../CSS/PorteFolio/Vitrine.css'

class Vitrine extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <a href="/"><Image className="banniere" src={Carte} alt="" width="100%" /></a>
        <Zoom><Fade><h1 className="invertH1">Ma Vitrine</h1><br /><br /></Fade></Zoom>
        <div className="paddingVitrine">
          <Divider horizontal>
            <Header>
              <Flip><Image className="imgDivider" src={JV} alt="" /></Flip>
            </Header>
          </Divider><br /><br /><br /><br />
          <Bounce bottom cascade>
            <div className="prezVitrine">
              <h3>
                Les différences entre les pages "Mes projets" et "Ma vitrine" sont principalement liées aux attentes.
                L'onglet "Mes projets" recense les développements de site très souvent issue d'idées ou de demandes précises, voir trés precises,
                nécessitant parfois des semaines voir des mois de recherche et développement!
              </h3>
              <h3 >
                Ce nouvel onglet "Ma vitrine" lui ne montre que des sites simples et représentatifs de corps de metier.
                Cela ne reste que des exemples de volume et de technologie nécessaire à la création d'un un blog photo avec texte et un formulaire de contact.
                De ce fait, tout est modulable, les couleurs, les photos, la police, le contenu etc...
              </h3>
              <h3>
                Le tout sera deployé et sécurisé à moindre coup <span className="prezVitrineStyle">(- 50€/an serveur ovh sécurisé et nom de domaine inclus)</span>.
                Un tel site reste votre projet personnel et est discuté et validé en amont avec vous.
              <h3>
                les sites vitrines proposés sont facturés <span className="prezVitrineStyle">300€</span>
              </h3>
              </h3>
              <h3>
                De nombreuses options existent et sont discutable tel que l'utilisation de musiques, de bases de données, de page administrateur vous donnant la main sur de multiple options.
              </h3>
            </div>
          </Bounce>
        </div>
        <Divider horizontal>
            <Header>
              <Flip><Image className="imgDivider" src={JV} alt="" /></Flip>
            </Header>
          </Divider><br /><br /><br /><br />
        <section>
          <h1>Taxi-Service</h1>
          <SlideShowTaxi />
          <Image />
          <h3>Vue mobile paysage</h3>
          <Image />
          <h3>Vue mobile Portrait</h3>
          <h2></h2>
        </section><br /><br /><br /><br />
        <Divider horizontal>
            <Header>
              <Flip><Image className="imgDivider" src={JV} alt="" /></Flip>
            </Header>
          </Divider><br /><br /><br /><br />
        <section>
          <h1>Ô bon dîner</h1>
          <SlideShowResto />
          <Image />
          <h3>Vue mobile paysage</h3>
          <Image />
          <h3>Vue mobile Portrait</h3>
          <h2></h2>
        </section><br /><br /><br /><br />
        <Divider horizontal>
            <Header>
              <Flip><Image className="imgDivider" src={JV} alt="" /></Flip>
            </Header>
          </Divider><br /><br /><br /><br />
      </div >
    )
  }
}

export default Vitrine;