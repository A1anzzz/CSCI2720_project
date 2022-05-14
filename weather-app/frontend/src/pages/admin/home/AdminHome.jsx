//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import React from 'react';
import { NavBar } from '../navbar';

class AdminHome extends React.Component {

    render = () => {
        return (
                <div>
                    <div className="m-3">
                        <h3 className="m-3 d-flex justify-content-center">Administration Site</h3>
                    </div>
                    <NavBar />
                    <div className="bg-white p-3" style={{margin:"25px 100px 50px 100px"}}>
                        <h3 className=" my-3">In this site, you can:</h3>
                        <p>1. Refresh data, i.e. reload from the online dataset</p>
                        <p>2. CRUD stored location data in the local database</p>
                        <p>3. CRUD user data in the local database</p>
                        <p>4. Produce a log text file for all the frontend requests</p>
                        <br></br>
                    </div>
                </div>
        );
    }
 }

 export default AdminHome;