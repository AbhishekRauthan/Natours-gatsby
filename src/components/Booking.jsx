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
                <label htmlFor="name" className="form__label">Name</label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="form__input"
                  id="email"
                />
                <label htmlFor="email" className="form__label">Email</label>
              </div>
              <div className="form__group">
                <div className="form__radio-group">
                  <input type="radio" className="form__radio-input" id="small" name="size" />
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Small Tour Group
                  </label>
                </div>
                <div className="form__radio-group">
                  <input type="radio" className="form__radio-input" id="large" name="size" />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Large Tour Group
                  </label>
                </div>
              </div>
              <div className="form__group">
                <button onClick={e => e.preventDefault()} className="btn btn--green">
                  Next step &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking
