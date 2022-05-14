//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import React from 'react';
import './search.css';
import axios from 'axios';
import TopBar from './leftBar';
import { Link,Navigate } from 'react-router-dom'

let username = localStorage.getItem('username');

document.onkeydown = function (e) {
    e = e || window.event;
    if (e.keyCode == 13) {
        document.getElementById("search2").click();
        return false;
    }
}

export class SearchResult extends React.Component {
    constructor() {
        super();
        this.state = {
            content:'',
            location:'',
        }
    }

    componentDidMount(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const text = urlParams.get('content');
        axios
          .get('/api/locations')
          .then((res) => {
            if (res.data) {
              this.setState({
                location: res.data,
              });
            }
          })
          .then((x)=>{
            const result = this.state.location.filter((items, i) => {
                return items.name.includes(text) || items.weather.includes(text); 
            });
            this.setState({
                result
            });
          })
          .catch((err) => console.log(err));
    }

    inputChange = (e) => {
        const {name, value} = e.target;
    
        this.setState({
            [name]: value
        });
    };

    getResult=()=>{
        //get result
        const searchContent = this.state.content;
        const searchResult = this.state.location;
        const result = searchResult.filter((items, i) => {
            return items.name.includes(searchContent) || items.weather.includes(searchContent); 
        });
        this.setState({
            result
        });
    }

    render() {
        if (username === null){
            alert("Please login first!")
            return (<Navigate to="/Login"  replace />);
        }
        var theme = localStorage.getItem('theme');  
        if(theme === 'A'){
        const {result}=this.state;
        return (
            <div id="theme-A">
            <div className='body'>    
                <TopBar/>
                <div style={{margin:" 10% 20% 0 20%"}}>
                    <main>
                        <div>
                            <p id="SearchTitle">Search Result</p>
                            <div className="row">
                            <div id="inputWrapper" >
                                <input id="input" 
                                type="search" 
                                autoComplete="off" 
                                spellCheck="false" 
                                role="combobox" 
                                aria-live="polite" 
                                placeholder="Location? Weather?" 
                                name='content'
                                value={this.state.content} 
                                onChange={this.inputChange} className="m-3"></input>
                                <button onClick={this.getResult} className="btn m-1">
                                    Search
                                </button>
                            </div>
                            </div>
                        </div>
                        {
                        this.state.result?
                        result.map((file,index) => <FileCard i={index} key={index} value={file}/>):  <div className='m-4'>
                        <div className="spinner-border text-dark"></div>
                    </div>
                        }
                    </main>
                </div>
            </div>
            </div>
        );
    }
    
else{
    const {result}=this.state;
    return (
        <div id='theme-B'>
        <div className='body'>    
            <TopBar/>
            <div style={{margin:" 10% 20% 0 20%"}}>
                <main>
                    <div>
                        <p id="SearchTitle">Search Result</p>
                        <div className="row">
                        <div id="inputWrapper" >
                            <input id="input" 
                            type="search" 
                            autoComplete="off" 
                            spellCheck="false" 
                            role="combobox" 
                            aria-live="polite" 
                            placeholder="Location? Weather?" 
                            name='content'
                            value={this.state.content} 
                            onChange={this.inputChange} className="m-3"></input>
                            <button onClick={this.getResult} className="btn m-1">
                                Search
                            </button>
                        </div>
                        </div>
                    </div>
                    {
                    this.state.result?
                    result.map((file,index) => <FileCard i={index} key={index} value={file}/>):  <div className='m-4'>
                    <div className="spinner-border text-dark"></div>
                </div>
                    }
                </main>
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

    render() {
        let i = this.props.i;
        const value = this.props.value;
        return (
            <div>
                <div id="ResultCard" 
                className="card m-2 px-4" 
                style={{color: this.state.hover==i ? 'blue' : 'black'}}  
                onMouseOver={(e) => this.handleHover(i,e)} 
                onMouseOut={(e) => this.handleOut(i,e)}>
                    <div className="card-body">
                        <div class="row">
                    <div class="col"><Link to = {"/detail/" + value.name}><h6 className="card-title"> {value.name}</h6></Link></div>
                        <span className="bi bi-arrow-right-circle" id="RightIco" style={{width:'30'}}></span>
                        <p className="card-text">{value.weather} / {value.temp_c}℃</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }          
}


