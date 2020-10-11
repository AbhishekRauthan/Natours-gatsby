import React from 'react'

const cards = [
  {
    icon: "world",
    title: "Explore the World",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil mollitia impedit sequi quisquam.",
  },
  {
    icon: "compass",
    title: "Meet nature",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil mollitia impedit sequi quisquam.",
  },
  {
    icon: "map",
    title: "Find your Way",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil mollitia impedit sequi quisquam.",
  },
  {
    icon: "heart",
    title: "Live a healthier life",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil mollitia impedit sequi quisquam.",
  },

]

const Feature = () => {
  return (
    <section className="section-features">
      <div className="row">
        {
          cards.map(({ icon, text, title }) => (
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className={`feature-box__icon icon-basic-${icon}`}></i>
                <h3 className="heading-tertiary">
                  {title}
                </h3>
                <p className="feature-box__text">
                  {text}
                </p>
              </div>
            </div>
          )
          )
        }
      </div>
    </section>
  )
}

export default Feature
