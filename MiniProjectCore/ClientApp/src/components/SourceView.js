import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import EditSourceModal from './EditSourceModal';


export class SourceView extends Component {
  static displayName = SourceView.name;

  constructor(props) {
    super(props);
    this.state = { 
      sources: [],
      loading: true, 
      sourceGroups:['TA', 'OTA', 'WEB-IND', 'TO'], 
      contents: '',
      sourceid: '',
      sourcecode: '',
      sourcename: '',
      sourcegroup: '',  
      agentgroup: '',
      currentSource: {}
    
    
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  componentDidMount() {
    this.populatesourceData();
  }

  search = (e) => {
    e.preventDefault();
    axios.post('api/sources/search', {
      Source_Name: this.state.sourcename,
      Source_Id: this.state.sourceid,
      Source_Code: this.state.sourcecode,
      Source_Group: this.state.sourcegroup,
      Agent_Group: this.state.agentgroup
    }).then(res => {
        this.setState({sources: res.data})
    })
  }

  clear = (e) => {
    e.preventDefault();
    this.setState({sourceid: '', sourcecode: '', sourcename: '', sourcegroup: '', agentgroup:''});
    this.populatesourceData();
  }

  render() {
    return (
      <div id="container-card" className="card py-3 px-3">
          <h3 id="tabelLabel" >Source Management</h3>
          <form>
              <div className="mt-5 form-group row justify-content-between">
                  <label className="col-lg-2 col-form-label pr-0" for="SourceID">Source ID:</label>
                  <div className="col-lg-4 pl-0">
                      <input id="SourceID" type="text" className="form-control" name="sourceid" value={this.state.sourceid} onChange={this.handleChange}></input>
                  </div>
                  <label className="col-lg-2 col-form-label pr-0" for="SourceName">Source Name:</label>
                  <div className="col-lg-4 pl-0">
                      <input id="SourceName" type="text" className="form-control" name="sourcename" value={this.state.sourcename} onChange={this.handleChange}></input>
                  </div>
              </div>
              <div className="form-group row mb-4">
                  <label className="col-lg-2 col-form-label pr-0" for="SourceID">Source Code:</label>
                  <div className="input-group col-lg-4 pl-0">
                      <input id="SourceName" type="text" className="form-control" name="sourcecode" value={this.state.sourcecode} onChange={this.handleChange}></input>
                      <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">New</button>
                      </div>
                  </div>
                  <label className="col-lg-2 col-form-label pr-0" for="sourceGroupSelect">Source Group:</label>
                  <div className="col-lg-4 pl-0">
                      <select className="form-control" id="sourceGroupSelect" name="sourcegroup" onChange={this.handleChange}>
                          <option value=''></option>
                          {(this.state.sourceGroups.map((sourceGroup, index) => 
                          <option key={index} value={sourceGroup}>{sourceGroup}</option>))
                          }
                      </select>
                  </div>
              </div>
              <div className="form-group row mb-4">
              <label className="col-lg-2 col-form-label pr-0" for="SourceID">Agent Group:</label>
                  <div className="input-group col-lg-4 pl-0">
                      <input id="SourceName" type="text" className="form-control" name="agentgroup" value={this.state.agentgroup} onChange={this.handleChange}></input>
                      <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">New</button>
                      </div>
                  </div>
              </div>
              <div className="form-row mb-2">
                  <button className="col-2 btn btn-secondary mr-3" onClick={this.search}>Search</button>
                  <button className="col-2 btn btn-danger mr-3" onClick={this.clear}>Clear</button>
                  <button className="col-2 btn btn-danger mr-auto">Close</button>
              </div>
          </form>
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th>Source ID</th>
                <th>Source Code</th>
                <th>Source Name</th>
                <th>Source Group</th>
                <th>Agent Group</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.sources.map(source =>
                <tr key={source.id}>
                  <td>{source.source_Id}</td>
                  <td>{source.source_Code}</td>
                  <td>{source.source_Name}</td>
                  <td>{source.source_Group}</td>
                  <td>{source.agent_Group}</td>
                  <td><button className="btn btn-danger" onClick={() => this.props.setSource(source)} >Edit</button></td>
                </tr>
              )}
              
            </tbody>
          </table>
          <EditSourceModal currentSource={this.props.currentSource} modal={this.props.modal} toggle={this.props.toggle} />
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
  }
}
