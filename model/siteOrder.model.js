const db  = require('../config/db');
const mongoose  = require('mongoose');
const {Schema} = mongoose;
const UserModel = require('./user.model');

const siteOrderSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName
    },
    Company:{
        type: String,
        required : true 
        
    },
    Warehouse:{
        type: String,
        required : true 
    },
    Reference:{
        type: String,
        required : true 
    },
    Required_Date:{
        type: Date,
        required : true 
    },
    
    
});

const SiteOrderModel = db.model('todo' , siteOrderSchema);

module.exports = SiteOrderModel; 