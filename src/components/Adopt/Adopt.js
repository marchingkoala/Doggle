import React from 'react';
import './adopt.css'
import { useNavigate } from 'react-router-dom';

const Adopt = () => {

  const navigate = useNavigate();

  const navigator = () =>{
    window.open("https://www.petfinder.com/");
  }  

    return (
      <div className="adopt_container">
        <h1>Why Adopt?</h1>
        <img
          src="/adopted_pups.jpg"
          width="1000px"
          height="auto"
          alt="a collection of 8 adopted mixed breed dogs"
        />
        <p className="adopted">
          Molly, Bixbi, Brutus, Daisy, Duke, Minnie and Dexter found forever
          home
        </p>
        <br></br>
        <br></br>
        <div className="adopt_paragraph">
          <p>
            Hey there, fellow dog enthusiasts! You might be sitting, wondering
            "Why adopt when I can just pop by the local pet shop and walk out in
            10 minute with a puppy? Well, adopting a dog is a remarkable journey
            that goes beyond bringing home a furry companion.
          </p>
          <h2>1. Saving Lives and Confronting Cruelty</h2>
          <p>
            When you choose adoption, you become a hero in the eyes of a
            four-legged friend. By welcoming a rescue dog into your family,
            you're providing a second chance at a joyful life. Simultaneously,
            you take a stand against the inhumane practices of puppy mills. Your
            decision not to support their exploitative businesses contributes to
            the larger movement for animal welfare.
          </p>
          <h2>2. Unconditional Love and Lifelong Loyalty</h2>
          <p>
            Prepare yourself for a lifetime of wagging tails, wet kisses, and
            unwavering loyalty. When you adopt a dog, you're gaining a furry
            family member who will shower you with endless love. Through thick
            and thin, they'll be your snuggle buddy, your confidant, and your
            partner-in-crime. Their devotion knows no bounds, and their paw-some
            antics will bring joy to your days, year after year.
          </p>
          <h2>3. Expanding Your Social Network</h2>
          <p>
            For introverts and social butterflies alike, adopting a dog can
            unlock a treasure trove of connections. Dog parks become more than
            just play areas; they transform into hubs of community bonding.
            Striking up conversations about your furry companion creates
            opportunities to meet fellow dog lovers, forging friendships that
            transcend the boundaries of small talk. The shared passion for dogs
            becomes the foundation for meaningful connections and a vibrant
            social network. We get to make friends, one bark at a time!
          </p>
          <br></br>
          <p>
            Dog adoption is a journey that transcends the act of bringing a
            furry friend into your home. It's an opportunity to save lives,
            stand against cruelty, expand your social circles, and experience a
            profound bond of unconditional love. Remember, you can't buy love,
            but you can rescue love, and by adopting a mixed breed dog, you can
            make a positive impact on the life of a deserving furry friend.
          </p>
        </div>
        <h1>Ready to adopt?</h1>
        <button onClick={navigator}>Find me a friend!</button>
      </div>
    );
};

export default Adopt;