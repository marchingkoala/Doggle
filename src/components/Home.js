import React, { lazy, Suspense} from 'react';
import './home.css'
import { useNavigate } from 'react-router-dom';
// import Second_section from './Home_Second_Section/Second_section';

const Second_section = lazy(() =>
  import("./Home_Second_Section/Second_section")
);
const Home = ({loading}) => {

    const navigate = useNavigate();

    if (loading) {
      return <div>loading</div>;
    }

    const navigator = () => {
      navigate("/quiz")
    }

    return (
      <div>
        <div className="home_first_section">
          <div className="first_section_description">
            <h2>So you think you know dogs?</h2>
            <p>Sure, you can know your dog breeds...</p>
            <p>but can you guess them right when they are mixed?</p>
            <button onClick={navigator}>Take the Quiz</button>
          </div>
          <img
            src="/Home_IMG/Targle_front.avif"
            width="250px"
            height="auto"
            alt="photo of a very cute jindo dog with his tongue out"
          />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Second_section />
        </Suspense>
        {/* <Second_section /> */}
      </div>
    );
};

export default Home;