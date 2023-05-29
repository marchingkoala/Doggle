import React from 'react';
import './about.css'

const About = () => {
    return (
      <div className="about_container">
        <h1>Hey There, Welcome to Fuzzle!</h1>
        <img
          src="/coderMom.JPG"
          width="400px"
          height="auto"
          className="tarnAndMom"
          alt="a woman with her back turned, focusing on her laptop to code while her dog is sitting behind her with his tongue out"
        />
        <br></br>
        <p>Tarn is on his guarding duty as his mom codes away</p>
        <br></br>
        <div className="about_paragraph">
          <p style={{ marginBottom: "1rem" }}>
            Welcome to Fuzzle! Fuzzle came to life with a very enthusiastic
            coder dog mom and a whole pack of amazing pawrents from Reddit.
            Woof-tastic teamwork, I must say. As an animal lover, especially
            dogs, I couldn't help but ponder, 'Why the obsession with purebred
            pups?' Sure, purebreds have their own perks, like hypoallergenic
            genes and guaranteed visual outcome, but it seems many folks lean
            that way due to some sneaky biases.
          </p>
          <br></br>
          <p style={{ marginBottom: "1rem" }}>
            I've stumbled upon people who think shelter dogs are all
            troublemakers, carrying a baggage of health issues and a knack for
            mischief. While it's true that some dogs may carry past traumas that
            impact their behavior, the majority of shelter dogs are just your
            regular, tail-wagging goofballs! They are equally as lovable,
            precious, and ready to bring boundless joy and unforgettable
            memories into your home and life. That's why, as soon as I completed
            my coding bootcamp, I made the decision to utilize my newfound
            skills for a worthy cause.
          </p>
        </div>
        <br></br>
        <img
          src="./sherm_mommy.jpg"
          width="350px"
          height="auto"
          alt="an asian woman with her newly adopted mixed breed puppy. the puppy is extremely cute"
        />
        <br></br>
        <p>Sherman was adopted in 2023, January</p>
        <div className="about_paragraph">
          <p style={{ marginBottom: "1rem" }}>
            Fuzzle was created with the purpose of introducing people to the
            world of mixed breed dogs and showcasing how these dogs can be just
            as affectionate, beautiful, healthy, and wonderful—if not more
            so—than their purebred counterparts!
          </p>
          <br></br>
          <p style={{ marginBottom: "1rem" }}>
            So go ahead, enjoy playing on Fuzzle, and help spread the word.
            Let's shower mixed breed pups with the love and attention they
            deserve!
          </p>
          <br></br>
          <p>
            Best, <br />
            Carm, Tarn and Sherman
          </p>
        </div>
      </div>
    );
};

export default About;