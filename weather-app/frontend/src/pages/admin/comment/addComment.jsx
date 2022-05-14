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

//A modal that can input comment and store it in the local db
export class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      author:"",
      text:"",
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
        <ModalHeader toggle={toggle}>Add Comment</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="item-name">Location</Label>
                <Input 
                name="location"
                id="item-name"
                type="text" 
                value={this.state.location} 
                onChange={this.handleChange}
                placeholder="Enter a location"
                />
            </FormGroup>
            <FormGroup>
              <Label for="item-name">Author</Label>
                <Input 
                name="author"
                id="item-author"
                type="text" 
                value={this.state.author} 
                onChange={this.handleChange}
                placeholder="Enter an author"
                />
            </FormGroup>
            <FormGroup>
              <Label for="item-name">Content</Label>
                <Input 
                name="text"
                id="item-text"
                type="text" 
                value={this.state.text} 
                onChange={this.handleChange}
                placeholder="Enter some comment"
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