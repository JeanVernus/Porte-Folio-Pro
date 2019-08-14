import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import { Image } from 'semantic-ui-react';
import Taxi1 from '../../asset/MaVitrine/Taxi1.png';
import Taxi2 from '../../asset/MaVitrine/Taxi2.png';
import Taxi3 from '../../asset/MaVitrine/taxi3.png';
import '../../CSS/PorteFolio/Caroussel.css';

class Caroussel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image1: Taxi1,
      image2: Taxi2,
      image3: Taxi3,
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
      <div className="displayMargin"><Image ><ImageGallery  autoPlay="true" items={images} /></Image></div>
    );
  }

  render() {
    return (
      <div className="displayCaroussel">{this.slideShow()}</div>
    )
  }
}

export default Caroussel;
