import React, { Component } from "react";
import { UserContext } from "../5PartFive/UserContext";

class PartSixClass extends Component {
  static contextType = UserContext;

  render() {
    return (
      <>
        This is Class Component {JSON.stringify(this.props.data)} and this is a
        context {this.context.email}
      </>
    );
  }
}

export default PartSixClass;
