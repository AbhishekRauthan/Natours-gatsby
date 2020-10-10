import React from 'react'
import Photo1 from '../img/nat-1-large.jpg';
import Photo2 from '../img/nat-2-large.jpg';
import Photo3 from '../img/nat-3-large.jpg';

const Section = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            you're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, consequuntur omnis enim quisquam maiores sunt libero suscipit est quo nobis quidem molestiae accusantium odio veniam commodi nam in beatae nulla.
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventure like you have never before
          </h3>
          <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, consequuntur omnis enim quisquam maiores sunt libero suscipit est quo nobis.
          </p>
          <a href="" onClick={e => e.preventDefault()} className="btn-text">Learn More &rarr;</a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img src={Photo1} alt="" className="composition__photo composition__photo--p1" />
            <img src={Photo2} alt="" className="composition__photo composition__photo--p2" />
            <img src={Photo3} alt="" className="composition__photo composition__photo--p3" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
