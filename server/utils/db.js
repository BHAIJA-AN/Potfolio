const mongoose = require("mongoose");

// const URI = "mongodb+srv://ahashan:<password>@cluster0.cqtstgu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// process.env is used to passed the env variable
const URI =process.env.MONGODB_URI;

const connectDB = async()=> {
    try {
        // mongoos.connection is used to connect with the url
        await mongoose.connect(URI);
        console.log("connection successfull: 3");
        
    } catch (error){
        console.error("connection failed 2");
    }
}
module.exports= connectDB;