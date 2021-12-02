import React, { useState } from "react";
import Counter from "../counter/Counter";
import './Steps.scss';
import './Step.scss';
import AmazonIco from '../../images/icons/amazon-ico.svg';
import StepPicture from '../../images/picture-step.jpg';
import FacebookPost from '../../images/facebook-post.jpg';
import PressHereIco from '../../images/icons/presshere.svg';
import PressHereMobile from '../../images/icons/presshere-mobile.svg';

function Steps(props){

  const [count, setCount] = useState(1);
  const stepsArr = [1, 2, 3, 4, 5];

  function handleButtonClick(){
    let step = count;
    setCount(step + 1);
  }

  function handleCounterClick(e){
    let id = e.target.id;
    setCount(Number(id));
  }

  return(
    <section className={`steps ${props.className}__steps`}>
      <Counter count={count} arr={stepsArr} className="steps" onClick={handleCounterClick}/>
        {
          count === 1 && <Step1 onClick={handleButtonClick}/>
        }
        {
          count === 2 && <Step2 onClick={handleButtonClick}/>
        }
        {
          count === 3 && <Step3 onClick={handleButtonClick}/>
        }
        {
          count === 4 && <Step4 onClick={handleButtonClick}/>
        }
        {
          count === 5 && <Step5 onClick={handleButtonClick}/>
        }
      <div className="steps__image-container">
        <img className="steps__image" src={ count === 2 ? FacebookPost : StepPicture } alt={ count === 2 ? "Facebook's post" : "ACNE FACE CREAM"} />
        {
          count === 2 && <img className="steps__vektor" alt="Press here" src={PressHereIco} />
        }
      </div>
    </section>
  )
}

function Step1(props){
  return(
    <div className="step">
      <h3 className="step__counter">Step 1</h3>
      <h2 className="step__title">Lorem ipsum dolorsit amet</h2>
      <p className="step__subtitle">Aliquam urna arcu, scelerisque vel viverra sed, 
        pellentesque sit amet metus. Curabitur at luctus massa. Vestibulum pretium sem tortor,
        vitae mattis odio accumsan vitae. Fusce id luctus erat:
      </p>
      <ul className="step__list">
        <ol className="step__item">Mauris rutrum interdum condimentum.</ol>
        <ol className="step__item">Donec commodo quis arcu eget pretium.</ol>
      </ul>
      <button className="step__button" onClick={props.onClick}>Agree and continue</button>
    </div>
  )
}

function Step2(props){
  return(
    <div className="step">
      <h3 className="step__counter">Step 2</h3>
      <h2 className="step__title step__title_margin_large">Share Facebook post</h2>
      <p className="step__subtitle step__subtitle_margin_large">To participate in this giveaway please share this 
      giveaway offer with your friends. Not only your friends will appreciate this 
      offer but you will receive $10 Amazon Gift Card for each of your friends that 
      participates in this giveaway!
      </p>
      <div className="step__mobile-container">
        <img className="step__mobile-image" src={FacebookPost} alt="Facebook's post" />
        <img className="step__mobile-vektor" src={PressHereMobile} alt="Press here" />
      </div>
      <button className="step__button" onClick={props.onClick}>continue</button>
    </div>
  )
}

function Step3(props){
  return(
    <div className="step">
      <h3 className="step__counter">Step 3</h3>
      <h2 className="step__title step__title_margin_large">Amazon Prime</h2>
      <p className="step__subtitle">Do you have an Amazon Prime account?</p>
      <p className="step__subtitle step__subtitle_margin_large">To be able to participate in this giveaway 
      you need to have Amazon Prime.</p>
      <div className="step__button-container">
        <button className="step__button step__button_size_small" onClick={props.onClick}>Yes, i have</button>
        <button className="step__button step__button_size_small step__button_color_grey" onClick={props.onClick}>no, i don’t have</button>
      </div>
    </div>
  )
}

function Step4(props){
  return(
    <div className="step step_extra"> 
      <h3 className="step__counter">Step 4</h3>
      <h2 className="step__title">How to Buy a Product with 100% BONUS!</h2>
      <ul className="step__list">
        <li className="step__item step__item_bonus">You need to Buy our Product on Amazon at the specified price $20.89!</li>
        <li className="step__item step__item_bonus">After the purchase - Send us your Order Number or the Screenshot to our 
        manager in FB Messenger</li>
        <li className="step__item step__item_bonus">When you receive the product please use it and share product reviews</li>
        <li className="step__item step__item_bonus">We will send you 
        <span className="step__span"> the 25$ Amazon Gift Card</span> code within 24 hours after we get short review from you.</li>
        <li className="step__item step__item_bonus step__item_vektor">As a result, you will receive<br/> our Product Free!</li>
      </ul>
      <div className="step__offer">
        <button className="step__button" onClick={props.onClick}>Get Offer</button>
        <a className="step__link" href="#">I don't like offer terms</a>
      </div>
    </div>
  )
}

function Step5(props){
  return(
    <div className="step step_large"> 
      <h3 className="step__counter">Step 5</h3>
      <h2 className="step__title">Buy and Provide order ID to our Manager</h2>
      <p className="step__subtitle">Click the button 
        <span className="step__span"> GO TO AMAZON</span> and 
        <span className="step__span"> Buy a Product</span>
      </p>
      <button className="step__button step__button_margin_large">Go to amazon
        <img className="step__icon" src={AmazonIco} alt="Amazon" />
      </button>
      <p className="step__subtitle step__subtitle_margin_small">Click on the button below and 
        <span className="step__span"> Provide Order ID<br /> to our Manager </span> 
      in FB Messenger</p>
      <p className="step__subtitle step__subtitle_italic">(If you have any questions, you can ask them to our Manager)</p>
      <button className="step__button">provide order id</button>
    </div>
  )
}



export default Steps;