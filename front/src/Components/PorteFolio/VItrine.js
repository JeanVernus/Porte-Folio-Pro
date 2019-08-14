import React, { Component } from 'react';
import RestoPortrait1 from '../../asset/MaVitrine/ÔBonRepasMobilePortrait1.png';
import RestoPortrait2 from '../../asset/MaVitrine/ÔBonRepasMobilePortrait2.png';
import RestoPaysage from '../../asset/MaVitrine/ÔBonRepasMobilePaysage.png';
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import TaxiPortrait1 from '../../asset/MaVitrine/taxiMobilePortrait1.png';
import TaxiPortrait2 from '../../asset/MaVitrine/taxiMobilePortrait2.png';
import TaxiPaysage from '../../asset/MaVitrine/taxiMobilePaysage.png';
import Facebook from '../../asset/PorteFolio/LogoFace.jpg';
import { Image, Divider, Header } from 'semantic-ui-react';
import Carte from '../../asset/PorteFolio//banniere.png';
import SlideShowResto from '../MaVitrine/SlideShowResto';
import { Zoom, Fade, Flip, Bounce } from 'react-reveal';
import SlideShowTaxi from '../MaVitrine/SlideShowTaxi';
import JV from '../../asset/PorteFolio/logoJV.png';
import '../../CSS/PorteFolio/Vitrine.css';

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
              <h2>
                Les différences entre les pages "Mes projets" et "Ma vitrine" sont principalement liées aux attentes.
                L'onglet "Mes projets" recense les développements de site très souvent issue d'idées ou de demandes précises, voir trés precises,
                nécessitant parfois des semaines voir des mois de recherche et développement!
              </h2>
              <h2 >
                Ce nouvel onglet "Ma vitrine" lui ne montre que des sites simples et représentatifs de corps de metier.
                Cela ne reste que des exemples de volume et de technologie nécessaire à la création d'un un blog photo avec texte et un formulaire de contact.
                De ce fait, tout est modulable, les couleurs, les photos, la police, le contenu etc...
              </h2>
              <h2>
                Le tout sera deployé et sécurisé à moindre coup <span className="prezVitrineStyle">(- 50€/an serveur ovh sécurisé et nom de domaine inclus)</span>.
                Un tel site reste votre projet personnel et est discuté et validé en amont avec vous.
              <h2>
                  les sites vitrines proposés sont facturés <span className="prezVitrineStyle">300€</span>
                </h2>
              </h2>
              <h2>
                De nombreuses options existent et sont discutable tel que l'utilisation de musiques, de bases de données, de page administrateur vous donnant la main sur de multiple options.
              </h2>
            </div>
          </Bounce>
        </div>
        <Divider horizontal>
          <Header>
            <Flip><Image className="imgDivider" src={JV} alt="" /></Flip>
          </Header>
        </Divider><br /><br />
        <div className="displayBannDevisContact">
          <h1 className="InvertH1b">Une question? Appelez moi au 06.35.15.12.20</h1>
        </div><br /><br />
        <Divider horizontal>
          <Header>
            <Flip><Image className="imgDivider" src={JV} alt="" /></Flip>
          </Header>
        </Divider><br /><br /><br /><br />
        <div className="paddingSiteVivtrine">
          <section>
            <h1 className="invertH2">Taxi-Service</h1>
            <SlideShowTaxi />
            <div className="DisplaySiteVitrine">
              <h2 className="InvertH1b">Vue mobile paysage</h2>
              <div className="DisplayMobileDevice">
                <Image className="borderImageVitrine" src={TaxiPaysage} />
              </div> <br /> <br />
              <h2 className="InvertH1b" >Vue mobile Portrait</h2> <br /> <br />
              <div className="DisplayMobileDeviceP">
                <div>
                  <Image className="borderImageVitrine" src={TaxiPortrait1} />
                </div>
                <div>
                  <Image className="borderImageVitrine" src={TaxiPortrait2} />
                </div>
              </div><br /><br />
              <a href="/TaxiService"><h1 className="ToutVoirLink">Voir le site</h1></a>
            </div>
          </section> <br /> <br /> <br /> <br />
          <Divider horizontal>
            <Header>
              <Flip><Image className="imgDivider" src={JV} alt="" /></Flip>
            </Header>
          </Divider> <br /> <br /> <br /> <br />
          <section>
            <h1 className="invertH2">Ô bon dîner</h1>
            <SlideShowResto />
            <div><br /> <br />
              <h2 className="InvertH1b">Vue mobile paysage</h2><br /> <br />
              <div className="DisplayMobileDevice">
                <Image className="borderImageVitrine" src={RestoPaysage} />
              </div> <br /> <br />
              <h2 className="InvertH1b" >Vue mobile Portrait</h2><br /> <br />
              <div className="DisplayMobileDeviceP">
                <div>
                  <Image className="borderImageVitrine" src={RestoPortrait1} />
                </div>
                <div>
                  <Image className="borderImageVitrine" src={RestoPortrait2} />
                </div>
              </div><br /><br />
              <a href="/ÔBonDîner"><h1 className="ToutVoirLink">Voir le site</h1></a>
            </div>
          </section> <br /> <br /> <br /> <br />
          <Divider horizontal>
            <Header>
              <Flip><Image className="imgDivider" src={JV} alt="" /></Flip>
            </Header>
          </Divider> <br /> <br />
        </div>
        <div className="displayBannDevis">
          <h1 className="InvertH1b">besoin d'un devis gratuit?</h1>
          <a href="/MeContacter"><h4 className="ContactMeLink">contacter moi</h4></a>
        </div>
        <Divider horizontal>
          <Header>
            <Flip><Image className="imgDivider" src={JV} alt="" /></Flip>
          </Header>
        </Divider> <br /> <br /> <br /> <br />
        <footer className="fixedFooter">
          <h1 className="footer"><a href="https://www.facebook.com/jean.vernus.79" target="_blank"><Image className="logoFooter" src={Facebook} alt="" heigth="30px" width="30px" /></a>Mail: jeannywcs@gmail.com<a href="https://www.facebook.com/jean.vernus.79" target="_blank"><Image className="logoFooter" src={Facebook} alt="" heigth="30px" width="30px" /></a></h1>
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
    )
  }
}

export default Vitrine;