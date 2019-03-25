import React, { Component } from "react";
import { render } from "react-dom";

import './CreateCharacterPage.css';
import CharacterContainer from './modules/createcharacter/containers/CharacterContainer';

class CreateCharacterPage extends Component {
  render() {
    return (
        <CharacterContainer/>
    );
  }
}

render(<CreateCharacterPage/>, document.getElementById("root"));

export default CreateCharacterPage;
