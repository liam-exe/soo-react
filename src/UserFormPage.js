import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "./modules/userform/containers/FormContainer";

import './UserFormPage.css';

class UserFormPage extends Component {
  render() {
    return (
      <div className="container">
        <h3>Enter Your Details</h3>
        <FormContainer/>
      </div>
    );
  }
}

render(<UserFormPage/>, document.getElementById("root"));

export default UserFormPage;
