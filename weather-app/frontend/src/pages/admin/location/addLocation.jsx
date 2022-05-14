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

//A modal that can input a name of a location and store it in the local db
export class AddLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  //when input value changes, the state will change at the same time
  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
        [name]: value
    });
  };

  render() {
    const { toggle, onSave, onBack } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add location</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="item-name">Location Name</Label>
                <Input 
                name="name"
                id="item-name"
                type="text" 
                value={this.state.name} 
                onChange={this.handleChange}
                placeholder="Enter a city"
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
            onClick={() => onSave(this.state)}>
            Add
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}