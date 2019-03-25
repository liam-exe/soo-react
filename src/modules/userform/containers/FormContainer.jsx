import React, { Component } from "react";

import Input from "../components/Input";
import Button from "../components/Button";

import ReactDOM from 'react-dom';
import CreateCharacterPage from '../../../CreateCharacterPage.js';

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        instagram: "",
        email: "",
      },
    };


    this.handleName = this.handleName.bind(this);
    this.handleInstagram = this.handleInstagram.bind(this);
    this.handleEmail = this.handleEmail.bind(this);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleInstagram(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          instagram: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleEmail(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          email: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();

    ReactDOM.render(<CreateCharacterPage/>, document.getElementById('root'));
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          name={"name"}
          title={""}
          value={this.state.newUser.name}
          placeholder={"Name"}
          handleChange={this.handleName}
        />{" "}
        {/* Name of the user */}
        <Input
          inputType={"text"}
          name={"instagram"}
          title={""}
          value={this.state.newUser.instagram}
          placeholder={"Instagram @"}
          handleChange={this.handleInstagram}
        />{" "}
        {/* Name of the user */}
        <Input
          inputType={"text"}
          name={"email"}
          title={""}
          value={this.state.newUser.email}
          placeholder={"(Optional) E-Mail"}
          handleChange={this.handleEmail}
        />{" "}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Skip"}
          style={buttonStyle}
        />{" "}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
