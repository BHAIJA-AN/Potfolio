const express = require("express");
const router = express.Router();
const auth_controller = require("../controllers/auth-controller");
const {RegisterSchema, SigninSchema} = require("../validators/auth-validator");

const validate = require("../middlewares/validata-middleware");

router.route("/").get(auth_controller.home);
router.route('/register').post(validate(RegisterSchema),auth_controller.register);
router.route('/aboutme').get(auth_controller.about_me);
router.route('/login').post(validate(SigninSchema),auth_controller.login);

module.exports= router;

// router.get("/",(req,res)=>{

//     res.status(200).send("welcome to the page using router");

// });
