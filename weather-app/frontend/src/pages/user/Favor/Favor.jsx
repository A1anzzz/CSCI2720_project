//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import React from 'react';
import './Favor.css';
import axios from 'axios';
import LeftBar from '../leftbar/leftBar';
import { Link, Navigate } from 'react-router-dom'

let username = localStorage.getItem('username');
let uid = localStorage.getItem('uid');
let rsls = [];

export class Favourite extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          location:'',
      };
    }

    async componentDidMount() {
        let tempUser = [];
        let tempUid = null;
        await 
        axios.get('/api/users/'+username)
        .then((res) => {
          if (res.data) {
            tempUser = res.data.favLoc;
            tempUid = res.data._id;
            this.setState({
                locationlist: tempUser,
                uid: tempUid,
            });
          }
        })
        .then(
            axios
            .get('/api/locations')
            .then( (res) => {
              if (res.data) {
                rsls = [];
                this.setState({
                  location: res.data,
                });
              }
            })
            .then((x)=>{
                const result = this.state.location.filter((items, i) => {
                    return items.name.indexOf(this.state.locationlist[0]) !== -1 ; 
                });
                if(result.length>0){
                    rsls.push(result);
                }
              })
              .then((x)=>{
                const result = this.state.location.filter((items, i) => {
                    return items.name.indexOf(this.state.locationlist[1]) !== -1 ; 
                });
                if(result.length>0){
                    rsls.push(result);
                }
              })
              .then((x)=>{
                const result = this.state.location.filter((items, i) => {
                    return items.name.indexOf(this.state.locationlist[2]) !== -1 ; 
                });
                if(result.length>0){
                    rsls.push(result);
                }
              })
              .then((x)=>{
                const result = this.state.location.filter((items, i) => {
                    return items.name.indexOf(this.state.locationlist[3]) !== -1 ; 
                });
                if(result.length>0){
                    rsls.push(result);
                }
              })
              .then((x)=>{
                const result = this.state.location.filter((items, i) => {
                    return items.name.indexOf(this.state.locationlist[4]) !== -1 ; 
                });
                if(result.length>0){
                    rsls.push(result);
                }
              })
              .then((x)=>{
                const result = this.state.location.filter((items, i) => {
                    return items.name.indexOf(this.state.locationlist[5]) !== -1 ; 
                });
                if(result.length>0){
                    rsls.push(result);
                }
              })
              .then((x)=>{
                const result = this.state.location.filter((items, i) => {
                    return items.name.indexOf(this.state.locationlist[6]) !== -1 ; 
                });
                if(result.length>0){
                    rsls.push(result);
                }
              })
              .then((x)=>{
                const result = this.state.location.filter((items, i) => {
                    return items.name.indexOf(this.state.locationlist[7]) !== -1 ; 
                });
                if(result.length>0){
                    rsls.push(result);
                }
              })
              .then((x)=>{
                const result = this.state.location.filter((items, i) => {
                    return items.name.indexOf(this.state.locationlist[8]) !== -1 ; 
                });
                if(result.length>0){
                    rsls.push(result);
                }
              })
              .then((x)=>{
                const result = this.state.location.filter((items, i) => {
                    return items.name.indexOf(this.state.locationlist[9]) !== -1 ; 
                });
                if(result.length>0){
                    rsls.push(result);
                }
              })
              .then((x)=>{
                const result = this.state.location.filter((items, i) => {
                    return items.name.indexOf(this.state.locationlist[10]) !== -1 ; 
                });
                if(result.length>0){
                    rsls.push(result);
                }
              })
              .then((x)=>{
                const result = this.state.location.filter((items, i) => {
                    return items.name.indexOf(this.state.locationlist[11]) !== -1 ; 
                });
                if(result.length>0){
                    rsls.push(result);
                }
              })
              .then((x)=>{
                const result = this.state.location.filter((items, i) => {
                    return items.name.indexOf(this.state.locationlist[12]) !== -1 ; 
                });
                if(result.length>0){
                    rsls.push(result);
                }
              })
              .then((x)=>{
                const result = this.state.location.filter((items, i) => {
                    return items.name.indexOf(this.state.locationlist[13]) !== -1 ; 
                });
                if(result.length>0){
                    rsls.push(result);
                }
              })
              .then((x)=>{
                const result = this.state.location.filter((items, i) => {
                    return items.name.indexOf(this.state.locationlist[14]) !== -1 ; 
                });
                if(result.length>0){
                    rsls.push(result);
                }
                console.log(rsls);
                this.setState({
                    result: rsls,
                  });
              })
        )
        .catch((err) => console.log(err));
       

    }

  render() {
    username = localStorage.getItem('username');
    if (username === null){
        alert("Please login first!")
        return (<Navigate to="/Login"  replace />);
    }
    var theme = localStorage.getItem('theme'); 
    if (theme === "A"){
        const {result}=this.state;
    return (
        <div id="theme-A">
        <div> 
             <div className="sidebar">
                  <LeftBar/>
              </div>      
            <div className='container'>
                    <div id="Favtitle">
                        <p id="SearchTitle">My favorite cities</p>
                    </div>
                    {
                    this.state.result?
                    result.map((file,index) => <FileCard i={index} key={index} value={file} uid = {uid}/>)
                    : <div className='m-4'>
                    You have no favorite cities!
                </div>
                    }
            </div>
    </div>
    </div>
    );
    }
    else{
        const {result}=this.state;
    return (
        <div id="theme-B">
        <div> 
             <div className="sidebar">
                  <LeftBar/>
              </div>      
            <div className='container'>
                    <div id="Favtitle">
                        <p id="SearchTitle">My favorite cities</p>
                    </div>
                    {
                    this.state.result?
                    result.map((file,index) => <FileCard i={index} key={index} value={file} uid = {uid}/>)
                    : <div className='m-4'>
                    You have no favorite cities!
                </div>
                    }
            </div>
    </div>
    </div>
    );
    }
    
}
}

class FileCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hover: -1};
    }

    handleHover(index, e){
        if(this.state.hover != index){
            this.setState({hover: index})
            } 
        else {
            this.setState({hover: -1})
        }
    }

    handleOut(index, e){
        this.setState({hover: -1})
    } 

    removeList = (Uid,loc) => {
        axios
          .post("/api/user/"+Uid+"/remLoc/"+loc)
          .then((res) => window.location.reload());
    }


    render() {
        let i = this.props.i;
        const value = this.props.value;
        const uid = this.props.uid;
        return (
            <div>
                <div id="ResultCard" 
                className="card d-inline-block m-2" 
                style={{color: this.state.hover==i ? 'blue' : 'black'}}  
                onMouseOver={(e) => this.handleHover(i,e)} 
                onMouseOut={(e) => this.handleOut(i,e)}>
                    <div className="card-body">
                        <div class="row">
                    <div><Link to = {"/detail/" + value[0].name}> <h5 className="card-title"> {value[0].name}</h5> </Link></div>
                    </div>
                        <span id="RightIco"><div><button type="button" className="btn btn-primary" onClick={()=>{this.removeList(uid,value[0].name)}}>Remove</button></div></span>
                        <p className="card-text">{value[0].weather} / {value[0].temp_c}℃</p>
                    </div>
                </div>
            </div>
        )
    }          
}