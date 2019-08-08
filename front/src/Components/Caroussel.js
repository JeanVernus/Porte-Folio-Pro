import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import { Image } from 'semantic-ui-react';
import FreelanceVision from '../asset/Caroussel1.png';
import RevisiteTaCarte from '../asset/Caroussel2.png';
import WildQuizz from '../asset/Caroussel3.png';
import Portefoliov1 from '../asset/Caroussel4.jpg';
import Analyfeu from '../asset/Caroussel5.jpg';
import CultNGeek from '../asset/Caroussel6.jpg';
import MinFreelanceVision from '../asset/MiniCaroussel1.png';
import MinRevisiteTaCarte from '../asset/MiniCaroussel2.png';
import MinWildQuizz from '../asset/MiniCaroussel3.png';
import MinPortefoliov1 from '../asset/MiniCaroussel4.jpg';
import MinAnalyfeu from '../asset/MiniCaroussel5.jpg';
import MinCultNGeek from '../asset/MiniCaroussel6.jpg';
import '../CSS/Caroussel.css';

class Caroussel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image1: FreelanceVision,
      image2: RevisiteTaCarte,
      image3: WildQuizz,
      image4: Portefoliov1,
      image5: Analyfeu,
      image6: CultNGeek,
      minimage1: MinFreelanceVision,
      minimage2: MinRevisiteTaCarte,
      minimage3: MinWildQuizz,
      minimage4: MinPortefoliov1,
      minimage5: MinAnalyfeu,
      minimage6: MinCultNGeek

    }
  }

  slideShow() {

    const { image1, image2, image3, image4, image5, image6, minimage1, minimage2, minimage3, minimage4, minimage5, minimage6 } = this.state;
    const images = [
      {
        original: image1,
        thumbnail: minimage1
      },
      {
        original: image2,
        thumbnail: minimage2
      },
      {
        original: image3,
        thumbnail: minimage3
      },
      {
        original: image4,
        thumbnail: minimage4
      },
      {
        original: image5,
        thumbnail: minimage5
      },
      {
        original: image6,
        thumbnail: minimage6
      },
    ]
    return (
      <div className="displayMargin"><Image ><ImageGallery items={images} /></Image></div>
    );
  }

  render() {
    return (
      <div className="displayCaroussel">{this.slideShow()}</div>
    )
  }
}

export default Caroussel;
