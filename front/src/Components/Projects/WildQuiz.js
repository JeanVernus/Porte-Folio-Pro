import React, { Component } from "react";
import "../../CSS/Project/Quiz.css";

class WildQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="quizBody">
        <div><br />
          <h2 className="navbar">
            <span >W</span>
            <span>ild</span>
            <span className="saumon">Q</span>
            <span>uiz</span>
          </h2><br /><br />
          <p className="title"> Testez vos conaissances</p>
          <div className="div-button">
            <input className="hvr-bob" value="Joueurs" type="button" onClick={this.choicePlayers} />
            <input className="hvr-bob" value="Master" type="button" onClick={this.redirectItem} />
          </div><br /><br />
          <footer>
            <h2 className="navbar">
              <span className="saumon">W</span>
              <span>ild</span>
              <span className="saumon">Q</span>
              <span>uiz</span>
            </h2>
          </footer>
        </div>
      </div>
    );
  }
}

export default WildQuiz