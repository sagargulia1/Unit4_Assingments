const express = require("express");

const User = require("../models/user/model");

const router = express.Router();

const crudController = require("./crud.controller");

router.post("", crudController(User).post);

router.get("", crudController(User).getAll);

router.get("/:id", crudController(User).getOne);

router.patch("/:id", crudController(User).updateOne);

router.delete("/:id", crudController(User).deleteOne);

module.exports = router;