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
      Result.create({
        answer:
          "American Staffordshire + American Pit Bull Terrier + Chow Chow + American Bulldog",
        resultImg: "/result/Atlas_result.jpg",
        pupId: pups.atlas.id,
      }),
      Result.create({
        answer:
          "American Pit Bull Terrier + American Staffordshire + Chow Chow + Labrador Retriever",
        resultImg: "/result/Bambi_result.jpeg",
        pupId: pups.bambi.id,
      }),
      Result.create({
        answer: "Shih tzu + Poodle + Pekingese + Chihuahua",
        resultImg: "/result/Bixbi_result.jpg",
        pupId: pups.bixbi.id,
      }),
      Result.create({
        answer:
          "Siberian Husky + Chow Chow + American Pit Bull Terrier + Australian Cattle Dog",
        resultImg: "/result/Blakely_result.jpg",
        pupId: pups.blakely.id,
      }),
      Result.create({
        answer:
          "Border Collie + Australian Shepherd + Minuature American Shepherd + Australian Cattle Dog",
        resultImg: "/result/Boone_result.jpg",
        pupId: pups.boone.id,
      }),
      Result.create({
        answer:
          "American Bully + American Pit Bull Terrier + Boston Terrier + Bulldog",
        resultImg: "/result/Brutus_result.jpg",
        pupId: pups.brutus.id,
      }),
      Result.create({
        answer: "Labrador Retriever + Australian Cattle Dog + Border Collie",
        resultImg: "/result/Champ_result.jpg",
        pupId: pups.champ.id,
      }),
      Result.create({
        answer:
          "Australian Shepherd + Golden Retriever + Mountain Cur + Bulldog",
        resultImg: "/result/Daisy_result.jpg",
        pupId: pups.daisy.id,
      }),
      Result.create({
        answer:
          "American Pit Bull Terrier + Mountain Cur + Chow Chow + Australian Shepherd",
        resultImg: "/result/Duke_result.jpg",
        pupId: pups.duke.id,
      }),
      Result.create({
        answer: "German Shepherd + Mountain Cur + Akita",
        resultImg: "/result/Fala_result.jpeg",
        pupId: pups.fala.id,
      }),
      Result.create({
        answer:
          "American Pit Bull Terrier + Treeing Walker Coonhound + Black Tan Coonhound + Labrador Retriever",
        resultImg: "/result/Finley_result.jpg",
        pupId: pups.finley.id,
      }),
      Result.create({
        answer:
          "Treeing Walker Coonhound + American Pit Bull Terrier + Labrador Retriever + Black Tan Coonhound",
        resultImg: "/result/Fiona_result.jpg",
        pupId: pups.fiona.id,
      }),
      Result.create({
        answer: "Chihuahua + Dachshund + Parson Russel Terrier + Bichon Frise",
        resultImg: "/result/benji_result.jpg",
        pupId: pups.Benji.id,
      }),
      Result.create({
        answer:
          "Chow Chow + Russell type terrier + German Shepherd Dog + American Bulldog",
        resultImg: "/result/meggle_result.jpg",
        pupId: pups.Meggle.id,
      }),
      Result.create({
        answer:
          "Labrador Retriever + Cocker Spaniel + Beagle + American Pitbull Terrier",
        resultImg: "/result/sherman_result.png",
        pupId: pups.Sherman.id,
      }),
      Result.create({
        answer:
          "American Pitbull Terrier + Border Colllie + Boston Terrier + Siberian Husky",
        resultImg: "/result/love_result.jpg",
        pupId: pups.love.id,
      }),
      Result.create({
        answer:
          "American Pitbull Terrier + German Shepherd + Collie + Rottweiler",
        resultImg: "/result/murphy_result.png",
        pupId: pups.Sherman.id,
      }),
    ]);

    console.log("DONE SEEDING RESULT")
    return;
}

module.exports = resultSeed;