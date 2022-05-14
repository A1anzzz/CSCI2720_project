//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import React from 'react';
import axios from 'axios';
import {Navigate} from 'react-router-dom';
import { BaseMap } from '../map/map';
import Table  from '../cityTable/cityTable';
import LeftBar from '../leftbar/leftBar';
import './home.css';
import'../cityTable/table.css'

let username = localStorage.getItem('username');

export class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={ };
    }


    componentDidMount() {
        this.getLocations();
      }

    getLocations = () => {
        axios
          .get('http://localhost:5000/api/locations')
          .then((res) => {
            if (res.data) {
              this.setState({
                location: res.data,
              });
            }
          })
          .catch((err) => console.log(err));
            axios.get('http://localhost:5000/api/users/'+username)
            .then((res) => {
              if (res.data) {
                const TempUid = res.data._id;
                localStorage.setItem('uid', TempUid);
              }
            })
          .catch((err) => console.log(err));
    };

    render () {
        username = localStorage.getItem('username');
        if (username === null){
            alert("Please login first!")
            return (<Navigate to="/Login"  replace />);
        }
        var theme = localStorage.getItem('theme');  
        if(theme === 'A'){
        return (
            this.state.location?
            <div id = 'theme-A'>
            {/*Bar*/}
                <div>
                    <LeftBar/>
                </div>
                <div className="mapbox" style={{margin:" 5% 15% 0 15%"}}>
                    {/*Map*/}
                    <div className="container">
                        <div className="row text-center">
                            <BaseMap locdata={this.state.location}/>
                        </div>
                    </div>
                    {/*CityTable*/}
                    <div className="table_container">
                        <div className="row text-center">
                            <h1>Commonly Used Cities</h1>
                        </div>
                        <Table data={this.state.location}/>
                    </div>
                </div>
            </div>
            :   <div className='m-4'>
            <div className="spinner-border text-dark"></div>
        </div>
 );
}
else{
    return(
        this.state.location? 
        <div id='theme-B'>
        {/*Bar*/}
            <div>
                <LeftBar/>
            </div>
            <div className="mapbox" style={{margin:" 5% 15% 0 15%"}}>
                {/*Map*/}
                <div className="container">
                    <div className="row text-center">
                        <BaseMap locdata={this.state.location}/>
                    </div>
                </div>
                {/*CityTable*/}
                <div className="table_container">
                    <div className="row text-center">
                        <h1>Commonly Used Cities</h1>
                    </div>
                    <Table data={this.state.location}/>
                </div>
            </div>
        </div>
        :   <div className='m-4'>
                <div className="spinner-border text-dark"></div>
            </div>
    )
}
    }
}

