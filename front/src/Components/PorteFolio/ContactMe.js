import React, { Component } from 'react';
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import Facebook from '../../asset/PorteFolio/LogoFace.jpg';
import { Form, Button, Image } from 'semantic-ui-react';
import Carte from '../../asset/PorteFolio/banniere.png';
import { Zoom, Fade, Bounce } from 'react-reveal';
import '../../CSS/PorteFolio/Contact.css';
import Swal from 'sweetalert2';
import Axios from 'axios';

class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      job: "",
      company: "",
      Text: "",
      Email: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  handleChange(event, key) {
    console.log(this.state);
    this.setState({ [(event.target.name)]: event.target.value });
    if (key === 'Prénom') { this.setState({ firstName: event.target.value }) };
    if (key === 'Nom') { this.setState({ lastName: event.target.value }) };
    if (key === 'Poste') { this.setState({ job: event.target.value }) };
    if (key === 'Société') { this.setState({ company: event.target.value }) };
    if (key === 'Texte') { this.setState({ Text: event.target.value }) };
    if (key === 'Email') { this.setState({ Email: event.target.value }) };
  }

  sendForm(event) {
    const { firstName, lastName, job, company, Text, Email } = this.state;
    event.preventDefault();


    Axios.post('https://www.jeanvernus.fr/sendForm', {
      firstName,
      lastName,
      job,
      company,
      Text,
      Email
    })
      .then(res => {
        if (res.data.string === 'badMail') {
          Swal.fire({
            type: 'success',
            title: 'Votre mail à bien été envoyé',
            showConfirmButton: false,
            timer: 1500
          })
        }
        console.log(res.data)
      })
  }

  render() {
    return (
      <div>
        <a href="/"><Image className="banniere" src={Carte} alt="" width="100%" /></a>
        <Zoom><Fade><h1 className="invertH1" >Me contacter</h1></Fade></Zoom><br /><br /><br /><br />
        <Bounce cascade bottom><div>
          <div className="displayBannDevisContact">
            <h1 className="InvertH1b">besoin d'un devis gratuit?</h1>
          </div><br /><br /><br />
          <div className="paddingForm">
            <Form className="invertForm" onSubmit={this.sendForm}>
              <Form.Group widths='equal'>
                <Form.Input name="Prénom" placeholder='Prénom' onChange={event => this.handleChange(event, "Prénom")} />
                <Form.Input name="Nom" placeholder='Nom' onChange={event => this.handleChange(event, "Nom")} />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input name="Poste" placeholder='Poste' onChange={event => this.handleChange(event, "Poste")} />
                <Form.Input name="Société" placeholder='Société' onChange={event => this.handleChange(event, "Société")} />
              </Form.Group>
              <Form.Input name="Email" placeholder='Email' onChange={event => this.handleChange(event, "Email")} />
              <Form.TextArea className="font-size" label='Exprimez vous' name="Texte" onChange={event => this.handleChange(event, "Texte")} />
              <Button type='submit'>Soumettre</Button>
            </Form>
          </div>
          <div className="displayBannDevisContact">
            <h1 className="InvertH1b">Une question? Appelez moi au 06.35.15.12.20</h1>
          </div><br /><br /><br /><br />
        </div></Bounce>
        <footer className="fixedFooter">
          <h1 className="footer"><a href="https://www.facebook.com/jean.vernus.79" target="_blank"><Image className="logoFooter"src={Facebook}alt="" heigth="30px" width="30px" /></a>Mail: jeannywcs@gmail.com<a href="https://www.facebook.com/jean.vernus.79" target="_blank"><Image className="logoFooter"src={Facebook}alt="" heigth="30px" width="30px" /></a></h1>
        </footer>
        <div>
          <ScrollUpButton
            StopPosition={0}
            ShowAtPosition={350}
            EasingType='easeOutCubic'
            AnimationDuration={500}
            ContainerClassName='ScrollUpButton__Container'
            TransitionClassName='ScrollUpButton__Toggled'
            style={{}}
            ToggledStyle={{}}>
          </ScrollUpButton>
        </div>
      </div>
    );
  }
}

export default ContactMe;