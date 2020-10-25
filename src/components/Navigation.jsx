import React from 'react'

const Navigation = () => {
  return (
    <div className="navigation">
      <input type="checkbox" name="" id="navi-toggle" className="navigation__checkbox" />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="" className="navigation__link">01 About Natours</a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link">02 Your Benifits</a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link">03 popular tours</a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link">04 Stories</a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link">05 book now</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
