import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import { Image } from 'semantic-ui-react';
import Resto1 from '../../asset/MaVitrine/ÔBonDîner1.png';
import Resto2 from '../../asset/MaVitrine/ÔBonDîner2.png';
import Resto3 from '../../asset/MaVitrine/ÔBonDîner3.png';
import '../../CSS/PorteFolio/Caroussel.css';

class Caroussel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image1: Resto1,
      image2: Resto2,
      image3: Resto3,
    }
  }

  slideShow() {

    const { image1, image2, image3 } = this.state;
    const images = [
      {
        original: image1,
      },
      {
        original: image2,
      },
      {
        original: image3,
      },
      
    ]
    return (
      <div className="displayMargin"><Image ><ImageGallery autoPlay="true" items={images} /></Image></div>
    );
  }

  render() {
    return (
      <div className="displayCaroussel">{this.slideShow()}</div>
    )
  }
}

export default Caroussel;
