import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import BusinessSetup from "./pages/BusinessSetup";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/business" element={<BusinessSetup />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;