const express=require('express');
const Router=express.Router();
const Home=require('../controllers/Home');
const EduRegd=require('../controllers/EduRegd');
const DesRegd=require('../controllers/DesRegd');
const EduLogin=require('../controllers/EduLogin');
const DesLogin=require('../controllers/DesLogin');
const AllCourses=require('../controllers/AllCourses');
const Create=require('../controllers/Create');
const authenticate=require('../middlewares/authenticate');
const handleFeedback=require('../controllers/handleFeedback');
const CoursePage=require('../controllers/CoursePage');
const eduNotifications=require('../models/eduNot'); //
// Handle POST request to create a new course

Router.get('/', Home);

Router.post('/register/Edu', EduRegd)

Router.post('/register/Des', DesRegd)

Router.post('/create', Create);

Router.post('/login/Des', DesLogin);

Router.post('/login/Edu', EduLogin);

Router.get('/allcourses', AllCourses);

Router.post('/coursepage', CoursePage);

Router.post('/getUser',authenticate,(req,res)=>
{
    res.send(req.currUser);
}  )

Router.post('/feedback', handleFeedback); 

Router.post('/newcourse',async (req,res)=>
{
    try
    {
        const newNot=new eduNotifications({
            c_id: req.body._id,
            c_name: req.body.subject,
            c_degree: req.body.degree,
            c_branch: req.body.title
        })
    
        const resp=await newNot.save();
        if(resp)
        {
            console.log('notification saved');
            res.status(201).json({"messege": "notification saved"});
    
        }
    }
    catch(err){console.log(err);}
    // console.log(req.body);
    

}); 

Router.get('/getnotification',async (req,res)=>
{
    try
    {
        // console.log('he he server');
    const notifs=await eduNotifications.find();
    // console.log(notifs);
    res.status(201).send(notifs);
    }
    catch(err){console.log(err);}
    

})
// Router.post('/create',authenticate,(req,res)=>
// {
//     res.send(req.currUser);
// })



module.exports=Router;