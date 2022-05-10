import React from 'react';
import {Link} from 'react-router-dom';
import { BaseMap } from '../map/map';
import Table  from '../cityTable/cityTable';
import Sidebar from './sidebar';
import './home.css';
import'../cityTable/table.css'

class Home extends React.Component {

    render = () => {
        return (
    <div>
        {/*Sidebar*/}
                <div className="sidebar" id="outer-container">
                    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    <div id="page-wrap">
                        <h1 id="title">Wheather App</h1>
                    </div>
                </div>
        <div className="mapbox">
            {/*Map*/}
            <div className="container">
            <div className="row text-center">
                <BaseMap />
            </div>
        </div>
        {/*CityTable*/}
        <div className="table_container">
            <div className="row text-center">
   <h1>Commonly Used Cities</h1>
   </div>
   <Table />
  </div>
    </div>
    </div>
 );
}
}

 export default Home;

