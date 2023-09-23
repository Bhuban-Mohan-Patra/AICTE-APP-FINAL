const Educator=require('../models/eduSchema');
bcrypt=require('bcrypt');


const EduRegd=async (req,res)=>
{

    try{

    const {name,email,gender,designation,organisation,mobileno,password,c_password,dob}=req.body;
    if(!name || !organisation || !email || !gender || !designation || !mobileno || !c_password || !password|| !dob)
        {
           return res.status(400).json({"error":"Please fill all the fields"});
        }

        else 
        {
            const exist_email=await Educator.findOne({email});
            if(exist_email)
            {
               return res.status(400).json({"error":"User Already Exists! Please Login","signedUp":true});

            }
            else if(password!=c_password)
            {
               return res.status(400).json({"error":"Password and Confirm password must be same"});
            }
            
        }

        //validation ends

        //password encrypt
        const salt=await bcrypt.genSalt(10);
        const enc_pass=await bcrypt.hash(password,salt);
        const enc_c_pass=await bcrypt.hash(c_password,salt);

        const newEducator=new Educator({name,email,gender,designation,organisation,mobileno,password:enc_pass,c_password:enc_c_pass,dob});
         const resp= await newEducator.save();
         if(!resp)
         {
            throw new Error('Could not save details');
         }
         res.status(200).json({"success":"User Created"});
         console.log("New User Created");



    }
catch(err){
    console.log(err);
    
}

}

module.exports=EduRegd;