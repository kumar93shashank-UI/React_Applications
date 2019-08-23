import React, { Component } from 'react';
import Image1 from './React Images/animated-clock.jpg';
import './App.css';
import Clock from './Clock';
class App extends Component {
  constructor(props) {
    console.log('constructor called');
    super(props);
    this.state = {
      title: 'React Clock'
    };
  };
  componentWillReceiveProps() {
    console.log('will receive props called');
  }
  componentWillMount() {
    console.log('will Mount called');
  }
  componentWillUpdate() {
    console.log('will Update called');
  }
  // shouldComponentUpdate() {
  //   console.log('should Update called');
  //   return true;
  // }
  componentDidMount() {
    console.log('Did Mount called');
  }
  componentDidUpdate() {
    console.log('Did Update  called');
  }

  render() {
    console.log('render  called');
    return (
      <div>
        <div className="ui center aligned icon header">
          <img src={Image1} alt="click counter" /> {this.state.title}
        </div>
        <Clock />
      </div>
    )
  }
}

export default App;
