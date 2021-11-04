import React, { createContext } from "react";

export const UserContext = createContext();

// export const UserContext = createContext({
//   email: "",
//   setEmail: () => {},
//   office: "",
//   setOffice: () => {}
// });

UserContext.displayName = "User context containing email and office";
