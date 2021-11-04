import React from "react";
import GoBack from "../common/GoBack";
import GoForward from "../common/GoForward";
import { useParams, useLocation } from "react-router-dom";

export default function PartTwo(params) {
  let { id } = useParams();
  const location = useLocation();

  return (
    <div className="content_container">
      <GoBack />
      <GoForward />
      <div>PartTwo, this is id of this component {id}</div>
      {location && location.state && <div>{JSON.stringify(location)}</div>}
    </div>
  );
}
