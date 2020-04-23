import React from 'react';
import './App.css';
import SeasonDisplay from "./SeasonDisplays.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errorMessage: "",
    };


    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude});
      },
      err => {
        this.setState({errorMessage: err.message})
      }
  );
  }
  render() {
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if(!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    return <div>Loading</div>
  }
}
export default App;
