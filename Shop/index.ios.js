import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './components/App';

export default class Shop extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('Shop', () => Shop);
