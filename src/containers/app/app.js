import React, { Component } from 'react';
import PageContainer from '../page-container'
import Header from '../header'

export default class App extends Component {
  render() {
    return (
    	<div>
        <Header />
      	<PageContainer />
      </div>
    );
  }
}
