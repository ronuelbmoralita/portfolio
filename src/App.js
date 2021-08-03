import React, { Component } from 'react';   
import './App.css';
import Home from './components/home';
import './css/style.css';

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