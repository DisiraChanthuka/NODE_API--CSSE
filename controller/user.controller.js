const UserService = require('../services/user.services');

exports.register = async(req , res , next) => {
    try {
        const { email , password } = req.body;

        const successRes = await UserService.registerUser(email , password);

        res.json({status: true , success: "User Reg Succ"});
    } catch (error) {
        throw error;
    }
}

exports.login = async(req , res , next) => {
    try {
        const { email , password } = req.body;
        
        const user = await UserService.checkUser(email);
        console.log("-------- USER 🤵 -------" , user);
        if(!user){ 
            throw new Error("User Does Not Exist");
        }

        const isMatch = await user.comparePassword(password);
        if(isMatch == false){
            throw new Error("Invalid Password");
        }

        let tokenData = {_id:user._id , email:user.email};

        const token = await UserService.generateAccessToken(tokenData ,"JWTSecret_Key",'1h' )

        res.status(200).json({status : true , token : token})
        
    } catch (error) {
        throw error;
    }
}