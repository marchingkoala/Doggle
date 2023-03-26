const db = require("./db");
const { Pup } = require("./Pup");
const pupSeed = require("./pupSeed");

const seed = async () => {
    // Clear out any old data
    console.log("SEEDING PUPS")
    await db.sync({ force: true });

    await pupSeed();

    console.log("DONE RUNNING SEED...");
};

seed();