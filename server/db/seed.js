const db = require("./db");
const { Pup } = require("./Pup");
const { Result } = require("./Result");
const pupSeed = require("./pupSeed");
const resultSeed = require("./resultSeed");

const seed = async () => {
    // Clear out any old data
    console.log("SEEDING PUPS")
    await db.sync({ force: true });

    const { pups } = await pupSeed();
    await resultSeed(pups);

    console.log("DONE RUNNING SEED...");
};

seed();