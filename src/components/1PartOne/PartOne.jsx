import React, { useEffect } from "react";
import GoBack from "../common/GoBack";
import GoForward from "../common/GoForward";
import { useLocation, useHistory } from "react-router-dom";

export default function PartOne() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <div className="content_container">
      <GoBack />
      <GoForward />
      <button
        onClick={() => {
          history.push({ pathname: "/partTwo/3", state: { testState: 1 } });
        }}
      >
        Special Button
      </button>
      <div>
        <span>PartOn</span>
      </div>
    </div>
  );
}
