const express = require("express")
const router = express.Router();
const { Pup, Result } = require("../db");

//Get - /api/pups -> get all pup data
router.get("/", async ( req,res,next) => {
    try {
        const allPups = await Pup.findAll({
            include: [Result]
        });
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

//Get - /api/pups/total -> get a total number of registered pups
router.get("/total", async (req, res, next) => {
  try {
    const result = await Pup.findAll({
      include: [Result],
    });
    res.send(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router