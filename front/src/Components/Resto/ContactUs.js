import React, { Component } from 'react';
import { Form, Button, Divider } from 'semantic-ui-react';
import { Zoom, Fade, Bounce, Flip } from 'react-reveal';
import Swal from 'sweetalert2';
import '../../CSS/Resto/ContactMe.css';
import Axios from 'axios';

class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      hour: "",
      nbPeople: "",
      phone: "",
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
    if (key === 'Heure') { this.setState({ hour: event.target.value }) };
    if (key === 'NbPersonne') { this.setState({ nbPeople: event.target.value }) };
    if (key === 'Texte') { this.setState({ Text: event.target.value }) };
    if (key === 'Téléphone') { this.setState({ Text: event.target.value }) };
    if (key === 'Email') { this.setState({ Email: event.target.value }) };
  }

  sendForm(event) {
    const { firstName, lastName, hour, nbPeople, Text, phone, Email } = this.state;
    event.preventDefault();


    Axios.post('https://localhost:5000/sendForm', {
      firstName,
      lastName,
      hour,
      nbPeople,
      Text,
      phone,
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
      <div className="displayContact"><br /><br /><br />
        <Zoom><Fade><h1 className="displayTitleResto" >Me contacter</h1></Fade></Zoom><br /><br /><br /><br />
        <div className="BannHoraire">
          <h2>Horaires</h2>
          <span><h3>du mardi au samedi</h3></span><span><h4>12h-14h30 19h-22h</h4></span>
          <Divider horizontal>
            <Flip><h1 className="displayDividerContactResto">Ô</h1></Flip>
          </Divider>
          <span><h3>Dimanche et lundi</h3></span><span><h4>fermé</h4></span><br /><br />
        </div><br /><br /><br />
        <Bounce cascade bottom><div>
          <div className="paddingFormResto">
            <Form className="InvertH1bResto" onSubmit={this.sendForm}>
              <Form.Group widths='equal'>
                <Form.Input className="InvertH1Resto" name="Nom" label='Nom' onChange={event => this.handleChange(event, "Prénom")} />
                <Form.Input className="InvertH1Resto" name="Prénom" label='Prénom' onChange={event => this.handleChange(event, "Nom")} />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input className="InvertH1Resto" name="Heure" label='Heure' onChange={event => this.handleChange(event, "Heure")} />
                <Form.Input className="InvertH1Resto" name="NbPersonne" label='NbPersonne' onChange={event => this.handleChange(event, "NbPersonne")} />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input className="InvertH1Resto" name="Téléphone" label='Téléphone' onChange={event => this.handleChange(event, "Téléphone")} />
                <Form.Input className="InvertH1Resto" name="Email" label='Email' onChange={event => this.handleChange(event, "Email")} />
              </Form.Group>
              <Form.TextArea className="InvertH1Resto" label='Exprimez vous' name="Texte" onChange={event => this.handleChange(event, "Texte")} />
              <Button type='submit'>Soumettre</Button>
            </Form>
          </div><br /><br /><br /><br />
        </div></Bounce>
        <Divider horizontal>
          <Flip><h1 className="displayDivider">Ô</h1></Flip>
        </Divider>
      </div>
    );
  }
}

export default ContactMe;