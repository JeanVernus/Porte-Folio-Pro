import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import '../CSS/fichTech.css'

class fichTechQuiz extends Component {
  render() {
    return (
      <div className="tableSize">
        <Table className="centerRow"celled>
          <Table.Header className="invertH2">
            <Table.Row>
              <Table.HeaderCell>Projets</Table.HeaderCell>
              <Table.HeaderCell>Technos</Table.HeaderCell>
              <Table.HeaderCell>Modules</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>FreelanceVision</Table.Cell>
              <Table.Cell>React JavaScript MySql phpMyAdmin</Table.Cell>
              <Table.Cell>Noty Axios Multer Date-fns</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Re-visite ta carte</Table.Cell>
              <Table.Cell>React JavaScript MySql phpMyAdmin</Table.Cell>
              <Table.Cell>Noty Axios Nodemon Redux</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>WildQuiz</Table.Cell>
              <Table.Cell>React JavaScript Socket.io</Table.Cell>
              <Table.Cell>SweetAlert React-Router Express </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default fichTechQuiz;