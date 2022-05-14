//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import React from 'react';
import axios from 'axios';
import { NavBar } from '../navbar';
import {Table} from 'react-bootstrap';
import { AddComment } from './addComment';

export class AdminComment extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            Comment:[],
            modalAdd: false,
        }
    }

    componentDidMount() {
        this.getComments();
      }
    
    getComments = () => {
        axios
          .get('/api/comments')
          .then((res) => {
            if (res.data) {
              this.setState({
                Comment: res.data,
              });
            }
          })
          .catch((err) => console.log(err));
    };

    //change the show or not for "add location" modal
    toggleAdd = () => {
        this.setState({ modalAdd: !this.state.modalAdd });
    };

    //add a new location and store it in the local db
    handleSubmit = (item) => {
        axios
        .post("/api/comments", item)
        .then((res) => {
            this.toggleAdd();
            this.getComments()
        });
    };

    //delete a location
    handleDelete = (item) => {
        axios
          .delete("/api/comments/"+item._id)
          .then((res) => this.getComments());
    };

    comeBackAdd = ()=>{
        this.toggleAdd();
    }

    //make the "add location" modal visible
    addItem = () => {
        this.setState({ modalAdd: !this.state.modalAdd });
    };

    render = () => {
        const {Comment} = this.state;
        return (
            <div>
                <div>
                    <h3 className="m-3 d-flex justify-content-center">Administration Site</h3>
                </div>
                <NavBar />
                <div style={{margin:"0 100px 0 100px"}}>
                    <Table className="mt-4" striped bordered hover size='sm'>
                        <thead>
                            <tr>
                                <th>Location</th>
                                <th>Author</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Comment.map((item,index)=>
                                <tr key={index}>
                                    <td>{item.location}</td>
                                    <td>{item.author}</td>
                                    <td>{item.text}</td>
                                    <td>
                                        <button
                                        className="btn btn-danger"
                                        onClick={() => this.handleDelete(item)}>
                                        Delete
                                        </button>
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </Table>
                    <button className="btn btn-primary m-2" onClick={this.addItem}>
                        Add comment
                    </button>
                </div>
                {this.state.modalAdd ? (
                <AddComment 
                toggle={this.toggleAdd} 
                onSave={this.handleSubmit}
                onBack={this.comeBackAdd}/>) : null}
            </div>
        )
    }
}