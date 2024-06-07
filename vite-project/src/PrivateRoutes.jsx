import React from "react";
import { Navigate } from "react-router-dom";
import { Authen } from "./Authen";
const PrivateRoutes = ({ children }) => {
  return Authen() ? children : <Navigate to="/login" />;
};
export default PrivateRoutes;
