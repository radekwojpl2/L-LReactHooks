import React, { useState, useMemo, useReducer } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState("radoslaw.bajor@avanade.com");
  const [office, setOffice] = useState("Krakow");

  function userReducer(state, action) {
    switch (action.type) {
      case "change_email": {
        return { ...state, email: action.payload };
      }
      case "change_office": {
        return { ...state, office: "Krakow" };
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
    }
  }

  //WE CAN USE USE EFFECT HOOK TO LOAD DATA

  //SOMETHING IS WRONG !!!
  // const value = useMemo(
  //   () => ({ email, setEmail, office, setOffice }),
  //   [email, office]
  // );

  const [state, dispatch] = React.useReducer(userReducer, {
    email: "empty email",
    office: "empty office",
  });

  const value = {state, dispatch};

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
