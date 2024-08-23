const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {  // Changed from phonenumber to phone
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isadmin :{
            type : Boolean,
            required:false

    }
});
// to secure the data using bcrypt
// Password hashing middleware
userSchema.pre('save', async function(next) {
    try {
        const user = this;
        if (!user.isModified('password')) {
            return next();
        }

        const salt = await bcrypt.genSalt(12);
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});
// to compare the password
userSchema.methods.comparePassword = async function(Password){
    return bcrypt.compare(password,this.password);
}
// to generate the json web token 
userSchema.methods.generateToken = async function() {
    try {
        const user = this;
        const token = jwt.sign({ _id: user._id.toString() }, 'secretkey', { expiresIn: '30s' }); // Use a secure secret key
        return token;
    } catch (error) {
        throw new Error('Token generation failed');
    }
};
const Users = mongoose.model('Users', userSchema);

module.exports = Users;