import React from 'react';
import image1 from '../img/nat-8.jpg';
import image2 from '../img/nat-9.jpg';

const Popup = () => {
  return (
    <div className="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={image1} alt="Tour Photo" className="popup__img" />
          <img src={image2} alt="Tour Photo" className="popup__img" />
        </div>
        <div className="popup__right">
          <h2 className="heading-secondary u-margin-bottom-small">Start Booking now</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; Please read these terms before Booking
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci in nulla, impedit obcaecati quibusdam sunt placeat tempore accusamus ducimus nobis praesentium nesciunt! Saepe blanditiis autem aliquam ipsum eos repellendus velit.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut porro laudantium natus repellendus facere sit in autem libero odit unde? Quas dolor voluptate a laboriosam impedit provident commodi rem laborum!Sunt repellendus qui magni doloremque atque fuga deserunt architecto, provident molestiae culpa neque at error excepturi aliquam amet odit a eius. Architecto sint ut quis rem, amet ad animi quia?
          </p>
          <a href="" onClick={e => e.preventDefault()} className="btn btn--green">Book now</a>
        </div>
      </div>
    </div>
  )
}

export default Popup
