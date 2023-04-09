import React from 'react';
import './home.css'

const Home = ({loading}) => {

    if (loading) {
      return <div>loading</div>;
    }

    return (
      <div>
          <div className="home_first_section">
            <div className='first_section_description'>
              <h2>So you think you know dogs?</h2>
              <button>Take the Quiz</button>
            </div>
            <img
              src="/Home_IMG/Targle_front.png"
              width="250px"
              height="auto"
              alt="photo of a very cute jindo dog with his tongue out"
            />
          </div>

          <div className="home_second_section">
            <p>So you think you know dogs?</p>
          </div>

        <div>
          <p>You can't buy love but you can rescue love!</p>
        </div>
        <div>
          <p>
            "Everybody should have a shelter dog. It's good for the soul." –
            Paul Shaffer, Canadian musician, composer, actor, author, and
            comedian
          </p>
        </div>
      </div>
    );
};

export default Home;