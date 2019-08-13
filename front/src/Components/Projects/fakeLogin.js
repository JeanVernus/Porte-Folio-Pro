import React, { Component } from 'react';
import Axios from 'axios';
import { Form, Button, Icon } from 'semantic-ui-react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendLogin = this.sendLogin.bind(this);
  }

  handleChange(event, key) {
    this.setState({ [event.target.name]: event.target.value });
    if (key === 'Email') { this.setState({ Email: event.target.value }); }
    if (key === 'Password') { this.setState({ Password: event.target.value }); }
  }

  sendLogin(event) {
    const { Email, Password } = this.state;
    event.preventDefault();
    Axios.post('http://localhost:7770/sendLogin', {
      Email,
      Password
    })
  }

  render() {
    return (
      <div>
        <h2 className="connection">Connexion</h2>
        <div>
          <Form className="formLogin" onSubmit={this.sendLogin}>
            <Form.Group>
              <Form.Input className="blockLogin" label="Email: " placeholder="Email" name="Email" onChange={event => this.handleChange(event, 'Email')} />
              <Form.Input className="blockLogin" type="password" label="Mot de Pass: " placeholder="Mot de pass" name="Password" onChange={event => this.handleChange(event, 'Password')} />
            </Form.Group>
            <Button type="submit" color="teal" animated>
              <Button.Content visible>Soumettre</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;