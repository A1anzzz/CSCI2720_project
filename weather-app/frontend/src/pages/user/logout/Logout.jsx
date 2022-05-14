//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import './Logout.module.css';
import { PageTitle } from './PageTitle';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function Logout() {
  localStorage.clear();
  return (
    <div className="bg-white p-5" style={{margin:"20% 20% 0 20%"}}>
      <header className="App-header" >
        <PageTitle Name='Thank you for using our app!'/>
      </header>
      <br></br>
      <ReturnButton/>
    </div>
  );
}

class ReturnButton extends Component{
  constructor(props){
    super(props);
    
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(event){
    console.log("testing");
  }
  
  render(){
    return(
      <div className="return-button">
        <Link to="/Login">
          <button className="btn btn-primary btn-lg btn-block" onClick={this.handleClick}>
            Return to login
          </button>
        </Link>
      </div>
    )
  }
}
