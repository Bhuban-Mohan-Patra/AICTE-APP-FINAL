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
const CoursePage=require('../controllers/CoursePage');
// Handle POST request to create a new course

Router.get('/', Home);

Router.post('/register/Edu', EduRegd)

Router.post('/register/Des', DesRegd)

Router.post('/create', Create);

Router.post('/login/Des', DesLogin);

Router.post('/login/Edu', EduLogin);

Router.get('/allcourses', AllCourses);

Router.post('/coursepage', CoursePage);

Router.post('/dashboard',authenticate,(req,res)=>
{
    res.send(req.currUser);
}  )



module.exports=Router;