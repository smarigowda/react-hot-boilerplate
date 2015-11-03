import React, { Component } from 'react';
var BestJS = require('./BestJS');

export default class App extends Component {
  render() {
    return (
        <div>
          <h1>Sukruthi...Welcome to hot module replacement...</h1>
          <BestJS/>
        </div>
    );
  }
}
