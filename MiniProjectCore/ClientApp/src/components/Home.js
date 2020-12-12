import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = { sourceIds: [], loading: true, modal: false };
  }

  toggle(){
    this.setState({
      modal: !this.state.modal
    })
  }

  componentDidMount() {
    this.populateSourceIdData();
  }

  static renderSourceIdsTable (sourceIds) {
    return (
      <div>
    <Table className="table-bordered text-center">
      <thead>
        <tr>
          <th><b>Source_Id</b></th>
          <th><b>Source_Name</b></th>
          <th><b>Actions</b></th>
        </tr>
      </thead>
      <tbody>
        {sourceIds.map(sourceId =>
          <tr key={sourceId.id}>
              <td>{sourceId.source_Id}</td>
              <td>{sourceId.source_Name}</td>
              <td><Button color="danger" onClick={this.toggle}>Edit</Button></td>
            </tr>
         )}
      </tbody>
    </Table>
    <div className="modal fade" id="editSourceIdModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <EditForm />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Home.renderSourceIdsTable(this.state.sourceIds);

    return (
      <div>
        <h1 id="tabelLabel" >Edit sources</h1>
        {contents}
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
