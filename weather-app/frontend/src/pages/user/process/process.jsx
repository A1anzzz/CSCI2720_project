//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import React from 'react';
import axios from 'axios';
import { Navigate, Link } from "react-router-dom";

export class Process extends React.Component{
    constructor(){
        super();
        this.state={}; //user information: name, password, type, userType, favorite
    }

    componentDidMount(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const username = urlParams.get('userName');
        const password = urlParams.get('passwordInput');
        axios
          .get('/api/login/username/'+username+'/password/'+password)
          .then((res) => {
            if (res.data) {
                //set and sotre the current user information
                localStorage.setItem('userType', res.data);
                localStorage.setItem('username', username);
              this.setState({
                userType: res.data,
                name:username,
              });
            }
          })
          .catch((err) => console.log(err));
        //get the theme preferences of user
        axios
            .get('api/theme/'+username)
            .then(res => {
                if(res.data){
                    localStorage.setItem('theme',res.data)
                    console.log(res.data)
                }
            })
    }  

    render=()=>{
        if(!this.state.userType){
            return (
                <div className='m-4'>
                    <div className="spinner-border text-dark"></div>
                </div>
            );
        }else if (this.state.userType ==="admin") {
            return (<Navigate to="/Admin"  replace />);
        }else if (this.state.userType ==="common") {
            return (<Navigate to="/Home" state={{ name:this.state.name }} replace />);
        }else if (this.state.userType ==="noMatch") {
            return (<Notice type="noMatch"/>);
        }else {
            return (<Notice type="unExist"/>);
        }
    }
}

class Notice extends React.Component{
    render(){
        const condition=this.props.type;
        return(
            <div className='container'>
                <div className='container bg-white m-4 p-4'>
                    <div className='container text-center me-4'>
                        <h3>Notice</h3>
                        {
                            condition==="noMatch"? 
                            <p>Your password is incorrect. Please try again!</p>
                            : <p>Your input account does not exist. Please try again!</p>
                        }
                    </div>
                    <Link className="nav-link active text-end" to="/Login">Back to Login</Link>
                </div>
            </div>
        )
    }
}