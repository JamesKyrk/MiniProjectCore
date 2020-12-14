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
  };

  setSourceId = (sourceId) => {
    this.setState({
      currentSourceId: sourceId,
      modal: !this.state.modal
    })
    console.log(sourceId);
  }

  setSource = (source) => {
    this.setState({
      currentSource: source,
      modal: !this.state.modal
    })
    console.log(source);
  }



  render () {
    return (
      <Layout>
        <Route 
          exact path='/' 
          //component={Home} 
          render={(props) => <SourceIdView {...props} currentSourceId={this.state.currentSourceId} setSourceId={this.setSourceId} toggle={this.toggle} modal={this.state.modal}/>}/>
        <Route 
          path='/sources'
          render={(props) => <SourceView {...props} currentSource={this.state.currentSource} setSource={this.setSource} toggle={this.toggle} modal={this.state.modal}/>}/>       
      </Layout>
    );
  }
}
