import React from 'react';

const Home = ({loading}) => {

    if (loading) {
      return <div>loading</div>;
    }

    return (
      <div>
        <h1>THIS IS A TEST</h1>
        <div>
          <p>So you think you know dogs?</p>
        </div>
        <div>
          <p>You can't buy love but you can rescue love!</p>
        </div>
        <div>
          <p>Did you know people live longer and happier with pets?</p>
        </div>
      </div>
    );
};

export default Home;