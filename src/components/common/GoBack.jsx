import React from "react";
import { useHistory } from "react-router-dom";


export default function GoBack(params) {
    const history = useHistory();

    const redirect = () => {
        history.goBack();
      };
    return <button onClick={redirect}>Go back</button>
}