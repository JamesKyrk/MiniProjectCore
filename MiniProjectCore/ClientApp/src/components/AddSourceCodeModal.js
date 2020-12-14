import React, { Component } from 'react'
import {Modal,  ModalBody} from 'reactstrap';
import axios from 'axios';


export class AddSourceCodeModal extends Component {
    state = {
        sourceCodes: ['sourceCode1', 'sourceCode2', 'sourceCode3'],
        selectedSourceCode: ''
    }


    handleChange = (e) => {
        this.setState({selectedSourceCode: e.target.value})
    }

    setSourceCode = (e, sourceId) => {
        e.preventDefault();
        let url = 'api/sourceIds/' + sourceId.id
        axios.put(url,{
            Id: sourceId.id,
            Source_Name: sourceId.source_Name,
            Source_Code: this.state.selectedSourceCode,
            Source_Id: sourceId.source_Id,
            Source_Group: sourceId.source_Group
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
            <Modal size="lg" isOpen={this.props.modal}>
                {/* <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader> */}
                <ModalBody currentSourceId={this.props.currentSourceId} toggle={this.props.toggle} >
                    <h3>Edit Source ID</h3>
                    <div className="card p-3">
                        <form>
                            <div className="form-group row my-4">
                                <label className="col-lg-2 col-form-label pr-0" for="SourceID">Source ID:</label>
                                <div className="col-lg-4 pl-0">
                                    <input id="SourceID" type="text" className="form-control" value={this.props.currentSourceId.source_Id} disabled></input>
                                </div>
                                <label className="col-lg-2 col-form-label pr-0" for="SourceName">Source Name:</label>
                                <div className="col-lg-4 pl-0">
                                    <input id="SourceName" type="text" className="form-control" value={this.props.currentSourceId.source_Name} disabled></input>
                                </div>
                            </div>
                            <div className="form-group row mb-4">
                                <label className="col-lg-2 col-form-label pr-0" for="sourceCodeSelect">Source Code:</label>
                                <div className="col-lg-4 pl-0">
                                    <select className="form-control" id="sourceCodeSelect" onChange={this.handleChange}>
                                        <option value=''></option>
                                        {(this.state.sourceCodes.map((sourceCode, index) => 
                                        <option key={index} value={sourceCode}>{sourceCode}</option>))
                                        }
                                    </select>
                                </div>
                                <label className="col-lg-2 col-form-label pr-0" for="SourceGroup">Source Group:</label>
                                <div className="col-lg-4 pl-0">
                                    <input id="SourceGroup" type="text" className="form-control" value={this.props.currentSourceId.source_Group} disabled></input>
                                </div>
                            </div>
                            <div className="form-row mb-2">
                                <button className="col-2 btn btn-secondary ml-auto mr-3" onClick={(e) => {this.setSourceCode(e, this.props.currentSourceId)}}>Save</button>
                                <button className="col-2 btn btn-danger mr-4" onClick={this.props.toggle}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </ModalBody>
            </Modal>
        )
    }
}

