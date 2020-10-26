import React from 'react'

const Card = ({ title, price, details, no }) => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className={`card__pic card__pic--${no}`}>
          &nbsp;
              </div>
        <h4 className="card__heading">
          <span className={`card__heading-span card__heading-span--${no}`}>
            {title}
          </span>
        </h4>
        <div className="card__details">
          <ul>
            <li>{details[0]}</li>
            <li>{details[1]}</li>
            <li>{details[2]}</li>
            <li>{details[3]}</li>
            <li>{details[4]}</li>
          </ul>
        </div>
      </div>
      <div className={`card__side card__side--back card__side--back-${no}`}>
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">
              Only
            </p>
            <p className="card__price-value">${price}</p>
            <a href="#popup" className="btn btn--white">Book Now</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
