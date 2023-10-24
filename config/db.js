const mongoose = require('mongoose');

const connection = mongoose.createConnection('your_mongo_url')
.on('open' , ()=>{
   console.log("Connected to DB 💻"); 
}).on('error' , () => {
    console.log("Error");
});

module.exports = connection;
