//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import React from 'react';
import axios from 'axios';
import { Navigate, useParams } from 'react-router-dom';
import { AddComment } from './addComment';
import './locDetail.css';
import LeftBar from '../leftbar/leftBar';
import { DMap } from './Dmap';

let uid = localStorage.getItem('uid');
let username = localStorage.getItem('username');

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }


export class LocDetail extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            modalAdd: false,
            user:{
                username: username,
            }
        }
    }

    componentDidMount() {
        this.getLocations();
        this.getComments();
      }
    
    getComments = () => {
        const {name} = this.props.params;
        axios
          .get('/api/comments/'+name)
          .then((res) => {
            if (res.data) {
              this.setState({
                comment: res.data,
              });
            }
          })
          .catch((err) => console.log(err));
    };

    getLocations = () => {
        const {name} = this.props.params;
        axios
          .get('/api/locations/'+name)
          .then((res) => {
            if (res.data) {
              this.setState({
                location: res.data,
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

    //delete the comment if the author
    /*handleDelete = (item) => {
        axios
          .delete("/api/comments/"+item._id)
          .then((res) => this.getComments());
    };*/

    comeBackAdd = ()=>{
        this.toggleAdd();
    }

    //make the "add location" modal visible
    addItem = () => {
        this.setState({ modalAdd: !this.state.modalAdd });
    };

    //add to favorite list
    addList = (name) => {
        axios
          .post("/api/user/"+uid+"/addLoc/"+name)
          .then((res) => {
            if (res.data) {
              console.log(res.data);
            }
          })
          .catch((err) => console.log(err));
      }

    render = () => {
        const {location} = this.state;
        const {comment} = this.state;
        username = localStorage.getItem('username');
        if (username === null){
            alert("Please login first!")
            return (<Navigate to="/Login"  replace />);
        }
        var theme = localStorage.getItem('theme');
        if (theme === 'A'){
                return (
            <div id="theme-A">
            <div>
                {
                    location && comment? 
                    <div>
                    <div className="sidebar">
                            <LeftBar/>
                    </div>
                    <div className="mapbox" style={{margin:" 6% 15% 0 15%"}}>
                        <div className="container">
                            <div className="row text-center">
                                <DMap locdata={location}/>
                            </div>
                        </div>
                        <div className="table_container">
                                <div className="row text-center">
                                <h1>Weather of {this.state.location.name}</h1>
                            <h4>temperature: {this.state.location.temp_c}</h4>
                            <h4>Weather: {this.state.location.weather}</h4>
                            <div className="row text-center"><button type="button" className="btn btn-primary" onClick={(locname)=>{this.addList(this.state.location.name)}}>Add to my favorite city list</button></div>
                                </div>
                        </div>
                    </div>
                    <section className="mapboxx">
                        <h3 className="m-3">Comment</h3>
                        <div>
                        {
                            comment.map((item,index)=>
                            <Comment data={item} key={index}/>
                            )
                        }
                        </div>
                        <button className="btn btn-primary m-2" onClick={this.addItem}>
                            Add comment
                        </button>
                    </section>
                    </div>
                    :<div>loading</div>
                }
                {this.state.modalAdd ? (
                <AddComment 
                locdata={location.name}
                userdata={this.state.user}
                toggle={this.toggleAdd} 
                onSave={this.handleSubmit}
                onBack={this.comeBackAdd}/>) : null}
            </div>
            </div>
        )
        }
        else{
                return (
            <div id="theme-B">
            <div>
                {
                    location && comment? 
                    <div>
                    <div className="sidebar">
                            <LeftBar/>
                    </div>
                    <div className="mapbox" style={{margin:" 6% 15% 0 15%"}}>
                        <div className="container">
                            <div className="row text-center">
                                <DMap locdata={location}/>
                            </div>
                        </div>
                        <div className="table_container">
                                <div className="row text-center">
                                <h1>Weather of {this.state.location.name}</h1>
                            <h4>temperature: {this.state.location.temp_c}</h4>
                            <h4>Weather: {this.state.location.weather}</h4>
                            <div className="row text-center"><button type="button" className="btn btn-primary" onClick={(locname)=>{this.addList(this.state.location.name)}}>Add to my favorite city list</button></div>
                                </div>
                        </div>
                    </div>
                    <section className="mapboxx">
                        <h3 className="m-3">Comment</h3>
                        <div>
                        {
                            comment.map((item,index)=>
                            <Comment data={item} key={index}/>
                            )
                        }
                        </div>
                        <button className="btn btn-primary m-2" onClick={this.addItem}>
                            Add comment
                        </button>
                    </section>
                    </div>
                    :<div>loading</div>
                }
                {this.state.modalAdd ? (
                <AddComment 
                locdata={location.name}
                userdata={this.state.user}
                toggle={this.toggleAdd} 
                onSave={this.handleSubmit}
                onBack={this.comeBackAdd}/>) : null}
            </div>
            </div>
        )
        }
    }
    }


export default withParams(LocDetail);

class Comment extends React.Component{
    render(){
        const {data, index}=this.props;
        return(
            <div className='container m-2'>
                <article className="row loc-content" key={index}>
            <div className="col-2 hidden-xs p-2">
              <figure>
               <span className="bi bi-file-person"></span>
                <figcaption id="commentAuthor" className="text-center">{data.author}: </figcaption>
              </figure>
            </div>
            <div className="col-10 p-2">
                <div className="panel panel-default arrow left">
                    <div className="panel-body">
                        <div className="comment-post">
                            <p id="commentText">{data.text}</p>
                        </div>
                    </div>
                </div>
            </div>
            </article>
            </div>
        )
    }
}