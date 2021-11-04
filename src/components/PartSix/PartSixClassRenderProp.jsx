import React, { Component } from "react";
import { RenderProp } from "./wrappers/PartSixRenderProp";

export default class PartSixClassRenderProp extends Component {
  render() {
    return (
      <RenderProp
        render={(data) => {
          return (
            <div>This is Part six with render prop {JSON.stringify(data)}</div>
          );
        }}
      />
    );
  }
}
