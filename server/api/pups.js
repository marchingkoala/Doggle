const express = require("express")
const router = express.Router();
const { Pup, Result } = require("../db");

//Get - /api/pups -> get all pup data
router.get("/", async ( req,res,next) => {
    try {
        const allPups = await Pup.findAll();
        res.send(allPups)
    } catch (error) {
        next(error);
    }
})

//Get - /api/pups/:id -> get one pup's data & its result
router.get("/:id", async ( req, res, next)=>{
    const id = req.params.id;
    try {
        const singlePup = await Pup.findByPk(id, {
            include: [Result],
        });
        singlePup ? res.send(singlePup) : res.status(404).send("Pup not found")
    } catch (error) {
        next(error)
    }
})

//Get - /api/pups/totalNumber -> get a total number of registered pups
router.get("/totalNumber", async (req,res,next)=>{
    try {
        const allPups = await Pup.findAll();
        const totalNumber = allPups.length;
        console.log("THIS IS A TEST FOR TOTAL NUMBER")
        console.log(allPups);
        console.log(totalNumber);
        res.send(totalNumber);
    } catch (error) {
        next(error);
    }
})

module.exports = router