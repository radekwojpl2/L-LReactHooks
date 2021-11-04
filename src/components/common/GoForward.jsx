import React from "react";
import { useHistory } from "react-router-dom";


export default function GoForward(params) {
    const history = useHistory();

    const redirect = () => {
        history.goForward();
      };
    return <button onClick={redirect}>Go Forward</button>
}