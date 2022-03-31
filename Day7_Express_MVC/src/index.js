const express = require("express");

const mongoose = require("mongoose");

const app= express();

app.use(express.json());

const connect = require("./configs/db");


const userController = require("./controllers/user.controller");
const batchController = require("./controllers/batch.controller");
const studentController = require("./controllers/student.controller");
const evaluationController = require("./controllers/evaluation.controller");
const submissionController = require("./controllers/submission.controller")

app.use("/users", userController);
app.use("/batches", batchController);
app.use("/students", studentController);
app.use("/evaluations",evaluationController)
app.use("/submissions", submissionController)
