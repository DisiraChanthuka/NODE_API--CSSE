const  mongoose = require('mongoose');
const db = require('../config/db');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
    email:{
        type: String,
        lowercase : true ,
        required : true,
        unique : true
    },
    password:{
        type: String,
        required : true 
    }
});

//encryption method for password
userSchema.pre('save', async function(){
    try {
        var user = this;
        const salt = await(bcrypt.genSalt(10));
        const hashPassword = await bcrypt.hash(user.password , salt);

        user.password = hashPassword;
        
    } catch (error) {
        throw error;
    }
});

//decrypt method when sign in
userSchema.methods.comparePassword = async function (userPassword) {
    try {
        console.log('----------------no password',this.password);
        // @ts-ignore
        const isMatch = await bcrypt.compare(userPassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
};

const UserModel = db.model('users' , userSchema);

module.exports = UserModel; 