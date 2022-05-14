//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import React, {Component} from 'react';

export class LoginForm extends Component{
    constructor(){
        super();
        this.state={
            userName: "",
            passwordInput: "",
            userType: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }

    render(){
        return(
            <form action='/Process'>
                <br></br>
                <div className="form-group">
                    <label>Username</label>
                    <input 
                    name="userName"
                    type="text" 
                    className="form-control" 
                    placeholder="Enter your username" 
                    value={this.state.userName} 
                    onChange={this.handleChange} />
                </div>
                <br></br>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                    name="passwordInput"
                    type="password" 
                    className="form-control" 
                    placeholder="Enter your password" 
                    value={this.state.passwordInput} 
                    onChange={this.handleChange}/>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">Log In</button>
                
                
            </form>
        )
    }
}