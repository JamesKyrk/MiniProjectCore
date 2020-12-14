import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';


export class SourceView extends Component {
  static displayName = SourceView.name;

  constructor(props) {
    super(props);
    this.state = { sources: [], loading: true, sourceGroups:['TA', 'OTA', 'WEB-IND', 'TO'], selectedSourceGroup: '', contents: ''}
  }

  handleChange = (e) => {
    this.setState({selectedSourceGroup: e.target.value})
  }
  componentDidMount() {
    this.populatesourceData();
  }

  search = () => {
    
  }


  render() {
    return (
      <div id="container-card" className="card py-3 px-3">
          <h3 id="tabelLabel" >Source Management</h3>
          <form>
              <div className="mt-5 form-group row justify-content-between">
                  <label className="col-lg-2 col-form-label pr-0" for="SourceID">Source ID:</label>
                  <div className="col-lg-4 pl-0">
                      <input id="SourceID" type="text" className="form-control" value={this.props.currentSourceId.source_Id}></input>
                  </div>
                  <label className="col-lg-2 col-form-label pr-0" for="SourceName">Source Name:</label>
                  <div className="col-lg-4 pl-0">
                      <input id="SourceName" type="text" className="form-control" value={this.props.currentSourceId.source_Name}></input>
                  </div>
              </div>
              <div className="form-group row mb-4">
                  <label className="col-lg-2 col-form-label pr-0" for="SourceID">Source Code:</label>
                  <div className="input-group col-lg-4 pl-0">
                      <input id="SourceName" type="text" className="form-control" value={this.props.currentSourceId.source_Name}></input>
                      <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">New</button>
                      </div>
                  </div>
                  <label className="col-lg-2 col-form-label pr-0" for="sourceGroupSelect">Source Code:</label>
                  <div className="col-lg-4 pl-0">
                      <select className="form-control" id="sourceGroupSelect" onChange={this.handleChange}>
                          {(this.state.sourceGroups.map((sourceGroup, index) => 
                          <option key={index} value={sourceGroup}>{sourceGroup}</option>))
                          }
                      </select>
                  </div>
              </div>
              <div className="form-group row mb-4">
              <label className="col-lg-2 col-form-label pr-0" for="SourceID">Agent Group:</label>
                  <div className="input-group col-lg-4 pl-0">
                      <input id="SourceName" type="text" className="form-control" value={this.props.currentSourceId.source_Name}></input>
                      <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">New</button>
                      </div>
                  </div>
              </div>
              <div className="form-row mb-2">
                  <button className="col-2 btn btn-secondary mr-3" onClick={this.props.toggle}>Search</button>
                  <button className="col-2 btn btn-danger mr-3" onClick={this.props.toggle}>Clear</button>
                  <button className="col-2 btn btn-danger mr-auto" onClick={this.props.toggle}>Close</button>
              </div>
          </form>
          <div>
            {this.state.contents}
          </div>
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
