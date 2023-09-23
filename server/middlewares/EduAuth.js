const SECRET_KEY='1231212345631345612390324234232'

const Educator=require('../models/eduSchema');
const jwt=require('jsonwebtoken');


const EduAuth=async (req,res)=>
{
    try{
        const token=req.body.token;
        
        const jwtoken=jwt.verify(token,SECRET_KEY);
    
        const reqID=jwtoken.user.id;
            // console.log(reqID);
            const currUser=await Educator.findOne({_id:reqID});
            // console.log(currUser.name);
            if(!currUser)
            {
                throw new Error('User not found');
            }
    
            req.currUser = currUser;
            next();
    }
    catch(err){console.log(err);}

}

module.exports=EduAuth;