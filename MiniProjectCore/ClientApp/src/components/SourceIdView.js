import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import { AddSourceCodeModal } from './AddSourceCodeModal'

export class SourceIdView extends Component {
  static displayName = SourceIdView.name;

  constructor(props) {
    super(props);
    this.state = { sourceIds: [], loading: true};
    this.renderSourceIdsTable = this.renderSourceIdsTable.bind(this);
  }

  // toggle(){
  //   this.setState({
  //     modal: !this.state.modal
  //   })
  //}

  componentDidMount() {
    this.populateSourceIdData();
  }

  renderSourceIdsTable (sourceIds) {
    return (
      <div>

    {/* <Modal
          isOpen={this.props.route.modal}
          toggle={this.props.route.toggle.bind(this)}
          className={this.props.className}
          >
          <ModalHeader
          className="modHeader"
          toggle={this.props.toggle.bind(this)}
        >
          Events of the day
        </ModalHeader>
        <ModalBody>
          <h1>hello</h1>
        </ModalBody>
    </Modal> */}

    </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      :<div> <h3>Pending Source IDs</h3>
      <p>Missing Source Code connection</p>     
      <table className="table table-bordered text-center">
      <thead>
        <tr>
          <th><b>Source_Id</b></th>
          <th><b>Source_Name</b></th>
          <th><b>Actions</b></th>
        </tr>
      </thead>
      <tbody>
        {this.state.sourceIds.map(sourceId =>
          <tr key={sourceId.id}>
              <td>{sourceId.source_Id}</td>
              <td>{sourceId.source_Name}</td>
              <td><Button color="danger" onClick={() => this.props.setSourceId(sourceId)}>Edit</Button></td>
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
