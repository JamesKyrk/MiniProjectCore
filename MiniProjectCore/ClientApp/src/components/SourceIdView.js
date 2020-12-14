import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import { AddSourceCodeModal } from './AddSourceCodeModal'

export class SourceIdView extends Component {
  static displayName = SourceIdView.name;

  constructor(props) {
    super(props);
    this.state = { sourceIds: [], loading: true};
  }

  componentDidMount() {
    this.populateSourceIdData();
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      :<div> <h3>Pending Source IDs</h3>
      <p>Missing Source Code connection</p>     
      <table className="table table-bordered text-center">
      <thead>
        <tr>
          <th>Source_Id</th>
          <th>Source_Name</th>
          <th>Actions</th>
          <th>Source Code</th>
        </tr>
      </thead>
      <tbody>
        {this.state.sourceIds.map(sourceId =>
          <tr key={sourceId.id}>
              <td>{sourceId.source_Id}</td>
              <td>{sourceId.source_Name}</td>
              <td><Button color="danger" onClick={() => this.props.setSourceId(sourceId)}>Edit</Button></td>
              <td>{sourceId.source_Code}</td>
            </tr>
         )}
         
      </tbody>
    </table>
    </div>
    return (
      <div>
        {contents}
        <AddSourceCodeModal populateSourceIdData={this.populateSourceIdData} currentSourceId={this.props.currentSourceId} modal={this.props.modal} toggle={this.props.toggle}/>
      </div>
      
    );
  }

  populateSourceIdData() {
    axios.get('api/sourceIds')
      .then(res => {
          this.setState({ sourceIds: res.data, loading: false });
      })
      .catch(err => {
        console.log(err);
      })
    // this.setState({ sources: data, loading: false });
  }
}
