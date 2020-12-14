import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { SourceIdView } from './components/SourceIdView';
import { SourceView } from './components/SourceView';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  state = {
    modal: false,
    currentSourceId: {},
    currentSource : {}
  }

  toggle = (e) => {

    e.preventDefault();
    this.setState({
      modal: !this.state.modal
    });
    console.log(this.state.modal);
  };

  setSourceId = (sourceId) => {
    this.setState({
      currentSourceId: sourceId,
      modal: !this.state.modal
    })
    console.log(sourceId);
  }


  render () {
    return (
      <Layout>
        <Route 
          exact path='/' 
          //component={Home} 
          render={(props) => <SourceIdView {...props} currentSourceId={this.state.currentSourceId} setSourceId={this.setSourceId} toggle={this.toggle} modal={this.state.modal}/>}/>
        <Route 
          path='/counter'
          render={(props) => <SourceView {...props} currentSourceId={this.state.currentSourceId} setSourceId={this.setSourceId} toggle={this.toggle} modal={this.state.modal}/>}/>


        
      </Layout>
    );
  }
}
