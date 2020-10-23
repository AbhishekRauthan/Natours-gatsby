import React from 'react'
import Logo from '../img/logo-green-2x.png'

const items = [
  "Company",
  "Contact us",
  "Carrers",
  "Privacy Policy",
  "Terms",
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={Logo} alt="Fill Logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__nav">
            <ul className="footer__list">
              {items.map(i => (
                <li className="footer__item">
                  <a href="" onClick={e => e.preventDefault()} className="footer__link">{i}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="footer_nav">
            <p className="footer__copyright">
              This is an imitation from the Advance Css course by Jonas
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
