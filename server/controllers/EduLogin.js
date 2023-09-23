const Educator=require('../models/eduSchema');
const SECRET_KEY='1231212345631345612390324234232'
const jwt=require('jsonwebtoken');



const EduLogin=async (req,res)=>
{
    const {email,password}=req.body;
    const existUser=await Educator.findOne({email:email});
    if(!email || !password)
    {
        return res.status(400).json({"error":"Please fill all fields"});
    }
    if(!existUser)
    {
       return res.status(400).json({"error": "User not found...Signup first"});
    }

    else
    {
        const validation=await bcrypt.compare(password,existUser.password);
        if(!validation)
        {
            res.status(400).json({"error":"Enter valid Credentials"});
        }

        else
        {   

            const EduData={
                user:{
                    id:existUser._id,
                    
                }
            }

            const authtoken=jwt.sign(EduData,SECRET_KEY);
            // console.log(authtoken);
            return res.status(201).json({"success":"User Logged in Successfully","authToken":authtoken.toString(), "type": "educator" });

        }
    }
}

module.exports=EduLogin;