import React from "react";
import './Content.scss';
import Steps from "../steps/Steps";
import How from "../how/How";

function Content(){
  return(
    <main className="content">
       <Steps className="content"/>
       <How className="content" />
    </main>
  )
}

export default Content;