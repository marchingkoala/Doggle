const { db, Pup, Result} = require("./"); 

const resultSeed = async(pups) => {
    console.log("SEEDING RESULTS");

    // adding results to individual pups 

    await Promise.all([
      Result.create({
        answer: "Jindo + Chowchow",
        resultImg: "/result/tarn_result.jpg",
        pupId: pups.tarn.id,
      }),
      Result.create({
        answer:
          "American Pit Bull Terrier + American Bully + American Staffordshire Terrier",
        resultImg: "...",
        pupId: pups.freyaLynn.id,
      }),
      Result.create({
        answer:
          "Boston Terrier + Mountain Cur + Bluetick Coonhound + American English Coonhound",
        resultImg: "...",
        pupId: pups.dewey.id,
      }),
      Result.create({
        answer:
          "Siberian Husky + American Pit Bull Terrier + American Bully + Rottweiler",
        resultImg: "...",
        pupId: pups.maximilianAugustine.id,
      }),
      Result.create({
        answer: "Chihuahua + Yorkshire Terrier + Lhasa Apso + Cocker Spaniel",
        resultImg: "...",
        pupId: pups.tinyTico.id,
      }),
      Result.create({
        answer:
          "American Pit Bull Terrier + American Staffordshire Terrier + American Bulldog + Boxer",
        resultImg: "/result/dixie_result.jpg",
        pupId: pups.dixie.id,
      }),
      Result.create({
        answer: "Australian Cattle Dog + Beagle + Chihuahua + Chow Chow",
        resultImg: "/result/bella_result.jpg",
        pupId: pups.bella.id,
      }),
      Result.create({
        answer:
          "Alaskan Malamute + Rottweiler + German Shepherd Dog + Australian Cattle Dog",
        resultImg: "/result/bobby_result.jpg",
        pupId: pups.bobby.id,
      }),
      Result.create({
        answer: "German Shepherd + Unresolved",
        resultImg: "/result/ruger_result.jpg",
        pupId: pups.ruger.id,
      }),
      Result.create({
        answer: "Cane Corso + Mastiff + Saint Bernard",
        resultImg: "/result/dexter_result.jpg",
        pupId: pups.dexter.id,
      }),
      Result.create({
        answer: "Labrador Retriever + Rottweiler + American Pit Bull Terrier",
        resultImg: "...",
        pupId: pups.cass.id,
      }),
      Result.create({
        answer:
          "Great Pyrenees + American Bully + American StaffordShire Terrier",
        resultImg: "...",
        pupId: pups.poe.id,
      }),
      Result.create({
        answer:
          "Labrador Retriever + American Pit Bull Terrier + American Foxhound + Australian Cattle Dog",
        resultImg: "/result/tater_tot_result.jpg",
        pupId: pups.taterTot.id,
      }),
      Result.create({
        answer: "Chihuahua + Poodle + Pug + Miniature Pinscher",
        resultImg: "/result/willow_result.jpg",
        pupId: pups.willowDaenerys.id,
      }),
    ]);

    console.log("DONE SEEDING RESULT")
    return;
}

module.exports = resultSeed;