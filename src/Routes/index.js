import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Conformation from "../Component/Conformation";
import HelpCenter from "../Component/HelpCenter";
import Home from "../Component/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelpCenter />} />
        <Route path="/Conformation" element={<Conformation />} />
        <Route path="/Home" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes> 
    </BrowserRouter>
  );
};

export default Router;
