import React from 'react'
import Image1 from '../img/nat-8.jpg'
import Image2 from '../img/nat-9.jpg'
import Story from './Story'

const Stories = () => {
  return (
    <div className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={require("../img/video.webm")} type="video/webm" />
          <source src={require("../img/video.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          We make people genuinely happy
        </h2>
      </div>
      <div className="row">
        <Story src={Image1} name="Mary Smith" heading="I had the best week with my family" />
      </div>
      <div className="row">
        <Story src={Image2} name="Jack wilson" heading="wow! My life is commpletly different" />
      </div>
      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn-text" onClick={e => e.preventDefault()}>
          Read All Stories &rarr;
        </a>
      </div>
    </div>
  )
}

export default Stories
