import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import PrivateRoutes from "./PrivateRoutes";
const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      />
      <Route path="/login" element={<div>Login</div>} />
      <Route path="/about" element={<div>About</div>} />
      <Route path="/contact" element={<div>Contact</div>} />
    </Routes>
  );
};
export default App;
