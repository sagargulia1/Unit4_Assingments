const express = require("express");

const  Evaluation = require("../models/evaluation.model");

const router = express.Router();

const crudController = require("./crud.controllers");

router.post("", crudController(Evaluation).post);

router.get("", async(req, res) => {
    try{
        const evaluation = await Evaluation.find().populate([
            {path: "batchId", select: ["batchName"]},
            {path: "instructor", select: ["firstName", "lastName"]}
        ])
        .lean().exec()

        return res.send(evaluation)
    }
    catch(err) {
        return res.status(500).send(err.message)
    }
});

module.exports = router