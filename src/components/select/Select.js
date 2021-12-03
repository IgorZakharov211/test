import React from "react";
import './Description.scss';
import './Sold-out.scss';
import './Price.scss';
import './Select.scss';
import Thumb1 from '../../images/product/thumb_1.jpg';
import Thumb2 from '../../images/product/thumb_2.jpg';
import Thumb3 from '../../images/product/thumb_3.jpg';
import Image from '../../images/product/image.jpg';

function Select(props){
  return(
    <div className={`select ${props.className}__select`} >
      <div className="select__images">
        <div className="select__slider">
          <button className="select__control select__control_up"></button>
            <ul className="select__list">
              <li className="select__item">
                <button className="select__choose"><img className="select__thumb" src={Thumb1} alt="Thumbnail 1"/></button>
              </li>
              <li className="select__item">
                <button className="select__choose"><img className="select__thumb" src={Thumb2} alt="Thumbnail 2"/></button>
              </li>
              <li className="select__item">
                <button className="select__choose"><img className="select__thumb" src={Thumb3} alt="Thumbnail 3"/></button>
              </li>
            </ul>
          <button className="select__control select__control_down"></button>
        </div>
        <img className="select__image" src={Image} alt="Cream" />
      </div>
      <div className="select__about">
        <div className="select__rating">
          <p className="select__status">Best seller</p>
          <div className="select__reviews">
            <div className="select__stars"></div>
            <p className="select__counter">(1731 reviews)</p>
          </div>
        </div>
        <h2 className="select__title">Acne Treatment Cystic Acne heals, repairs & renews</h2>
        <div className="description select__description">
          <h3 className="description__title">Description:</h3>
          <p className="description__subtitle">Addictively refreshing gel-cream leaves skin plump, dewy, glowing.</p>
        </div>
        <div className="sold-out select__sold-out">
          <p className="sold-out__text">items left: 12</p>
        </div>
        <div className="select__line"></div>
        <div className="price select__price">
          <p className="price__before">us$25.89</p>
          <p className="price__after">$0.00 FREE</p>
        </div>
        <button className="select__button">Select</button>
        <div className="select__prime"></div>
      </div>
    </div>
  )
}

export default Select;