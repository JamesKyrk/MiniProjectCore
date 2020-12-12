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
        {sources.map(source =>
          <tr key={source.id}>
              <td>{source.source_Code}</td>
              <td>{source.source_Name}</td>
              <td>{source.source_Group}</td>
              <td>{source.id}</td>
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
    axios.get('api/sources')
      .then(res => {
          this.setState({ sources: res.data, loading: false });
      })
      .catch(err => {
        console.log(err);
      })
    // this.setState({ sources: data, loading: false });
  }
}
