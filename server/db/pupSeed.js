const Pup = require("./Pup");

const pupSeed = async() => {
  
  const [tarn, freyaLynn, dewey, maximilianAugustine, tinyTico, dixie, bella, bobby, ruger] = await Promise.all([
    Pup.create({
      name: "Tarn",
      description: "Self-proclaimed king of all dogs",
      breed: "Jindo + Chowchow",
      choices: [
        "Shiba + Husky + Pitbull",
        "Chowchow + Husky + Pitbull",
        "Dingo + California Dog",
      ],
      image: "../public/pupPhotos/Tarn.jpg",
    }),
    Pup.create({
      name: "Freya Lynn",
      description: "She throws temper tantrum’s",
      breed:
        "American Pit Bull Terrier + American Bully + American Staffordshire Terrier",
      choices: [
        "Labrador Retriever + American Pit Bull Terrier + French Bulldog",
        "Dachshund + American Pit Bull Terrier + Pug",
        "American Pit Bull Terrier + Pug + Beagle",
      ],
      image: "...",
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
      ],
      image: "...",
    }),
    Pup.create({
      name: "Maximilian Augustine",
      description: "He loves the snow",
      breed:
        "Siberian Husky + American Pit Bull Terrier + American Bully + Rottweiler",
      choices: [
        "German Shepherd + Siberian Husky + American Pit Bull Terrier + Mountain Cur",
        "Siberian Husky + Golden Retriever + Beagle + Poodle",
        "American Pit Bull Terrier + Golden Retriever + German Shepherd + Samoyed",
      ],
      image: "...",
    }),
    Pup.create({
      name: "Tiny Tico",
      description: "",
      breed: "Chihuahua + Yorkshire Terrier + Lhasa Apso + Cocker Spaniel",
      choices: [
        "Chihuahua + Wheaten Terrier + Maltese ",
        "Yorkshire Terrier + Maltese + Corgi + Lhasa Apso",
        "Pomeranian + Bichon Frise + Papillon + Toy Poodle",
      ],
      image: "...",
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
        "Dogo Argentino + Boxer + Bull Terrier + Poodle",
      ],
      image: "...",
    }),
    Pup.create({
      name: "Bella",
      description:
        "Bella has a very good nose and is extremely smart, loyal and protective!",
      breed: "Australian Cattle Dog + Beagle + Chihuahua + Chow Chow",
      choices: [
        "Labrador Retriever + American Pit Bull Terrier + Jack Russel Terrier",
        "Australian Cattle Dog + Akita + Border Collie + Beagle",
        "Jindo + Chihuahua + Rhodesian Ridgeback + Pug",
      ],
      image: "...",
    }),
    Pup.create({
      name: "Bobby",
      description:
        "Bobby was a stray from the neighbouring Reservation. He's a happy-go-lucky guy!",
      breed:
        "Alaskan Malamute + Rottweiler + German Shepherd Dog + Australian Cattle Dog",
      choices: [
        "Australian Cattle Dog + Siberian Husky + Jack Russel Terrier",
        "Border Collie + Jack Russel Terrier + Corgi + Alaskan Klee Kai",
        "Canaan Dog + Smooth Fox Terrier + American Pit Bull Terrier",
      ],
      image: "...",
    }),
    Pup.create({
      name: "Ruger",
      description:
        "He is a goofy dog but has a good head on his shoulders sometimes!",
      breed: "German Shepherd + Unresolved",
      choices: [
        "Australian Kelpie + Rough Collie + Dingo",
        "German Shepherd + Welsh Corgi + Beauceron + Labrador Retriever",
        "Golden Retriever + German Shepherd + Rough Collie",
      ],
      image: "...",
    }),
    Pup.create({}),
    Pup.create({}),
  ]);
  
  const seed = [

      {
        name: "Dexter",
        description: "Best dog ever chilled out since he was a puppy giant.",
        breed: "Cane Corso + Mastiff + Saint Bernard",
        choices: [
          "Mastiff + Leonberger + Rhodesian Ridgeback",
          "Saint Bernard + Boxer + Cane Corso",
          "Cangal + Caucasia Shepherd + English Labrador Retriever",
        ],
        image: "...",
      },
      {
        name: "Cass",
        description: "Floppy, medium sized ears",
        breed: "Labrador Retriever + Rottweiler + American Pit Bull Terrier",
        choices: [
          "Chesapeake Bay Retriever + Labrador Retriever + Doberman + German Shepherd",
          "Golden Retriever + Rotteweiler + Great Dane",
          "Labrador Retriever + Belgian Malinois + Boxer + Australian Cattle Dog",
        ],
        image: "...",
      },
      {
        name: "Poe",
        description: "He bays like a hound!",
        breed:
          "Great Pyrenees + American Bully + American StaffordShire Terrier",
        choices: [
          "Treeing Walker Coonhound + Cangal + American Pit Bull Terrier",
          "Dalmatian + American Bully + Siberian Husky",
          "Golden Retriever + English Fox hound + Samoyed + Beagle",
        ],
        image: "...",
      },
      {
        name: "Tater Tot",
        description: "Tater Tot is a giant snuggle-bug!",
        breed:
          "Labrador Retriever + American Pit Bull Terrier + American Foxhound + Australian Cattle Dog",
        choices: [
          "Labrador Retriever + Shiba Inu + Poodle",
          "German Shepherd + Beagle + American Pit Bull Terrier",
          "Border Collie + Shitzu + Boxer + Maltese",
        ],
        image: "...",
      },
      {
        name: "Willow Daenerys",
        description:
          "Willow is so sweet, and afraid of everything (the stove, thunder, loud noises, bugs)",
        breed: "Chihuahua + Poodle + Pug + Miniature Pinscher",
        choices: ["Beagle + Chihuahua + Pug", "Wippet + Shitzu + French Bulldog + Maltese",
            "Brussels Griffon + Yorkshire Terrier + Corgi"],
        image: "...",
      },
      {
        name: "",
        description: "",
        breed: "",
        choices: [],
        image: "...",
      },
      {
        name: "",
        description: "",
        breed: "",
        choices: [],
        image: "...",
      },
      {
        name: "",
        description: "",
        breed: "",
        choices: [],
        image: "...",
      },
      {
        name: "",
        description: "",
        breed: "",
        choices: [],
        image: "...",
      },
      {
        name: "",
        description: "",
        breed: "",
        choices: [],
        image: "...",
      },
    ];

}

module.exports = pupSeed;