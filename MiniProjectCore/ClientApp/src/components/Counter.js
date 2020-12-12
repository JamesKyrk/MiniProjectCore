import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';


export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { sources: [], loading: true };
  }

  componentDidMount() {
    this.populatesourceData();
  }

  static rendersourcesTable (sources) {
    return (
    <Table>
      <thead>
        <tr>
          <th>Source ID</th>
          <th>Source Code</th>
          <th>Source Name</th>
          <th>Source group</th>
          <th>Agent_Group</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sources.map(source =>
          <tr key={source.id}>
              <td>{source.source_Id}</td>
              <td>{source.source_Code}</td>
              <td>{source.source_Name}</td>
              <td>{source.source_Group}</td>
              <td>{source.agent_Group}</td>
              <td>Edit</td>
          </tr>
         )}
      </tbody>
    </Table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Counter.rendersourcesTable(this.state.sources);

    return (
      <div>
        <h1 id="tabelLabel" >Edit sources</h1>
        {contents}
      </div>
    );
  }

  populatesourceData() {
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
