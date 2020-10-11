import React from 'react'

const Tours = () => {
  return (
    <section className="section-tours">
      <div className="u-margin-bottom-big u-center-text">
        <h2 className="heading-secondary">
          Most Popular Tours
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              SOME TEXT IN FRONT
            </div>
            <div className="card__side card__side--back card__side--back-1">
              SOME TEXT IN BACK
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              SOME TEXT IN FRONT
            </div>
            <div className="card__side card__side--back card__side--back-2">
              SOME TEXT IN BACK
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              SOME TEXT IN FRONT
            </div>
            <div className="card__side card__side--back card__side--back-3">
              SOME TEXT IN BACK
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tours
