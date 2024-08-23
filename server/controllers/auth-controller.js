const user = require("../models/user-model");
const bcrypt = require("bcryptjs");
 
const home = async (req, res) =>{
    try {
        
        res.status(200).send("home page: using controller");
        
} catch (error) {
        console.log(error);   }
};
const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        // Check for missing fields
        if (!username || !email || !phone || !password) {
            return res.status(400).json({ msg: "Please provide all required fields" });
        }

        // Check for duplicate email
        const userExist = await user.findOne({ email });
        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        // Hash the password
        // const saltRounds = 10;
        // const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user
        const newUser = await user.create({
            username,
            email,
            phone,
            password
        });

        // Respond to the created user data
        // generateToken is used to generate json web token 
        res.status(500).json({ 
            // msg: newUser,<this prints the data as it is loded in the postman body>
            msg: "resistration succesfull", 
            Token: await newUser.generateToken(),
            userID: newUser._id.toString(),
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
};

const about_me = async (req, res) =>{
    try {
        res.status(200).send("hello mern devloper");
        
    } catch (error) {
        console.log(error);  }
};
const login = async (req, res) => {
    try {
        console.log("Login request received with body:", req.body); // Log the request body

        const { email, password } = req.body;
        const userExist = await user.findOne({ email });

        if (!userExist) {
            console.log("User not found for email:", email);
            return res.status(400).json({ msg: "Invalid email or password" });
        }

        console.log("User found:", userExist); // Ensure this line is reached

        const isMatch = await bcrypt.compare(password, userExist.password);
        console.log("Password match status:", isMatch); // Ensure this line is reached

        if (isMatch) {
            // const token =  // Call generateToken correctly as a function
            // console.log("Token generated:", token); // Ensure this line is reached
            console.log("login successful")
            res.status(200).json({ 
                msg: "Login successful",
                token:await userExist.generateToken(),
                userID: userExist._id.toString()
            });
        }
        else {
            console.log("Password does not match for user:", email);
            return res.status(401).json({ msg: "Invalid email or password" });
        }
    } catch (err) {
        res.status(200).json({message:"enternal server error"});
    }
};

module.exports = {home, register, about_me,login};