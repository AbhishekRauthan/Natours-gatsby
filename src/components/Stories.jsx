import React from 'react'
import Image1 from '../img/nat-8.jpg'

const Stories = () => {
  return (
    <div className="section-stories">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          We make people genuinely happy
        </h2>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape"> 
            <img src={Image1} alt="person on tour"  className="story__image"/>
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week ever with my family
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae harum quas Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, culpa harum voluptate earum .</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stories
