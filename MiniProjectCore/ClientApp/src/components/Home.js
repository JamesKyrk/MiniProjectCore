import React, { Component } from 'react';
import axios from 'axios';


export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = { sources: [], loading: true };
  }

  componentDidMount() {
    this.populateSourceData();
  }

  render () {
    return (
      <div>
            <h1>hello</h1>
      </div>
    );
  }

  async populateSourceData() {
    axios.get('weatherforecast')
      .then(res => {
          this.setState({ sources: data, loading: false });
      })
      .catch(err => {
        console.log(err);
      })
    // this.setState({ forecasts: data, loading: false });
  }
}
