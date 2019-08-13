import React, { Component } from 'react';
import { Divider, Image } from 'semantic-ui-react';
import CarteDesVins from '../../asset/Resto/vin.png';
import { Flip, Fade, Zoom } from 'react-reveal';
import '../../CSS/Resto/MenusAndCard.css';

class MenuAndCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div><br /><br />
        <Zoom><Fade><h1 className="displayTitleResto">Cartes & menus</h1></Fade></Zoom><br /><br /><br />
        <div className="displayBookImage">
          <div className="displayBook">
            <Image className="mesureImg" src={CarteDesVins} />
            <div class="book">
              <div class="back"></div>
              <div class="page6">
                <h2 className="subMenu">La carte</h2>
                <h3 className="subtitleMenu">Les entrées</h3>
                <ul>
                  <li>Toast de foie gras Ô gaspacho d'endives </li>
                  <li>Antipasti de truffes Ô gesiers d'oie</li>
                  <li>Trilogie de foie gras du mi-cuit Ô poêlé</li>
                  <li>Tartare de saumon et thon Ô herbes fraiches</li>
                </ul>
                <h3 className="subtitleMenu">Les plats</h3>
                <ul>
                  <li>Côte a l'Ôs du chef</li>
                  <li>Bar de ligne flambé Ô pastis</li>
                  <li>Dos de turbo à l'oseille et Ô piddrnlit</li>
                  <li>Magret de canard du Gers Ô porto</li>
                </ul>
                <h3 className="subtitleMenu">Les desserts</h3>
                <ul>
                  <li>Coulant Ô chocolat suisse et crème anglaise</li>
                  <li>Tarte Ô Fraises crème pâtissière</li>
                  <li>Crème brulée infusée Ô tilleul et miel</li>
                  <li>Coupe Ô bon repas</li>
                </ul>
                <h4 className="tarifMenu" >Plat et dessert ou entrée et plat....25€</h4>
                <h4 className="tarifMenu" >Entrée Plat et plat..................35€</h4>
              </div>
              <div class="page5"> </div>
              <div class="page4"></div>
              <div class="page3"></div>
              <div class="page2"> </div>
              <div class="page1"></div><br />
              <div class="front">
                <h1></h1>
                <h1 className="TitleMenu"> Menu</h1>
              </div>
            </div>
          </div>
        </div><br /><br /><br /><br />
        <Divider horizontal>
          <Flip><h1 className="displayDivider">Ô</h1></Flip>
        </Divider>>
      </div>
    );
  }
}

export default MenuAndCard;