import React, { Component } from "react";
import PartSixClass from "./PartSixClass";
import { withLoadPostsHoc } from "./wrappers/withLoadPostsHoc";

class PartSixClassHoc extends Component {
  render() {
    const data = this.props.data;

    return <>This is Component Six extended with hoc {JSON.stringify(data)}</>;
  }
}

export default withLoadPostsHoc(PartSixClassHoc);
