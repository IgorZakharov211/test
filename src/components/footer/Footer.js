import React from 'react';
import './Footer.scss';

function Footer(){
  return(
    <footer className="footer">
      <div className="footer__background">
        <div className="footer__container">
          <nav className="footer__nav">
            <ul className="footer__list">
              <li className="footer__item">
                <h3 className="footer__title">Privacy and Terms</h3>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">Privacy Policy</a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">Terms of use</a>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item">
                <h3 className="footer__title">Need Help?</h3>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="mailto:mail@gmail.com">mail@gmail.com</a>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item">
                <h3 className="footer__title">Social</h3>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">Facebook</a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">Instagram</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer__container">
        <p className="footer__copyright">© All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer;