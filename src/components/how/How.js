import React from "react";
import './How.scss';
import ChooseIcon from '../../images/how/choose.svg';
import BuyIcon from '../../images/how/buy.svg';
import TestIcon from '../../images/how/test.svg';
import MoneyIcon from '../../images/how/money.svg';

function How(props){
  return(
    <section className={`how ${props.className}__how`}>
      <h2 className="how__title">How does it work?</h2>
      <ul className="how__list">
        <li className="how__item">
          <div className="how__curcle  how__curcle_first">
            <h3 className="how__text">Easy<br/>
            as<br />
            1-2-3
            </h3>
          </div>
        </li>
        <li className="how__item">
          <div className="how__curcle">
            <div className="how__images-container">
              <img className="how__images" src={ChooseIcon} alt="Choose product" />
            </div>
          </div>
          <p className="how__subtitle">Choose product</p>
        </li>
        <li className="how__item">
          <div className="how__curcle">
            <div className="how__images-container">
              <img className="how__images" src={BuyIcon} alt="Buy product" />
            </div>
          </div>
          <p className="how__subtitle">Buy product</p>
        </li>
        <li className="how__item">
          <div className="how__curcle">
            <div className="how__images-container">
              <img className="how__images" src={TestIcon} alt="Test and share review" />
            </div>
          </div>
          <p className="how__subtitle">Test and share review</p>
        </li>
        <li className="how__item">
          <div className="how__curcle">
            <div className="how__images-container">
              <img className="how__images" src={MoneyIcon} alt="Get 100% money back" />
            </div>
          </div>
          <p className="how__subtitle">Get 100% money back</p>
        </li>
      </ul>
    </section>
  )
}

export default How;