
const SECRET_KEY='1231212345631345612390324234ascascas232'
const Designer=require('../models/designerSchema');
const Educator=require('../models/eduSchema');
const jwt=require('jsonwebtoken');



const authenticate=async (req,res,next)=>
{
    try{
     
        const token=req.body.token;
        const type=req.body.type;
        console.log(`${type} from server`);
        const jwtoken=jwt.verify(token,SECRET_KEY)
        // console.log(jwtoken);
        const reqID=jwtoken.user.id;
        var currUser;
        // console.log(reqID);
        if(type==='designer')
        {
            currUser=await Designer.findOne({_id:reqID});
        }
        else if(type==='educator')
        {
            currUser=await Educator.findOne({_id:reqID});
        }
        
        // console.log(currUser.name);
        if(!currUser)
        {
            throw new Error('User not found');
        }

        req.currUser = currUser;
        next();


    }catch(err){console.log(err)};
   


    
};

module.exports=authenticate;