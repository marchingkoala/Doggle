import React from 'react';
import './footer.css'

const Footer = () => {

  const coffeeNavigate = () =>{
    window.open("https://www.buymeacoffee.com/marchingkoala");
  }
    return (
      <div className="footer_container">
        <div className="footer_secOne">
          <h2 onClick={coffeeNavigate}>Buy me a Treat</h2>
        </div>
        <div className="footer_secTwo">
          <img
            src="/Home_IMG/Paw_copy.png"
            width="auto"
            height="100px"
            alt="paw print of a dog"
          />
        </div>
        <div className="footer_secThree">
          <h2>Contact me</h2>
          <p>Email: yri.carmine@gmail.com</p>
          <p>www.github.com/marchingkoala</p>
        </div>
      </div>
    );
};

export default Footer;