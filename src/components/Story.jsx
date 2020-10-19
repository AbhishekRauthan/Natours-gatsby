import React from 'react'

const Story = ({ src, name, heading }) => {
  return (
    <div className="story">
      <figure className="story__shape">
        <img src={src} alt="person on tour" className="story__image" />
        <figcaption className="story__caption">{name}</figcaption>
      </figure>
      <div className="story__text">
        <h3 className="heading-tertiary u-margin-bottom-small">
          {heading}
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae harum quas Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, culpa harum voluptate earum .</p>
      </div>
    </div>
  )
}

export default Story
