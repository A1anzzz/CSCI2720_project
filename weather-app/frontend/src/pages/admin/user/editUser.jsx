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

export class EditUser extends Component {
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
        const { toggle, onSave, onBack } = this.props;

        return (
        <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}>Edit user</ModalHeader>
            <ModalBody>
            <Form>
                <FormGroup>
                    <Label for="item-username">Name</Label>
                    <Input 
                    name="username"
                    id="item-username"
                    type="text" 
                    value={this.state.activeItem.username} 
                    onChange={this.handleChange}
                    placeholder="Enter username"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="item-latitude">Password</Label>
                    <Input 
                    name="password"
                    id="item-password"
                    type="text" 
                    value={this.state.activeItem.password} 
                    onChange={this.handleChange}
                    placeholder="Enter location latitude"
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