//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Nav,Container} from 'react-bootstrap';
import { Button } from 'reactstrap';
import axios from 'axios';

//navigation bar to jump to different itemlist page
export class NavBar extends React.Component{
    constructor(props) {
        super(props);
    
        // This binding is necessary to make `this` work in the callback
        this.downloadServerLog = this.downloadServerLog.bind(this);
      }

    downloadServerLog(){
        axios
            .get('/api/log')
            .then(res => {
                if(res.data){
                    //download as txt file
                    var blob = new Blob([res.data], { type: 'text/txt' });
                    var a = document.createElement('a');
                    a.download = 'filename.txt';
                    a.href = URL.createObjectURL(blob);
                    a.dataset.downloadurl = ['text/txt', a.download, a.href].join(':');
                    a.style.display = "none";
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    setTimeout(function() { URL.revokeObjectURL(a.href); }, 1500);
                }
            })
            .catch(err => console.log(err))
    }

    render = () => {
        return (
            <Navbar bg="primary" variant="dark">
                <Container>
                <Nav className="me-auto">
                    <Link className="nav-link" to="/Admin">Home</Link>
                    <Link className="nav-link " to="/Admin/User">User</Link>
                    <Link className="nav-link" to="/Admin/Location">Location</Link>
                    <Link className="nav-link" to="/Admin/Comment">Comment</Link>
                    <Link className="nav-link" to="/Logout">Logout</Link>
                    <Button onClick={this.downloadServerLog}>Download Server Log</Button>
                </Nav>
                </Container>
            </Navbar>
        )
    }
}