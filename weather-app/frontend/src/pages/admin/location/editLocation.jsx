//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

//A modal that can show the original information of a location and make some change
export class EditLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        };
    }

    handleChange = (e) => {
        let { name, value } = e.target;

        const activeItem = { ...this.state.activeItem, [name]: value };

        this.setState({ activeItem });
    };

    render() {
        //toggle, onSave, onBack are properties from parent
        //toggle: determine whether the modal shows or not
        //onSave: save the change
        //onBack: return to location list page
        const { toggle, onSave, onBack } = this.props;

        return (
        <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}>Edit location</ModalHeader>
            <ModalBody>
            <Form>
                <FormGroup>
                    <Label for="item-name">Name</Label>
                    <Input 
                    name="name"
                    id="item-name"
                    type="text" 
                    value={this.state.activeItem.name} 
                    onChange={this.handleChange}
                    placeholder="Enter location name"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="item-latitude">Latitude</Label>
                    <Input 
                    name="lat"
                    id="item-latitude"
                    type="text" 
                    value={this.state.activeItem.lat} 
                    onChange={this.handleChange}
                    placeholder="Enter location latitude"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="item-Longitude">Longitude</Label>
                    <Input 
                    name="lon"
                    id="item-Longitude"
                    type="text" 
                    value={this.state.activeItem.lon} 
                    onChange={this.handleChange}
                    placeholder="Enter location longitude"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="item-Temperature">Temperature</Label>
                    <Input 
                    name="temp_c"
                    id="item-Temperature"
                    type="text" 
                    value={this.state.activeItem.temp_c} 
                    onChange={this.handleChange}
                    placeholder="Enter location temperature"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="item-Weather">Weather</Label>
                    <Input 
                    name="weather"
                    id="item-Weather"
                    type="text" 
                    value={this.state.activeItem.weather} 
                    onChange={this.handleChange}
                    placeholder="Enter location weather"
                    />
                </FormGroup>
            </Form>
            </ModalBody>
            <ModalFooter>
                <Button
                color="danger"
                onClick={() => onBack()}>
                    back
                </Button>
                <Button
                color="success"
                onClick={() => onSave(this.state.activeItem)}>
                    Save
                </Button>
            </ModalFooter>
      </Modal>
    );
  }
}