import React from 'react';
import './second_section.css';

const Second_section = () => {
    return (
      <div className="home_second_section">
        <div className='second_section_bgwrapper'>
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
      </div>
    );
};

export default Second_section;