const SECRET_KEY='1231212345631345612390324234ascascas232'
const Designer=require('../models/designerSchema');
const jwt=require('jsonwebtoken');


const DesAuth=async (req,res)=>
{
    try{
        const token=req.body.token;
        
        const jwtoken=jwt.verify(token,SECRET_KEY);
    
        const reqID=jwtoken.user.id;
            // console.log(reqID);
            const currUser=await Designer.findOne({_id:reqID});
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

module.exports=DesAuth;