const Courses=require('../models/courseSchema');

const CoursePage=async (req,res)=>
{
    const courseID=req.body.id;
    const course=await Courses.findOne({_id: courseID});
    if(!course)
    {
        return res.status(500).json({message: 'Course not found'});
    } 
    res.status(201).json(course);
}

module.exports=CoursePage;