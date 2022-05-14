//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import React from 'react';
import axios from 'axios';
import { NavBar } from '../navbar'; 
import {Table} from 'react-bootstrap';
import { AddUser } from './addUser';
import { EditUser } from './editUser';

export class AdminUser extends React.Component{

    constructor(props){
        super(props);
        this.state={
            user:[],
            modalAdd: false,
            modalEdit: false,
            activeItem:{
                username:"",
                password:"",
                userType:"",
                theme:"",
            }
        }
    }
    
    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
       //get information of users from backend (local dataset)
       axios
       .get('http://localhost:5000/api/users')
       .then((res) => {
         if (res.data) {
           this.setState({
             user: res.data,
           });
         }
       })
       .catch((err) => console.log(err));
    };

    toggleAdd = () => {
        this.setState({ modalAdd: !this.state.modalAdd });
    };

    toggleEdit = () => {
        this.setState({ modalEdit: !this.state.modalEdit });
    };

    addItem = () => {
        const item = { name: "" };
    
        this.setState({ activeItem: item, modalAdd: !this.state.modalAdd });
    };

    editItem = (item) => {
        this.setState({ activeItem: item, modalEdit: !this.state.modalEdit });
    };

    handleSubmit = (item) => {
        axios
        .post("/api/users", item)
        .then((res) => {
            this.toggleAdd();
            this.getUsers()
        });
    };

    handleSave = (item) => {
        axios
        .post("/api/users/update/"+item._id, item)
        .then((res) => {
            this.toggleEdit();
            this.getUsers()
        });
    };

    handleDelete = (item) => {
        axios
          .delete("/api/users/"+item._id)
          .then((res) => this.getUsers());
    };

    comeBackAdd = ()=>{
        this.toggleAdd();
    }

    comeBackEdit = ()=>{
        this.toggleEdit();
    }

    render = () => {
        const {user} = this.state;
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
                                <th>Username</th>
                                <th>Password</th>
                                <th>UserType</th>
                                <th>Theme</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((item,index)=>
                                <tr key={index}>
                                    <td>{item.username}</td>
                                    <td>{item.password}</td>
                                    <td>{item.userType}</td>
                                    <td>{item.theme}</td>
                                    <td>
                                        <button
                                        className="btn btn-secondary mx-2"
                                        onClick={() => this.editItem(item)}>
                                        Edit
                                        </button>
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
                    <div className="mb-4">
                    <button className="btn btn-primary m-2" onClick={this.addItem}>
                        Add User
                    </button>
                    </div>
                </div>
                {this.state.modalAdd ? (
                <AddUser 
                toggle={this.toggleAdd} 
                onSave={this.handleSubmit}
                onBack={this.comeBackAdd}/>) : null}
                {this.state.modalEdit ? (
                <EditUser
                activeItem={this.state.activeItem}
                toggle={this.toggleEdit} 
                onSave={this.handleSave}
                onBack={this.comeBackEdit}/>) : null}
            </div>
        )
    }
}