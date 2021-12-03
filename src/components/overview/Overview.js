import React, { useState } from "react";
import './Overview.scss';

function Overview(){
  
  const [display, setDislay] = useState(false);

  function handleRedmoreClick(){
    setDislay(true);
  }

  return(
    <div className="overview">
      <h2 className="overview__title">Overview</h2>
      <h3 className="overview__subtitle">Who It's For</h3>
      <p className="overview__text">Very Dry, Dry, Dry Combination Skin (Type 1, 2)</p>
      <h3 className="overview__subtitle">What It Is</h3>
      <p className="overview__text">Step 3 in our customized 3-Step Skincare System.
        Dermatologist-developed face moisturizer softens, smooths, improves. Leaves skin glowing.
      </p>
      <h3 className="overview__subtitle">What It Does</h3>
      <ul className="overview__list">
        <li className="overview__item">Silky lotion delivers 8-hour hydration.</li>
        <li className="overview__item">Slips on easily, absorbs quickly.</li>
        <li className="overview__item">Helps strengthen skin’s own moisture barrier so more moisture stays in. 
        Skin that holds onto moisture has a youthful-looking glow.</li>
      </ul>
      <h3 className={`overview__subtitle ${display === false ? "overview__subtitle_display_none" : ""} `}>Key Ingredients</h3>
      <p className={`overview__text ${display === false ? "overview__text_display_none" : ""} `}>Sunflower Seed Cake, 
      Barley Extract and Cucumber Fruit Extract help strengthen skin’s barrier, improve 
      its resiliency, and balance and retain skin’s moisture levels. Hyaluronic acid acts 
      as a natural moisture magnet/humectant.</p>
      <button className={`overview__readmore ${display === false ? "" : "overview__readmore_display_none"}`} onClick={handleRedmoreClick}>Read more...</button>
    </div>
  )
}

export default Overview;