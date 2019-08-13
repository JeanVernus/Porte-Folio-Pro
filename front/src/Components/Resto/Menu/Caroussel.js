import React, { Component } from 'react';
import Photo4 from '../../../asset/Resto/salle de restaurant.jpg';
import { Divider, Image } from 'semantic-ui-react';
import Photo2 from '../../../asset/Resto/petit salon.jpg';
import ImageGallery from 'react-image-gallery';
import Photo3 from '../../../asset/Resto/terrasse.jpg';
import Photo1 from '../../../asset/Resto/cuisine.jpg';
import { Flip } from 'react-reveal';
import '../../../CSS/Resto/Caroussel.css';

class Caroussel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image1: Photo2,
      image2: Photo1,
      image3: Photo3,
      image4: Photo4,
    }
  }

  slideShow() {

    const { image1, image2, image3, image4 } = this.state;
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
      {
        original: image4,
      },
    ]
    return (
      <div >
        <Image >
          <ImageGallery
            autoPlay={true}
            items={images}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            disableThumbnailScroll={true}
            showNav={false}
          />
        </Image>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className='displayMarginResto'>
          {this.slideShow()}
        </div><br /><br />
        <Divider id="QSN" horizontal>
          <Flip><h1 className="displayDivider">Ô</h1></Flip>
        </Divider>
      </div>
    )
  }
}

export default Caroussel;
