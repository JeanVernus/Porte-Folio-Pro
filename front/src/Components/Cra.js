import React, { Component } from 'react';
import { Table, Icon, Button, Segment, Menu, Form } from 'semantic-ui-react';
import dateFns from 'date-fns';
import Axios from 'axios';
import '../CSS/Vision.css';

class Cra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "",
      somme: 0,
      currentMonth: new Date(),
      days: this.createArrayDays(new Date()),
    };

    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.createArrayDays = this.createArrayDays.bind(this);
    this.inputComment = this.inputComment.bind(this);
    this.totalRate = this.totalRate.bind(this);
    this.copyLine = this.copyLine.bind(this);
    this.postCra = this.postCra.bind(this);
  }

  nextMonth() {
    const { currentMonth } = this.state;
    const nextMonth = dateFns.addMonths(currentMonth, 1);
    this.setState({
      currentMonth: nextMonth,
      days: this.createArrayDays(nextMonth)
    });
  }

  prevMonth() {
    const { currentMonth } = this.state;
    const prevMonth = dateFns.subMonths(currentMonth, 1);
    this.setState({
      currentMonth: prevMonth,
      days: this.createArrayDays(prevMonth)
    });
  }

  inputComment(index, event) {
    const { days } = this.state;
    event.preventDefault();
    const daysCopy = [...days];
    daysCopy[index].comment = event.target.value;
    this.setState({ days: daysCopy });
    console.log('inputComment', event.target.value, index);
  }

  choiceRate(index, event) {
    const { days } = this.state;
    const daysCopy = [...days];
    daysCopy[index].rate = event.target.value;
    this.setState({ days: daysCopy });
    this.totalRate(daysCopy);
    console.log(daysCopy[index].rate);
  }

  totalRate(days) {
    let somme = 0;
    days.map((item) => (
      somme += Number(item.rate)
    ));
    this.setState({ somme });
  }

  postCra(event) {
    event.preventDefault();
    const { id } = this.props;
    const { somme, days, currentMonth } = this.state;
    const month = dateFns.format(currentMonth, 'MMMM');
    const year = dateFns.format(currentMonth, 'YYYY');
    console.log('mois: ', dateFns.format(currentMonth, 'MMMM'));
    console.log('year: ', dateFns.format(currentMonth, 'YYYY'));

    console.log('daysDuPost', days);
    Axios.post(`http://localhost:4000/cra`, {
      tableDays: days,
      sommeCra: somme,
      month,
      year,
      id
    })
      .then(res => {
        console.log(res);
      });
  }

  createArrayDays(currentMonth) {
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const endDate = monthEnd;
    let dayName = '';
    let dayNumber = '';
    const days = [];
    let day = monthStart;
    while (day <= endDate) {
      dayName = dateFns.format(day, 'dddd');
      dayNumber = dateFns.format(day, 'DD');
      days.push({
        dayName, dayNumber, comment: '', rate: ''
      });
      day = dateFns.addDays(day, 1);
    }
    return days;
  }

  copyLine(index, days) {
    const copyDays = [...days];
    const newLine = {
      dayName: days[index].dayName,
      dayNumber: days[index].dayNumber,
      rate: '',
      comment: '',
      isCopied: true
    };
    copyDays.splice(index + 1, 0, newLine);
    this.setState({ days: copyDays });
  }

  deleteLine(index, days) {
    const copyDays = [...days];
    console.log('beforeCopyDays', copyDays);
    if (days[index].isCopied === true) {
      copyDays.splice(index, 1);
    }
    this.setState({ days: copyDays });
    console.log('afterCopyDays', copyDays);
  }

  weekEndGreyStyle(days, index) {
    let daysClass = '';
    let copiedClass = '';
    if (days[index].dayName === 'Sunday' || days[index].dayName === 'Saturday') { daysClass = 'weGrey'; }
    if (days[index].isCopied === true) { copiedClass = 'copiedClass'; }
    const myClassName = `${daysClass} ${copiedClass}`;

    return myClassName;
  }

  renderCell() {
    const { days } = this.state;
    return (
      <div>
        <div className="scrollBoxCRA">
          <Table celled>
            <Table.Body>
              {days.map((json, index) => (
                <div key={index}>
                  <Table.Row className={this.weekEndGreyStyle(days, index)}>
                    <th>
                      <Table.Cell>
                        <Button color="teal" onClick={() => this.copyLine(index, days)} icon="plus circle" />
                        <Button color="teal" onClick={() => this.deleteLine(index, days)} icon="minus circle" />
                        {json.dayNumber}
                      </Table.Cell>
                    </th>
                    <th>
                      <Table.Cell>{json.dayName}</Table.Cell>
                    </th>
                    <th>
                      <tr>
                        <span> Présence : </span>
                        <span>
                          <span> 0: </span>
                          <input
                            defaultChecked
                            type="radio"
                            id="zero"
                            name={`rate${index}`}
                            value="0"
                            onChange={event => this.choiceRate(index, event)}
                          />
                        </span>
                        <span>
                          <span> 1/2: </span>
                          <input
                            type="radio"
                            id="demi"
                            name={`rate${index}`}
                            value="0.5"
                            onChange={event => this.choiceRate(index, event)}
                          />
                        </span>
                        <span>
                          <span> 1: </span>
                          <input
                            type="radio"
                            id="un"
                            name={`rate${index}`}
                            value="1"
                            onChange={event => this.choiceRate(index, event)}
                          />
                        </span>
                      </tr>
                    </th>
                    <th>
                      <Table.Cell><input className="inputCra" value={json.comment} onChange={event => this.inputComment(index, event)} /></Table.Cell>
                    </th>
                  </Table.Row>
                </div>
              ))
              }
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }

  renderHeader() {
    const { currentMonth } = this.state;
    const dateFormat = 'MMMM YYYY';
    return (
      <div className="header row ">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>
            {dateFns.format(currentMonth, dateFormat)}
          </span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  render() {
    const { somme, activeItem } = this.state;
    return (
      <div className="border">
        <div className='bodyVision'>
          <Segment color='teal' inverted>
            <Menu
              inverted pointing secondary>
              <Menu.Item name='Cra' active={activeItem === 'Cra'} onClick={this.handleItemClick} />
              <Menu.Item
                name='Profil'
                active={activeItem === 'Profil'}
                onClick={this.handleItemClick}/>
              <p className="titleSpace">Espace Freelance</p>
            </Menu>
          </Segment><br /><br />
          <Form onSubmit={this.postCra}>
            <div className="calendar">
              {this.renderHeader()}
              {this.renderCell()}
              <h4><span>Nombre de </span><span>jours travaillés: <span>{somme}</span></span><br /></h4>
              <Button type="submit" color="teal"><Icon name="paper plane outline" /> &nbsp; Envoyer</Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Cra;