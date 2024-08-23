const {Schema, model}= require("mongoose");

const ContactSchema = new Schema({
    username:{type: String,required: true},
    email:{type: String,required: true,unique: true},
    password: {type: String,required: true},
});

const Contact = new model("contact", ContactSchema);
module.exports=Contact;