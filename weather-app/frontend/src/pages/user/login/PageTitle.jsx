//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import React, {Component} from 'react';

export class PageTitle extends Component{
    render(){
        return(
            <div>
                <h1><b>{this.props.Name}</b></h1>
            </div>
        )
    }
}