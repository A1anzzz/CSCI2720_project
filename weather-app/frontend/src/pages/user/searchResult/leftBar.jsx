//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import React from 'react';
import {Navbar, Nav, Form, FormControl, Container, Button, Offcanvas} from 'react-bootstrap';
import { useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

const TopBar= () => {


    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //get the user infomation from localStorage
    let username = localStorage.getItem('username');

     //Swtich to theme A
    const switchToThemeA = () => {
      localStorage.setItem('theme', 'A');
      const username = localStorage.getItem('username');
      axios
          .post('api/theme/'+username+'/'+'A')
          .then(res => {
              window.location.reload()
              return false;
          })
        }

  //Swtich to theme B
 const switchToThemeB = () => {
    localStorage.setItem('theme', 'B');
    const username = localStorage.getItem('username');
    axios
    .post('api/theme/'+username+'/'+'B')
    .then(res => {
        window.location.reload()
        return false;
    })
}
  
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand className="btn" onClick={handleShow}>{username}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                    <div className='mx-4'><button type="button" class="btn btn-primary" onClick={switchToThemeA}>Theme Blue</button></div>
                    <div className='mx-4'><button type="button" class="btn btn-primary" onClick={switchToThemeB}>Theme Red</button></div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton className='m-4'>
            <Offcanvas.Title><h4>{username}</h4></Offcanvas.Title>
          </Offcanvas.Header>
            <div className='m-4'><Link to={"/Home"}><h6>Home</h6></Link></div>
            <div className='m-4'><Link to={"/Favor"}><h6>My favorite</h6></Link></div>
            <div className='m-4'><Link to={"/Logout"}><h6>logout</h6></Link></div>
        </Offcanvas>
      </>
    );
};

export default TopBar;