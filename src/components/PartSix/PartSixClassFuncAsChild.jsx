import React, { Component } from "react";
import { PartSixFuncAsChild } from "./wrappers/PartSixFuncAsChild";
import { UserContext } from "../5PartFive/UserContext";

export default class PartSixClassFuncAsChild extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ email }) => {
          return (
            <PartSixFuncAsChild>
              {(data) => (
                <div>
                  This is Part Six with function as a child, {JSON.stringify(data)} and this is context user email {email}
                </div>
              )}
            </PartSixFuncAsChild>
          );
        }}
      </UserContext.Consumer>
    );
  }
}
