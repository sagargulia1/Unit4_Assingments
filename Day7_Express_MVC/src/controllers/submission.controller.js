const express = require("express");

const Submission = require("../models/submission.model");

const router = express.Router();

const crudController = require("./crud.controllers");

router.post("", crudController(Submission).post);

router.get("", async(req, res) => {
    try{
        let submission;
        let filter = {$and:[{}], $or:[{}]};

        if(req.query.marks) {
            filter.marks = {$gt: req.query.marks}
        }

        submission = await Submission.find(filter).populate([{
            path: "evaluationId",
            select: ["dateOfEvaluation"],
            populate: [ { path: "batchId", select: ["batchName"] },
            {path: "instructor", select: ["firstName", "lastName"]}
             ],
            }, {
                path: "studentId", select: ["rollId"]
            }]).lean().exec()
    }
    catch(err) {
        return res.status(500).send(err.message)
    }
});


module.exports = router;