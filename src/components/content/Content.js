import React from "react";
import './Content.scss';
import Steps from "../steps/Steps";
import How from "../how/How";
import { Routes, Route } from 'react-router-dom';
import Product from "../product/Product";

function Content(){
  return(
    <main className="content">
      <Routes>
        <Route exact path="/" element={<Steps className="content"/> }> </Route>
        <Route exact path="/product" element={<Product className="content" /> }> </Route>
      </Routes>
      <How className="content" />
    </main>
  )
}

export default Content;