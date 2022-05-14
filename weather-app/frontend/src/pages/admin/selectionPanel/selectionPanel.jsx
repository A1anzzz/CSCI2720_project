//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import React from 'react';
import {Link } from "react-router-dom";

export class selectionPanel extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='container bg-white m-4 p-4'>
                    <div className='container text-center me-4'>
                    <Link className="nav-link active text-end" to="/Admin">
                        <button className="btn btn-primary m-2 p-2">
                            Administration
                        </button>
                    </Link>
                    <Link className="nav-link active text-end" to="/Homepage">
                        <button className="btn btn-primary m-2 p-2">
                            Homepage
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}