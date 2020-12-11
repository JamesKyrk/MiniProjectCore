import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';


export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = { sources: [], loading: true };
  }

  componentDidMount() {
    this.populateSourceData();
  }

  static renderSourcesTable (sources) {
    return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {sources.map(forecast =>
          <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
         )}
      </tbody>
    </Table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Home.renderSourcesTable(this.state.sources);

    return (
      <div>
        <h1 id="tabelLabel" >Edit sources</h1>
        {contents}
      </div>
    );
  }

  populateSourceData() {
    axios.get('weatherforecast')
      .then(res => {
          this.setState({ sources: res.data, loading: false });
      })
      .catch(err => {
        console.log(err);
      })
    // this.setState({ forecasts: data, loading: false });
  }
}
