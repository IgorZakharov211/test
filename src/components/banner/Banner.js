import React from 'react';
import './Banner.scss';

function Banner(){
  return(
    <div className="banner">
      <div className="banner__container">
        <div className="banner__text">
          <h2 className="banner__title">Autumn Giveaways for FREE</h2>
          <p className="banner__subtitle">Participate in Autumn Giveaway 
          and treat yourself to nice and refreshing cosmetics for free</p>
        </div>
        <div className="banner__image"></div>
      </div>
    </div>
  )
}

export default Banner;