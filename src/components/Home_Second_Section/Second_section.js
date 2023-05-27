import React from 'react';
import './second_section.css';

const Second_section = () => {
    return (
      <div className="home_second_section">
        <div className="second_section_bgwrapper">
          <div className="home_second_section_text">
            <p>
              <b>
                "Everybody should have a shelter dog. It's good for the soul."
              </b>
            </p>
            <p>
              <b>
                – Paul Shaffer, Canadian musician, composer, actor, author, and
                comedian
              </b>
            </p>
          </div>
        </div>
        <div className="home_second_section_content">
          <h2>You can't buy love but you can rescue one!</h2>
          <div className="home_second_section_wrapper">
            <div className="home_second_section_p2content">
              <div className="benji_profile">
                <p>Benji, mixed-breed</p>
                <p>Found furever family in 2020</p>
                <p>Has 2 cat siblings</p>
              </div>
              <img
                className="benji_photo"
                src="/Home_IMG/benji.png"
                width="500px"
                height="auto"
                alt="small mixed breed dog with ball in his mouth"
              />
            </div>
            <div className='why_adopt_p'>
            <p>
              When it comes to adding a furry friend to your family, adopting a
              mixed breed dog is a wonderful way to find a companion who will
              love you unconditionally. Mixed breed dogs are often overlooked in
              favor of purebred dogs, but they have just as much love and
              affection to give!
            </p>
            <button>Why Adopt?</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Second_section;