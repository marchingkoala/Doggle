const { db, Pup, Result} = require("./"); 

const resultSeed = async(pups) => {
    console.log("SEEDING RESULTS");

    // adding results to individual pups 

    await Promise.all([
      Result.create({
        answer: "Jindo + Chowchow",
        resultImg: "..",
        pupId: pups.tarn.id,
      }),
    ]);

    console.log("DONE SEEDING RESULT")
    return;
}

module.exports = resultSeed;