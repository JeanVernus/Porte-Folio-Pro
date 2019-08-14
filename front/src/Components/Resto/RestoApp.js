import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button";
import '../../CSS/Resto/RestoApp.css';
import NavBar from './Menu/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <ScrollUpButton
            StopPosition={0}
            ShowAtPosition={500}
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