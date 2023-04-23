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
        resultImg: "/result/freyalynn_result.jpg",
        pupId: pups.freyaLynn.id,
      }),
      Result.create({
        answer:
          "Boston Terrier + Mountain Cur + Bluetick Coonhound + American English Coonhound",
        resultImg: "/result/dewey_result.png",
        pupId: pups.dewey.id,
      }),
      Result.create({
        answer:
          "Siberian Husky + American Pit Bull Terrier + American Bully + Rottweiler",
        resultImg: "/result/max_result.png",
        pupId: pups.maximilianAugustine.id,
      }),
      Result.create({
        answer: "Chihuahua + Yorkshire Terrier + Lhasa Apso + Cocker Spaniel",
        resultImg: "/result/tiny_tico_result.png",
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
        resultImg: "/result/cass_result.png",
        pupId: pups.cass.id,
      }),
      Result.create({
        answer:
          "Great Pyrenees + American Bully + American StaffordShire Terrier",
        resultImg: "/result/poe_result.jpeg",
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
      Result.create({
        answer: "American Pit Bull Terrier + Boston Terrier",
        resultImg: "/result/moose_result.png",
        pupId: pups.moose.id,
      }),
      Result.create({
        answer: "Chow Chow + Chihuahua + Rottweiler + Labrador Retriever",
        resultImg: "/result/bailey_result.png",
        pupId: pups.bailey.id,
      }),
      Result.create({
        answer:
          "American Foxhound + Beagle + Austrailian Shepherd + German Shepherd",
        resultImg: "/result/molly_result.png",
        pupId: pups.molly.id,
      }),
      Result.create({
        answer: "Miniature Pinscher + Poodle + Chihuahua + Shih Tzu",
        resultImg: "/result/buddy_result.png",
        pupId: pups.buddy.id,
      }),
    ]);

    console.log("DONE SEEDING RESULT")
    return;
}

module.exports = resultSeed;