const express = require("express");
const router = express.Router();
const contactform = require("../controllers/contact-controller"); // Correct the path

router.route('/contact').post(contactform);

module.exports = router;


// router.get("/",(req,res)=>{

//     res.status(200).send("welcome to the page using router");

// });
