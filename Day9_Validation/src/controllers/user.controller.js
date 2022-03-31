
const express = require("express");
const {body, validationResult } = require("express-validator");

const User = require("../models/user.model");

const router = express.Router();

router.post(
    "/",

    body("first_name")
      .trim()
      .not()
      .isEmpty()
      .bail()
      .withMessage("First Name cannot be empty")
      .isLength({min: 3,})
      .withMessage("First Name must be atleast 3 characters"),

    body("email")
      .isEmail()
      .custom(async(value) => {
          const User = await User.findOne({ email: value });

          if(user) {
              throw new Error("Email is already registerd");
          }
          return true;
      }),

    body("age")
      .not()
      .isEmpty()
      .withMessage("Age cannot be empty")
      .isNumeric()
      .withMessage("Age must be a number between 1 to 100")
      .custom((val) => {
          if(val < 1 || val > 120) {
              throw new Error("Incorrect age Provided");
          } 
          return true; 
      }),

    body("gender")
      .not()
      .isEmpty()
      .withMessage("Gender must not be empty")
      .custom((val) => {
          if(val != "Male" || val != "Female" || val != "Other"){
              throw new Error("Gender must be Male or Female or Other")
          }
          return true;
      }),


    async(req, res) => {
        try{
            console.log(body("first_name"));
            const errors = validationResult(req);
            console.log({errors});

            if(!errors.isEmpty()) {
                return res.status(400).send({errors: errors.array()});
            }
        }
        catch(err) {
            return res.status(500).send({ message: err.message });
        }
    }
);

module.exports = router;