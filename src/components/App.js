import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';

/**
 * This is the entry point for all of our react stuff
 */
const App = () => {
    return (
      <div>
        <h1>DOGGLE!</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/quiz">Quiz</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
        </Routes>
        <div>
            <h2>THIS IS WHERE FOOTER WILL GO</h2>
        </div>
      </div>
    );
};

export default App;