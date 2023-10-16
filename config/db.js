const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://disira:1234@csse.oosfbth.mongodb.net/test?retryWrites=true&w=majority')
.on('open' , ()=>{
   console.log("Connected to DB 💻"); 
}).on('error' , () => {
    console.log("Error");
});

module.exports = connection;