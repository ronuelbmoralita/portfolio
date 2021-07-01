import React, { Component } from 'react';   
import './App.css';
import './css/style.css';
import Home from './components/home'
//import Sample from './components/image'


class App extends Component {
  render() {
    return (
      <div className="App">
       	<Home></Home>
          {/*
           <Sample></Sample>
          
          */}
  </div>
);
  }
}
export default App;