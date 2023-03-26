import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';

/**
 * This is the entry point for all of our react stuff
 */
const App = () => {
    return (
        <div>
            <h1>Welcome to dsfghjkl, Good luck!</h1>
            <Link to="/"><button>Home</button></Link>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </div>
    );
};

export default App;