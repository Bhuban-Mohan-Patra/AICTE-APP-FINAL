const Courses=require('../models/courseSchema');

const AllCourses= async (req,res)=>
{
    const allcourses=await Courses.find();
    console.log(allcourses);
    res.status(201).json(allcourses);
}

module.exports=AllCourses;