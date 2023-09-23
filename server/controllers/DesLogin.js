const Designer=require('../models/designerSchema');
const SECRET_KEY='1231212345631345612390324234ascascas232'
const jwt=require('jsonwebtoken');


const DesLogin=async (req,res)=>
{
    const {email,password}=req.body;
    if(!email || !password)
    {
        return res.status(400).json({"error":"Please fill all fields"});
    }
    const existUser=await Designer.findOne({email:email});
    if(!existUser)
    {
        res.status(400).json({"error": "User not found...Signup first"});
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

            const DesData={
                user:{
                    id:existUser._id
                }
            }

            const authtoken=jwt.sign(DesData,SECRET_KEY);
            // console.log(authtoken);
            return res.status(201).json({"success":"User Logged in Successfully","authToken":authtoken.toString() ,"type": "designer" });

        }
    }
}

module.exports=DesLogin;