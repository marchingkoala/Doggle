import React from 'react';
import './resource.css'

const Resource = () => {
    return (
      <div className="resource_container">
        <h1>Not Ready to Adopt? No worries!</h1>
        <h2>It's ok! There are other ways to help</h2>
        <div className="resource_intro">
          <p>
            Not everyone is at the stage of life where they can adopt, and I
            understand that. Adopting a dog is a monumental, life-changing
            decision. Therefore, for those who are not yet ready but still wish
            to contribute and help, here is a list of resources you can explore
            to extend your love!
          </p>
        </div>
        <div className="org_container">
          {/* <h2>Chewy</h2> */}
          <div className="org_summary">
            <img
              src="/Logos/Chewy_pet_food_logo.png"
              width="250px"
              height="auto"
              alt="chewy logo"
              onClick={() => {
                window.open(
                  "https://www.chewy.com/g/animal-shelters-and-rescues"
                );
              }}
            />
            <p>
              Not only does Chewy sell products for pets, but they are also
              deeply committed to assisting shelters and rescues in finding
              permanent homes for every pet. You can amplify your impact by
              donating items through their Wish List program or by considering
              adoption from a shelter or rescue in your vicinity.
            </p>
          </div>
          <button
            onClick={() => {
              window.open(
                "https://www.chewy.com/g/animal-shelters-and-rescues"
              );
            }}
          >
            Check it out
          </button>
        </div>
        <div className="org_container">
          {/* <h2>Petco Love</h2> */}
          <div className="org_summary">
            <img
              src="/Logos/PetcoLoveLogo_ColorRGB.png"
              width="250px"
              height="auto"
              alt="petco love logo"
              onClick={() => {
                window.open("https://petcolove.org/");
              }}
            />
            <p>
              Petco isn't just your friendly neighborhood pet store; they are
              dedicated to improving the well-being of animals in every possible
              way. Their mission is simple: to create a better world for animals
              and the people who love and need them. Click below to visit their
              website and join the effort to show your support.
            </p>
          </div>
          <button
            onClick={() => {
              window.open("https://petcolove.org/");
            }}
          >
            Check it out
          </button>
        </div>
        <div className="org_container">
          {/* <h2>Korean K9 Rescue</h2> */}
          <div className="org_summary">
            <img
              src="/Logos/korean_k9_logo.jpeg"
              width="250px"
              height="auto"
              alt="korean k9 rescue logo"
              onClick={() => window.open("https://www.koreank9rescue.org/")}
            />
            <p>
              Korean K9 Rescue is making a remarkable impact worldwide by
              rescuing dogs from South Korea, where their adoption rate is only
              15%. Their primary focus is on rescuing Jindo and Jindo-mix
              breeds. To carry out their mission of saving and finding forever
              families for these pups, they heavily depend on donations and
              flight volunteers for rescue, rehabilitation, and transportation
              into the US. Their dedication knows no bounds, as they spare no
              expenses in their efforts. Click below to be a part of changing
              someone's world.
            </p>
          </div>
          <button
            onClick={() => {
              window.open("https://www.koreank9rescue.org/");
            }}
          >
            Check it out
          </button>
        </div>
        <div className="org_container">
          {/* <h2>The Grey Muzzle</h2> */}
          <div className="org_summary">
            <img
              src="/Logos/grey_muzzle_logo.png"
              width="200px"
              height="auto"
              alt="grey muzzle organization logo"
              onClick={() => window.open("https://www.greymuzzle.org/")}
            />
            <p>
              Regrettably, not every adopted or purchased dog gets the
              opportunity to spend their entire lives with their human family.
              This is where the incredible heroes of The Grey Muzzle
              Organization step in! Their mission is to improve the lives of
              at-risk senior dogs by providing funding and resources to animal
              shelters, rescue organizations, sanctuaries, and other non-profit
              groups nationwide. Click below to make a meaningful impact and let
              these silver dogs know that love awaits them in their sunset
              years.
            </p>
          </div>
          <button
            onClick={() => {
              window.open("https://www.greymuzzle.org/");
            }}
          >
            Check it out
          </button>
        </div>
      </div>
    );
};

export default Resource;