import React, { Component } from 'react';
import { Form, Image, Divider } from 'semantic-ui-react';
import Photo1 from '../../asset/TaxiService/photo1.jpg';
import Photo2 from '../../asset/TaxiService/photo2.jpg';
import Photo3 from '../../asset/TaxiService/photo3.jpg';
import Photo4 from '../../asset/TaxiService/photo4.jpg';
import { Bounce, Fade, Zoom } from 'react-reveal';
import Noty from 'noty';
import Axios from 'axios';

class HomeContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: "",
      firstName: "",
      hour: "",
      adress: "",
      destination: "",
      phone: "",
      Text: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  handleChange(event, key) {
    console.log(this.state);
    this.setState({ [(event.target.name)]: event.target.value });
    if (key === 'Prénom') { this.setState({ firstName: event.target.value }) };
    if (key === 'Nom') { this.setState({ lastName: event.target.value }) };
    if (key === 'Heure') { this.setState({ hour: event.target.value }) };
    if (key === 'Adresse') { this.setState({ adress: event.target.value }) };
    if (key === 'Destination') { this.setState({ destination: event.target.value }) };
    if (key === 'Telephone') { this.setState({ phone: event.target.value }) };
    if (key === 'Texte') { this.setState({ Text: event.target.value }) };
  }

  sendForm(event) {
    const { lastName, firstName, hour, adress, destination, phone, Text } = this.state;
    event.preventDefault();
    Axios.post('http://localhost:7770/sendForm', {
      lastName,
      firstName,
      hour,
      adress,
      destination,
      phone,
      Text
    })
      .then(res => {
        if(res.data === 'good'){
          new Noty({
            text: "DEMANDE ENVOYÉE",
          }).show();
        }
        else{
          new Noty({
            text: 'Un problème est survenu, réessayer!',
          }).show();
        }
        console.log(res.data)
      })
  }

  render() {
    return (
      <div>
        <div>
          <section>
            <Divider horizontal><Zoom><Fade><h1 className="subTitle">Qui suis-je? </h1></Fade></Zoom></Divider><br /><br />
            <div className="displayCard">
              <h2 className="h2T">
                Mr Dupont Martin détenteur de la licence taxi depuis 12 ans j'effectue au quotidien mon travail avec passion.
                Né à Toulouse je connait cette Ville et ces recoins extrêmement bien, n'hésitez pas à me demander conseil sur
                les endroits à visiter ou à fréquenter, un Pub, un hôtel, un restaurant ou un encore un endroit symbolique de
                la ville rose, je connais les meilleures adresses.
                </h2>
            </div><br /><br /><br />
            <Divider horizontal><Zoom><Fade><h1 className="subTitle">Ma voiture</h1></Fade></Zoom></Divider><br /><br />
            <Bounce bottom cascade>
              <div className="displayImg">
                <figure class="snip0016">
                  <Image className="ImgStyle" src={Photo3} />
                  <figcaption>
                    <h2 className="h2">Peugeot 508 <span>année 2018</span>Grise métalisé</h2>
                    <p className="p">Une petite merveille de technologie et de confort</p>
                  </figcaption>
                </figure>
                <figure class="snip0016">
                  <Image className="ImgStyle" src={Photo2} />
                  <figcaption>
                    <h2 className="h2">Le confort <span>ultime!</span></h2>
                    <p className="p">Cuir véritable et siège chauffand jusqu'à 4 passager. Vous ne voudrez plus sortir!</p>
                  </figcaption>
                </figure>
                <figure class="snip0016">
                  <Image className="ImgStyle" src={Photo1} />
                  <figcaption>
                    <h2 className="h2">Toit Panoramique<span>vitré</span> </h2>
                    <p className="p">Pour Profité de tout les panoramas de la régions et de la beauté de Toulouse.</p>
                  </figcaption>
                </figure>
                <figure class="snip0016">
                  <Image className="ImgStyle" src={Photo4} />
                  <figcaption>
                    <h2 className="h2">Le coffre<span>515</span>à 950 dm3</h2>
                    <p className="p">Un coffre immense et modulable n'ayer pas peur de Taxipartir en vacances.</p>
                  </figcaption>
                </figure>
              </div><br /><br /><br />
            </Bounce>
            <Divider horizontal><Zoom><Fade><h1 className="subTitle">Mes atouts </h1></Fade></Zoom></Divider><br /><br />
            <div className="displayCard">
              <div className="textAlign">
                <h2 className="h2T">Toujours ponctuel</h2>
                <h2 className="h2T">Connait Toulouse et ses environs parfaitement</h2>
                <h2 className="h2T">Très social et avenant</h2>
                <h2 className="h2T">Sait s'adapter à sa clientèle</h2>
              </div>
            </div>
          </section><br /><br /><br /><br />
          <section id='Contact'>
            <Divider horizontal><Zoom><Fade><h1 className="subTitle">Contact</h1></Fade></Zoom></Divider><br /><br /><br />
            <Bounce cascade bottom><div>
              <div className="paddingFormTaxi">
                <Form className="invertFormTaxi" onSubmit={this.sendForm}>
                  <Form.Group widths='equal'>
                    <Form.Input className="inputFormTaxi" name="Nom" placeholder='Nom' onChange={event => this.handleChange(event, "Nom")} />
                    <Form.Input className="inputForm" name="Prénom" placeholder='Prénom' onChange={event => this.handleChange(event, "Prénom")} />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input className="inputFormTaxi" name="Adresse" placeholder='Adresse' onChange={event => this.handleChange(event, "Adresse")} />
                    <Form.Input className="inputFormTaxi" name="Destination" placeholder='Destination' onChange={event => this.handleChange(event, "Destination")} />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input className="inputFormTaxi" name="Heure" placeholder='Heure' onChange={event => this.handleChange(event, "Heure")} />
                    <Form.Input className="inputFormTaxi" name="Telephone" placeholder='Telephone' onChange={event => this.handleChange(event, "Telephone")} />
                  </Form.Group>
                  <Form.TextArea className="font-size" label='Commentaire' name="Texte" onChange={event => this.handleChange(event, "Texte")} />
                  <button className="buttonForm" type='submit'>Envoyer</button>
                </Form>
              </div>
            </div></Bounce>
            <div className="displaybuttonForm1"><a href='#start'><button className="buttonForm1">Retour</button></a></div>
          </section>
        </div >
      </div >
    );
  }
}

export default HomeContact;