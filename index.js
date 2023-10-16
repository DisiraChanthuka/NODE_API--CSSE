const app = require('./app');
const db = require('./config/db');
const UserModel = require('./model/user.model');
const SiteOrderModel = require('./model/siteOrder.model');
const port = 3000;

app.get('/' , (req,res) =>{
    res.send("Hello World!!")
});

app.listen(port , () =>{
    console.log(`Server is up and running on Port http://localhost:${port} 🚀`);
});