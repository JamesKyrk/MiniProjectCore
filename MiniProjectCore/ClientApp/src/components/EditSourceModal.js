import React, { Component } from 'react';
import {Modal,  ModalBody} from 'reactstrap';
import axios from 'axios';

export class EditSourceModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agentGroups: ['AgentGroup1', 'AgentGroup2', 'AgentGroup3'],
            selectedSourceCode: '',
            sourcecode: '',
            sourcename: '',
            sourcegroup: '',
            agentgroup: '',
            country: 0,
            hbe: '',
            commision: '',
            logsource: ''
        }
     }

    componentDidMount(){
        this.setState({
            sourcecode: this.props.currentSource.source_Code,
            sourcename: this.props.currentSource.source_Name,
            sourcegroup: this.props.currentSource.source_Group,
            agentgroup: this.props.currentSource.agent_Group,
            country: this.props.currentSource.country_Id
        })
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    setSource = (e, source) => {
        e.preventDefault();
        let url = 'api/sources/' + source.id
        axios.put(url,{
            Id: source.id,
            Source_Id: source.source_Id,
            Source_Name: this.state.sourcename,
            Source_Code: this.state.sourcecode,
            Source_Group: this.state.sourcegroup,
            Agent_Group: this.state.agentgroup
        })
        .then(res => {
            window.location.reload();
            console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
    }

    render() {
        return (
            <div>
            <Modal size="lg" isOpen={this.props.modal}>
                {/* <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader> */}
                <ModalBody currentSource={this.props.currentSource} toggle={this.props.toggle} >
                    <h3>Edit Source ID</h3>
                    <div className="card p-3">
                        <form>
                            <div className="form-group row my-4">
                                <label className="col-lg-2 col-form-label pr-0" for="Source">Source Code:</label>
                                <div className="col-lg-4 pl-0">
                                    <input id="SourceID" type="text" className="form-control" name="sourcecode" placeholder={this.props.currentSource.source_Code} value={this.state.sourcecode} onChange={this.handleChange} ></input>
                                </div>
                                <label className="col-lg-2 col-form-label pr-0" for="SourceName">Source Name:</label>
                                <div className="col-lg-4 pl-0">
                                    <input id="SourceName" type="text" className="form-control" name="sourcename" value={this.state.sourcename} placeholder={this.props.currentSource.source_Name} onChange={this.handleChange}></input>
                                </div>
                            </div>
                            <div className="form-group row mb-4">
                                <label className="col-lg-2 col-form-label pr-0" for="SourceGroup">Source Group:</label>
                                <div className="col-lg-4 pl-0">
                                    <input id="SourceGroup" type="text" className="form-control" name="sourcegroup" value={this.state.sourcegroup} placeholder={this.props.currentSource.source_Group} onChange={this.handleChange}></input>
                                </div>
                                <label className="col-lg-2 col-form-label pr-0" for="sourceCodeSelect">Agent Group:</label>
                                <div className="col-lg-4 pl-0">
                                    <select className="form-control" id="agentGroupSelect" name="agentgroup" onChange={this.handleChange}>
                                        {(this.state.agentGroups.map((agentGroup, index) => 
                                        <option key={index} value={agentGroup}>{agentGroup}</option>))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row mb-4">
                                <label className="col-lg-2 col-form-label pr-0" for="SourceGroup">Country:</label>
                                <div className="col-lg-4 pl-0">
                                    <input id="SourceGroup" type="number" className="form-control" name="country" value={this.state.country} placeholder={this.props.currentSource.country_Id} ></input>
                                </div>
                                <label className="col-lg-2 col-form-label pr-0" for="sourceCodeSelect">HBE</label>
                                <div className="col-lg-4 pl-0">
                                    <input type="checkbox"></input>
                                </div>
                            </div>
                            <div className="form-row mb-2">
                                <button className="col-2 btn btn-secondary ml-auto mr-3" onClick={(e) => {this.setSource(e, this.props.currentSource)}}>Save</button>
                                <button className="col-2 btn btn-danger mr-4" onClick={this.props.toggle}>Cancel</button>
                            </div>

                        </form>
                    </div>
                </ModalBody>
            </Modal>
            </div>
        )
    }
}

export default EditSourceModal
