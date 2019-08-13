import React, { Component } from 'react';
import { Divider, Image } from 'semantic-ui-react';
import Photo1 from '../../asset/Resto/feu-de-cheminee-1.jpg';
import Photo2 from '../../asset/Resto/Plat.jpg';
import { Flip, Fade, Zoom } from 'react-reveal';
import Photo3 from '../../asset/Resto/cadre.png';
import '../../CSS/Resto/AboutUs.css'

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Zoom><Fade><h1 className="displayTitleResto">Qui sommes nous?</h1></Fade></Zoom><br /><br />
        <h2 className="displayIntro">
          L'équipe du restaurant Ô bon dîner vous accueil chaleureusement dans un cadre de bord de mer idylique
          afin que vous puissiez, dans les meilleurs dispositions, déguster la cuisine savoureuse et ingénieuse
          de notre chef reconnu pour ces talents depuis tant d'années.
          </h2><br /><br />
        <div>
          <div className="displayImg">
            <figure class="snip0016c">
              <Image src={Photo2} />
              <figcaption>
                <h2>Un Chef <span></span>Passionné!</h2>
                <p>Une cuisine française fine, inspiré et précise mêlant avec ingéniosité les saveurs d'ailleurs.</p>
              </figcaption>
            </figure><br /><br />
            <figure class="snip0016c">
              <Image src={Photo1} />
              <figcaption>
                <h2>Une équipe<span>à votre écoute!</span></h2>
                <p>Un servide simple et efficace ou chacun d'entre saura répondre à vos attente et vos questions.</p>
              </figcaption>
            </figure><br /><br />
          </div>
          <div className="displayImg">
            <figure class="snip0016b">
              <Image src={Photo3} />
              <figcaption>
                <h2>Une vue<span>exeptionnelle!</span> </h2>
                <p>Un panorama incroyable de bord de mer et d'horizon montagneux, vos sens en eveil prêt à la dégustation. </p>
              </figcaption>
            </figure>
          </div>
        </div><br /><br /><br />
        <Divider horizontal>
          <Flip><h1 className="displayDivider">Ô</h1></Flip>
        </Divider><br /><br /><br />
      </div>
    );
  }
}

export default AboutUs;