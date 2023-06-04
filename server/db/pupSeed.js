const Pup = require("./Pup");

const pupSeed = async() => {
  
  const [
    tarn,
    freyaLynn,
    dewey,
    maximilianAugustine,
    tinyTico,
    dixie,
    bella,
    bobby,
    ruger,
    dexter,
    cass,
    poe,
    taterTot,
    willowDaenerys,
    moose,
    bailey,
    molly,
    buddy,
    atlas,
    bambi,
    bixbi,
    blakely,
    boone,
    brutus,
    champ,
    daisy,
    duke,
    fala,
    finley,
    fiona,
  ] = await Promise.all([
    Pup.create({
      name: "Tarn",
      description: "Self-proclaimed king of all dogs",
      breed: "Jindo + Chowchow",
      choices: [
        "Shiba + Husky + Pitbull",
        "Jindo + Chowchow",
        "Chowchow + Husky + Pitbull",
        "Dingo + California Dog",
      ],
      image: "/pupPhotos/Tarn.jpeg",
    }),
    Pup.create({
      name: "Freya Lynn",
      description: "She throws temper tantrum’s",
      breed:
        "American Pit Bull Terrier + American Bully + American Staffordshire Terrier",
      choices: [
        "American Pit Bull Terrier + American Bully + American Staffordshire Terrier",
        "Labrador Retriever + American Pit Bull Terrier + French Bulldog",
        "Dachshund + American Pit Bull Terrier + Pug",
        "100% TANK!",
      ],
      image: "/pupPhotos/Freya_lynn.jpeg",
    }),
    Pup.create({
      name: "Dewey",
      description: "He melts my heart everyday",
      breed:
        "Boston Terrier + Mountain Cur + Bluetick Coonhound + American English Coonhound",
      choices: [
        "Boston Terrier + American Pit Bull Terrier + Austrailian Shepherd",
        "American Pit Bull Terrier + French Bulldog + Mountain Cur + Rottweiler",
        "Rhodesian Ridgeback + American Pit Bull Terrier + Chihuahua",
        "Boston Terrier + Mountain Cur + Bluetick Coonhound + American English Coonhound",
      ],
      image: "/pupPhotos/Dewey.jpeg",
    }),
    Pup.create({
      name: "Maximilian Augustine",
      description: "He loves the snow",
      breed:
        "Siberian Husky + American Pit Bull Terrier + American Bully + Rottweiler",
      choices: [
        "Siberian Husky + American Pit Bull Terrier + American Bully + Rottweiler",
        "German Shepherd + Siberian Husky + American Pit Bull Terrier + Mountain Cur",
        "Siberian Husky + Golden Retriever + Beagle + Poodle",
        "American Pit Bull Terrier + Golden Retriever + German Shepherd + Samoyed",
      ],
      image: "/pupPhotos/Maximillian.jpeg",
    }),
    Pup.create({
      name: "Tiny Tico",
      description: "He's a tiny 4lb guy who enjoys playing with big dogs!",
      breed: "Chihuahua + Yorkshire Terrier + Lhasa Apso + Cocker Spaniel",
      choices: [
        "Chihuahua + Wheaten Terrier + Maltese ",
        "Yorkshire Terrier + Maltese + Corgi + Lhasa Apso",
        "Chihuahua + Yorkshire Terrier + Lhasa Apso + Cocker Spaniel",
        "Pomeranian + Bichon Frise + Papillon + Toy Poodle",
      ],
      image: "/pupPhotos/Tiny_Tico.jpeg",
    }),
    Pup.create({
      name: "Dixie",
      description:
        "She’s not the smartest but he loves everyone and everything and is pretty calm",
      breed:
        "American Pit Bull Terrier + American Staffordshire Terrier + American Bulldog + Boxer",
      choices: [
        "American Pit Bull Terrier + English Pointer + Chowchow",
        "American Bulldog + White Swiss Shepherd Dog + Labrador Retriever + Shihtzu",
        "American Pit Bull Terrier + American Staffordshire Terrier + American Bulldog + Boxer",
        "Dogo Argentino + Boxer + Bull Terrier + Poodle",
      ],
      image: "/pupPhotos/dixie.png",
    }),
    Pup.create({
      name: "Bella",
      description:
        "Bella has a very good nose and is extremely smart, loyal and protective!",
      breed: "Australian Cattle Dog + Beagle + Chihuahua + Chow Chow",
      choices: [
        "Labrador Retriever + American Pit Bull Terrier + Jack Russel Terrier",
        "Australian Cattle Dog + Beagle + Chihuahua + Chow Chow",
        "Australian Cattle Dog + Akita + Border Collie + Beagle",
        "Jindo + Chihuahua + Rhodesian Ridgeback + Pug",
      ],
      image: "/pupPhotos/Bella.png",
    }),
    Pup.create({
      name: "Bobby",
      description:
        "He's a happy-go-lucky boy who wants to make friends with everyone",
      breed:
        "Alaskan Malamute + Rottweiler + German Shepherd Dog + Australian Cattle Dog",
      choices: [
        "Alaskan Malamute + Rottweiler + German Shepherd Dog + Australian Cattle Dog",
        "Australian Cattle Dog + Siberian Husky + Jack Russel Terrier",
        "Border Collie + Jack Russel Terrier + Corgi + Alaskan Klee Kai",
        "Canaan Dog + Smooth Fox Terrier + American Pit Bull Terrier",
      ],
      image: "/pupPhotos/Bobby.jpeg",
    }),
    Pup.create({
      name: "Ruger",
      description:
        "He is a goofy dog but has a good head on his shoulders sometimes!",
      breed: "German Shepherd + Unresolved",
      choices: [
        "German Shepherd + Unresolved",
        "Australian Kelpie + Rough Collie + Dingo",
        "German Shepherd + Welsh Corgi + Beauceron + Labrador Retriever",
        "Golden Retriever + German Shepherd + Rough Collie",
      ],
      image: "/pupPhotos/Ruger.jpeg",
    }),
    Pup.create({
      name: "Dexter",
      description: "Best dog ever! Chilled out since he was a puppy giant.",
      breed: "Cane Corso + Mastiff + Saint Bernard",
      choices: [
        "Mastiff + Leonberger + Rhodesian Ridgeback",
        "Saint Bernard + Boxer + Cane Corso",
        "Cane Corso + Mastiff + Saint Bernard",
        "Cangal + Caucasia Shepherd + English Labrador Retriever",
      ],
      image: "/pupPhotos/Dexter.jpeg",
    }),
    Pup.create({
      name: "Cass",
      description: "Floppy, medium sized ears",
      breed: "Labrador Retriever + Rottweiler + American Pit Bull Terrier",
      choices: [
        "Labrador Retriever + Rottweiler + American Pit Bull Terrier",
        "Chesapeake Bay Retriever + Labrador Retriever + Doberman + German Shepherd",
        "Golden Retriever + Rotteweiler + Great Dane",
        "Angel of the Lord from Supernatural Season 4",
      ],
      image: "/pupPhotos/Cass.jpeg",
    }),
    Pup.create({
      name: "Poe",
      description: "He bays like a hound!",
      breed: "Great Pyrenees + American Bully + American StaffordShire Terrier",
      choices: [
        "Treeing Walker Coonhound + Cangal + American Pit Bull Terrier",
        "American writer and a poet. Famous for his work 'The Black Cat'",
        "Golden Retriever + English Fox hound + Samoyed + Beagle",
        "Great Pyrenees + American Bully + American StaffordShire Terrier",
      ],
      image: "/pupPhotos/Poe.jpeg",
    }),
    Pup.create({
      name: "Tater Tot",
      description: "Tater Tot is a giant snuggle-bug!",
      breed:
        "Labrador Retriever + American Pit Bull Terrier + American Foxhound + Australian Cattle Dog",
      choices: [
        "Labrador Retriever + Shiba Inu + Poodle",
        "Labrador Retriever + American Pit Bull Terrier + American Foxhound + Australian Cattle Dog",
        "German Shepherd + Beagle + American Pit Bull Terrier",
        "50% Potato + 50% snuggle",
      ],
      image: "/pupPhotos/tater_tot.jpeg",
    }),
    Pup.create({
      name: "Willow Daenerys",
      description:
        "Willow is so sweet, and afraid of everything (the stove, thunder, loud noises, bugs)",
      breed: "Chihuahua + Poodle + Pug + Miniature Pinscher",
      choices: [
        "Chihuahua + Poodle + Pug + Miniature Pinscher",
        "Khaleesi, The first of her name, The Mother of fuzz, The breaker of toys",
        "Wippet + Shitzu + French Bulldog + Maltese",
        "Brussels Griffon + Yorkshire Terrier + Corgi",
      ],
      image: "/pupPhotos/Willow.jpeg",
    }),
    Pup.create({
      name: "Moose",
      description: "He almost always finds a new stick on his walk",
      breed: "American Pit Bull Terrier + Boston Terrier",
      choices: [
        "American Pit Bull Terrier + Boston Terrier",
        "Labrador Retreiver + Chow Chow+ American Pit Bull Terrier",
        "Chihuahua + German Shepherd + Siberian Husky",
        "Rhodesian Ridgeback + Standard Poodle + Golden Retriever",
      ],
      image: "/pupPhotos/moose.jpeg",
    }),
    Pup.create({
      name: "Bailey",
      description: "She worked with prisoners in the FL state prison system",
      breed: "Chow Chow + Chihuahua + Rottweiler + Labrador Retriever",
      choices: [
        "Austrailian Cattle Dog + Shiba Inu + Siberian Husky",
        "Chow Chow + Chihuahua + Rottweiler + Labrador Retriever",
        "Chihuahua + Shiba Inu + Border Collie + Supermutt",
        "American Pit Bull Terrier + Standard Poodle + Siberian Husky",
      ],
      image: "/pupPhotos/bailey.jpeg",
    }),
    Pup.create({
      name: "Molly",
      description:
        "She is a rescue from Soutern Virginia, found dumped with her brothers",
      breed:
        "American Foxhound + Beagle + Austrailian Shepherd + German Shepherd",
      choices: [
        "Golden Retriever + Maltese + Bichon Frise",
        "Saluki + Beagle + English Setter + American Pit Bull Terrier",
        "American Foxhound + Beagle + Austrailian Shepherd + German Shepherd",
        "German Shepherd + English Pointer + Chow Chow",
      ],
      image: "/pupPhotos/molly.png",
    }),
    Pup.create({
      name: "Buddy",
      description:
        "He is a sato street dog from Puerto Rico found with one working eye",
      breed: "Miniature Pinscher + Poodle + Chihuahua + Shih Tzu",
      choices: [
        "Miniature Pinscher + Poodle + Chihuahua + Shih Tzu",
        "White Terrier + Maltese + Welsh Corgi + Pug",
        "Yorshire Terrier + Jack Russel Terrier + Chihuahua",
        "Beagle + American Pit Bull Terrier + Siberian Husky",
      ],
      image: "/pupPhotos/buddy.png",
    }),
    Pup.create({
      name: "Atlas",
      description: "Atlas barks at planes flying above our yard",
      breed:
        "American Staffordshire + American Pit Bull Terrier + Chow Chow + American Bulldog",
      choices: [
        "American Staffordshire + American Pit Bull Terrier + Chow Chow + American Bulldog",
        "American Pit Bull Terrier + Labrador Retreiver + Beagle + English Pointer",
        "Golden Retriever + American Pit Bull Terrier + Jack Russel Terrier + Chihuahua",
        "Beagle + Labrador Retriever + Chiweenee + Pug",
      ],
      image: "/pupPhotos/Atlas.jpeg",
    }),
    Pup.create({
      name: "Bambi",
      description:
        "A huge snuggle bug. She loves to clean her sister’s ears and tries to groom us as well",
      breed:
        "American Pit Bull Terrier + American Staffordshire + Chow Chow + Labrador Retriever",
      choices: [
        "Visla + Labrador Retriever + Pug + American Pit Bull Terrier",
        "American Pit Bull Terrier + American Staffordshire + Chow Chow + Labrador Retriever",
        "100% White Tail Deer",
        "Boxer + Labrador Retriever + American Pit Bull Terrier + Chihuahua",
      ],
      image: "/pupPhotos/Bambi.jpeg",
    }),
    Pup.create({
      name: "Bixbi",
      description: "Performs inspections everywhere she goes",
      breed: "Shih tzu + Poodle + Pekingese + Chihuahua",
      choices: [
        "Lhasa Apso + White Terrier + Pekingese + Maltese",
        "Maltese + Bichon + Poodle + Pug",
        "Shih tzu + Poodle + Pekingese + Chihuahua",
        "100% Mythical creature from the wind mountain",
      ],
      image: "/pupPhotos/Bixbi.jpeg",
    }),
    Pup.create({
      name: "Blakely",
      description:
        "Adopted from Dallas in 2013. She passed away recently but she was a very good girl",
      breed:
        "Siberian Husky + Chow Chow + American Pit Bull Terrier + Australian Cattle Dog",
      choices: [
        "Border Collie + Golden Retreiver + English Pointer + American Pit Bull Terrier",
        "Siberian Husky + Chow Chow + American Pit Bull Terrier + Australian Cattle Dog",
        "Blue Heeler + Australian Shepherd + Welsh Corgi + English Pointer",
        "Chow Chow + Samoyed + French Bulldog + Maltese",
      ],
      image: "/pupPhotos/Blakely.jpg",
    }),
    Pup.create({
      name: "Boone",
      description:
        "Good thing he wasn't destined for a working farm! He would have failed miserably",
      breed:
        "Border Collie + Australian Shepherd + Minuature American Shepherd + Australian Cattle Dog",
      choices: [
        "100% Australian Shepherd",
        "Collie + German Shepherd + Chow Chow + English Sheepdog",
        "Border Collie + Australian Shepherd + Minuature American Shepherd + Australian Cattle Dog",
        "Golden Retriever + Australian Cattle Dog + Husky + Chow Chow",
      ],
      image: "/pupPhotos/Boone.jpg",
    }),
    Pup.create({
      name: "Brutus",
      description:
        "His nickname is Brutey Pebbles because there are rocks where his brain should be!",
      breed:
        "American Bully + American Pit Bull Terrier + Boston Terrier + Bulldog",
      choices: [
        "100% American Pit Bull Terrier",
        "American Bully + American Pit Bull Terrier + Boston Terrier + Bulldog",
        "Bulldog + Labrador Retriever + French Terrier + Pug",
        "Boxer + American Pit Bull Terrier + Pomeranian + Chihuahua",
      ],
      image: "/pupPhotos/Brutus.jpeg",
    }),
    Pup.create({
      name: "Champ",
      description: "100% good boy",
      breed: "Labrador Retriever + Australian Cattle Dog + Border Collie",
      choices: [
        "Labrador Retriever + Australian Cattle Dog + Border Collie",
        "Collie + German Shepherd + Chow Chow + English Sheepdog",
        "Belgium Shepherd + Boxer + Australian Cattle Dog + American Pit Bull Terrier",
        "Golden Retriever + Husky + Chow Chow + Belgium Malinois",
      ],
      image: "/pupPhotos/Champ.jpg",
    }),
    Pup.create({
      name: "Daisy",
      description:
        "Daisy is the best little girl we could have ever asked for!",
      breed: "Australian Shepherd + Golden Retriever + Mountain Cur + Bulldog",
      choices: [
        "Australian Shepherd + Golden Retriever + Mountain Cur + Bulldog",
        "Labrador Retriever + German Shepherd",
        "Australian Cattle Dog + Belgium Shepherd + Boxer",
        "Labrador Retriever + American Pit Bull Terrier",
      ],
      image: "/pupPhotos/Daisy.jpeg",
    }),
    Pup.create({
      name: "Duke",
      description:
        "Has the ego of a spoiled lap dog, excellent at puzzle solving and a nose that could put a bloodhound to shame.",
      breed:
        "American Pit Bull Terrier + Mountain Cur + Chow Chow + Australian Shepherd",
      choices: [
        "100% Chihuahua. (Duke just likes to hit the gym)",
        "Mountain Cur + Labrador Retriever + Plott + Beagle",
        "Australian Cattle Dog + Boxer + English Setter + Grey Hound",
        "American Pit Bull Terrier + Mountain Cur + Chow Chow + Australian Shepherd",
      ],
      image: "/pupPhotos/Duke.jpeg",
    }),
    Pup.create({
      name: "Fala",
      description:
        "She doesn’t know how to snuggle, and instead looms over us and often tries to pet us with her huge paws",
      breed: "German Shepherd + Mountain Cur + Akita",
      choices: [
        "German Shepherd + Mountain Cur + Akita",
        "Chow Chow + English Sheepdog + Poodle + Chihuahua",
        "Labrador Retriever + Doberman + American Pit Bull Terrier + Yorkshire Terrier",
        "Blue Heeler + Maltese + Welsh Corgi + Jindo",
      ],
      image: "/pupPhotos/Fala.jpeg",
    }),
    Pup.create({
      name: "Finley",
      description:
        "Finley is the goodest, sweetest boy. He listens well and has good recall. This 60 pound giant is, also, afraid of blueberries",
      breed:
        "American Pit Bull Terrier + Treeing Walker Coonhound + Black Tan Coonhound + Labrador Retriever",
      choices: [
        "Boxer + American Pit Bull Terrier + Akita + German Sherpherd",
        "Labrador Retriever + Pug + Beagle + Chow Chow",
        "American Pit Bull Terrier + Treeing Walker Coonhound + Black Tan Coonhound + Labrador Retriever",
        "Golden Retriever + Australian Cattle Dog + Husky + Chow Chow",
      ],
      image: "/pupPhotos/Finley.jpg",
    }),
    Pup.create({
      name: "Fiona",
      description:
        "Fiona is an absolute ham. When she’s excited, her whole body wiggles. She wants your love and attention 24/7!",
      breed:
        "Treeing Walker Coonhound + American Pit Bull Terrier + Labrador Retriever + Black Tan Coonhound",
      choices: [
        "Treeing Walker Coonhound + American Pit Bull Terrier + Labrador Retriever + Black Tan Coonhound",
        "Collie + German Shepherd + Chow Chow + English Sheepdog",
        "Korean Jindo + Golden Retriever + Treeing Walker Coonhound + Doberman",
        "Beagle + Pug + Chihuahua + Rhodesian Ridgeback",
      ],
      image: "/pupPhotos/Fiona.jpg",
    }),
  ]);
  
      // {
      //   name: "",
      //   description: "",
      //   breed: "",
      //   choices: [],
      //   image: "...",
      // }
      return {
        pups: {
          tarn,
          freyaLynn,
          dewey,
          maximilianAugustine,
          tinyTico,
          dixie,
          bella,
          bobby,
          ruger,
          dexter,
          cass,
          poe,
          taterTot,
          willowDaenerys,
          moose,
          bailey,
          molly,
          buddy,
          atlas,
          bambi,
          bixbi,
          blakely,
          boone,
          brutus,
          champ,
          daisy,
          duke,
          fala,
          finley,
          fiona,
        },
      };
};

module.exports = pupSeed;