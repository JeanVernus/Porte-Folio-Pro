import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button";
import NavBar from './Menu/Navbar';
import '../../CSS/Resto/RestoApp.css';

class App extends Component {
  render() {

    const styles = {
      box: {
        height: '635vh',
        borderStyle: 'solid',
        borderColor: 'darkmagenta',
        borderWeight: '6px'
      },
    }
    return (
      <div style={styles.box}>
        <div>
          <NavBar />
        </div>
        <div>
          <ScrollUpButton
            StopPosition={4320}
            ShowAtPosition={5500}
            EasingType='easeOutCubic'
            AnimationDuration={1000}
            ContainerClassName='ScrollUpButton__ContainerResto'
            TransitionClassName='ScrollUpButton__Toggled'
            style={{}}
            ToggledStyle={{}}>
          </ScrollUpButton>
        </div>
      </div >
    )
  }
}

export default App;