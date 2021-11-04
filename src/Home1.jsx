import React, { useContext } from "react";
import { UserContext } from "./components/5PartFive/UserContext";

export default function Home() {
  const { email, office, setEmail, setOffice } = useContext(UserContext);

  return (
    <div>
      {email}
      <br />
      {office}
      <br />
      <button
        onClick={() => {
          setOffice("Krakow 2");
        }}
      >
        Change Office
      </button>
      <button
        onClick={() => {
          setEmail("radekbajor27@gmail.com");
        }}
      >
        Change Email
      </button>
    </div>
  );
}
