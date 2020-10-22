import React from 'react'

const Booking = () => {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="" onSubmit={e => e.preventDefault()} className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">
                  Start Booking Now
                </h2>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="form__input"
                  id="name"
                />
                <label htmlFor="name" className="form__label">Name: </label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="form__input"
                  id="email"
                />
                <label htmlFor="email" className="form__label">Name: </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking
