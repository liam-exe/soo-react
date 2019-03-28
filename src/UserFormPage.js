import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "./modules/userform/containers/FormContainer";

import './UserFormPage.css';

class UserFormPage extends Component {
  render() {
    return (
      <div className="container">
        <h3>정보를 입력하시면 자동으로 밍글이 굿즈 증정 이벤트에 응모됩니다</h3>
        <br/>
        <FormContainer/>
      </div>
    );
  }
}

render(<UserFormPage/>, document.getElementById("root"));

export default UserFormPage;
