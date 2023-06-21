import React, {useEffect, useState} from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz/Quiz';
import axios from 'axios';
import Result from './Result/Result';
import Adopt from './Adopt/Adopt';
import About from './About/About';
import Resource from './Resource/Resource';
import Contact from './Contact/Contact';
import "./home.css";
import Footer from './Footer/Footer';

const App = () => {

    // let [pups, setPups] = useState([]);
    let [quizPup, setQuizPup] = useState({});
    let [total, setTotal] = useState(0);
    let [loading, setLoading] = useState(true);
    let [selectedAnswer, setSelectedAnswer] = useState("");

    const pupHandler = async () => {
      let { data } = await axios.get("/api/pups");
      // setPups(data);
      setTotal(data.length);
      setLoading(false);
    };

    useEffect(() => {
      pupHandler();
    }, []);

    if (loading) {
      return <div>loading</div>;
    }

    return (
      <div>
        <div className="nav_area">
          <h1 className="app_title">Fuzzle</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/quiz">Quiz</Link>
            <Link to="/adopt">Adopt</Link>
            <Link to="resource">Resource</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>
          <img
            src="/Home_IMG/Paw.png"
            width="50px"
            height="auto"
            alt="paw print of a dog"
          />
        </div>
        <Routes>
          <Route path="/" element={<Home loading={loading} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/quiz"
            element={
              <Quiz
                total={total}
                quizPup={quizPup}
                setQuizPup={setQuizPup}
                selectedAnswer={selectedAnswer}
                setSelectedAnswer={setSelectedAnswer}
              />
            }
          ></Route>
          <Route
            path="/result"
            element={
              <Result selectedAnswer={selectedAnswer} quizPup={quizPup} />
            }
          ></Route>
          <Route path="/adopt" element={<Adopt />}></Route>
          <Route path="/resource" element={<Resource />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    );
};

export default App;