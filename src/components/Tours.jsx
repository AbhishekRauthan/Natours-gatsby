import React from 'react'
import Card from './Card'

const details = [
  ["3 day tour", "upto 30 people", "2 tour guide", "Sleep in cozy hostel"],
  ["7 day tour", "upto 40 people", "6 tour guide", "Sleep in provided tents"],
  ["5 day tour", "upto 15 people", "3 tour guide", "Sleep in provided tents"],
]

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
          <Card title="The Sea Explorer" price={297} details={details[0]} no={1} />
        </div>
        <div className="col-1-of-3">
          <Card title="The Sea Explorer" price={597} details={details[1]} no={2} />
        </div>
        <div className="col-1-of-3">
          <Card title="The Sea Explorer" price={897} details={details[2]} no={3} />
        </div>
      </div>
    </section>
  )
}

export default Tours
