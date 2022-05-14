//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import React from 'react';
import axios from 'axios';
import { NavBar } from '../navbar';
import {Table} from 'react-bootstrap';
import { AddLocation } from './addLocation';
import { EditLocation } from './editLocation';

//monitor location
//can do CURD on location
export class AdminLocation extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            location:[],
            modalAdd: false,
            modalEdit: false,
            activeItem: {
                _id:"",
                name: "",
                lat: 10,
                lon: 10,
                temp_c:10,
                weather:"",
            },
        }
    }

    componentDidMount() {
        this.getLocations();
      }
    
    getLocations = () => {
        //get information of locations from backend (local dataset)
        axios
          .get('/api/locations')
          .then((res) => {
            if (res.data) {
              this.setState({
                location: res.data,
              });
            }
          })
          .catch((err) => console.log(err));
    };

    refreshItem = () =>{
        const {location} = this.state;

        location.map((item,index)=>{
            //first, get the latest information from weather api
            axios
            .get('https://api.weatherapi.com/v1/current.json?key=90df39a3466a4342a72160904220905&q='+item.name)
            .then((res) => {
                if (res.data) {
                    const itemx = {
                        name: res.data.location.name,
                        lat: res.data.location.lat,
                        lon: res.data.location.lon,
                        temp_c: res.data.current.temp_c,
                        weather: res.data.current.condition.text
                    };

                    //second, store the updated information in the local dataset
                    axios
                    .post("/api/locations/update/"+item._id, itemx)
                    .then((resp) => {
                        this.getLocations();
                        return 0;
                    });
                }
                else {
                    console.log("Refresh failed");
                    return 0;
                }
            })
            .catch((err) => console.log(err));
            return 0;
        })
    };

    //change the show or not for "add location" modal
    toggleAdd = () => {
        this.setState({ modalAdd: !this.state.modalAdd });
    };

    //change the show or not for "edit location" modal
    toggleEdit = () => {
        this.setState({ modalEdit: !this.state.modalEdit });
    };

    //add a new location and store it in the local db
    handleSubmit = (item) => {
        //first, get the information from weather api
        axios
            .get('https://api.weatherapi.com/v1/current.json?key=90df39a3466a4342a72160904220905&q='+item.name)
            .then((res) => {
                if (res.data) {
                    const item = {
                        name: res.data.location.name,
                        lat: res.data.location.lat,
                        lon: res.data.location.lon,
                        temp_c: res.data.current.temp_c,
                        weather: res.data.current.condition.text
                    };

                    //second, store the information in the local dataset
                    axios
                    .post("/api/locations", item)
                    .then((res) => {
                        this.toggleAdd();
                        this.getLocations()
                    });
                }
                else {
                    console.log("No location")
                }
            })
            .catch((err) => console.log(err));
    };

    //update information of locations in the backend (local dataset) and re-render the page
    handleSave = (item) => {
        axios
        .post("/api/locations/update/"+item._id, item)
        .then((res) => {
            this.toggleEdit();
            this.getLocations()
        });
    };

    //delete a location
    handleDelete = (item) => {
        axios
          .delete("/api/locations/"+item._id)
          .then((res) => this.getLocations());
    };

    comeBackAdd = ()=>{
        this.toggleAdd();
    }

    comeBackEdit = ()=>{
        this.toggleEdit();
    }

    //make the "add location" modal visible
    addItem = () => {
        const item = { name: "" };
    
        this.setState({ activeItem: item, modalAdd: !this.state.modalAdd });
    };

    //make the "edit location" modal visible
    editItem = (item) => {
        this.setState({ activeItem: item, modalEdit: !this.state.modalEdit });
    };

    render = () => {
        const {location} = this.state;
        return (
            <div>
                <div>
                    <h3 className="m-3 d-flex justify-content-center">Administration Site</h3>
                </div>
                <NavBar />
                <div style={{margin:"0 100px 0 100px"}}>
                    <Table className="mt-4" striped bordered hover size='sm'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Latitude</th>
                                <th>Longitude</th>
                                <th>Temperature</th>
                                <th>Weather</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                location.map((item,index)=>
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.lat}</td>
                                    <td>{item.lon}</td>
                                    <td>{item.temp_c}</td>
                                    <td>{item.weather}</td>
                                    <td>
                                        <button
                                        className="btn btn-secondary mx-2"
                                        onClick={() => this.editItem(item)}>
                                        Edit
                                        </button>
                                        <button
                                        className="btn btn-danger"
                                        onClick={() => this.handleDelete(item)}>
                                        Delete
                                        </button>
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </Table>
                    <div className="mb-4">
                    <button className="btn btn-success my-2" onClick={this.refreshItem}>
                        Refresh location
                    </button>
                    <button className="btn btn-primary m-2" onClick={this.addItem}>
                        Add location
                    </button>
                    </div>
                </div>
                {this.state.modalAdd ? (
                <AddLocation 
                toggle={this.toggleAdd} 
                onSave={this.handleSubmit}
                onBack={this.comeBackAdd}/>) : null}
                {this.state.modalEdit ? (
                <EditLocation
                activeItem={this.state.activeItem}
                toggle={this.toggleEdit} 
                onSave={this.handleSave}
                onBack={this.comeBackEdit}/>) : null}
            </div>
        )
    }
}