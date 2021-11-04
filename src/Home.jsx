import React, { useContext } from "react";
import { UserContext } from "./components/5PartFive/UserContext";

export default function Home() {
  const { state, dispatch } = useContext(UserContext);

  return (
    <div>
      {state.email}
      <br />
      {state.office}
      <br />
      <button
        onClick={() => {
          dispatch({ type: "change_email", payload: "radek@gamil.com" });
        }}
      >
        Change Email
      </button>
      <button
        onClick={() => {
          dispatch({ type: "change_office" });
        }}
      >
        Change Office
      </button>
    </div>
  );
}
