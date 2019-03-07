import React, { Component } from 'react';
import './App.css';
import Age from './age/Age';
import DemoForm from './form/Form';
import SimpleCard from './card/card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleCard/>
      </div>
    );
  }
}


export default   App;
