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

export class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      userType: "",
      theme:"B"
    };
  }

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
        <ModalHeader toggle={toggle}>Add user</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="item-username">Username</Label>
                <Input 
                name="username"
                id="item-username"
                type="text" 
                value={this.state.username} 
                onChange={this.handleChange}
                placeholder="Enter username"
                />
            </FormGroup>
            <FormGroup>
              <Label for="item-password">Username</Label>
                <Input 
                name="password"
                id="item-password"
                type="password" 
                value={this.state.password} 
                onChange={this.handleChange}
                placeholder="Enter password"
                />
            </FormGroup>
            <FormGroup check className="row">
              <Label check>
                <Input
                  type="checkbox"
                  name="userType"
                  value="admin" 
                  checked={this.state.userType==="admin" }
                  onChange={this.handleChange}
                />
                admin
              </Label>
              <Label>
                <Input
                  type="checkbox"
                  name="userType"
                  value="common" 
                  checked={this.state.userType==="common"}
                  onChange={this.handleChange}
                />
                common
              </Label>
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