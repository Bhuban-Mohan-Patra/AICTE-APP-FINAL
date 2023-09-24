const Course = require('../models/courseSchema'); // Import your Mongoose model


const Create=async (req, res) => {
    try {
      const courseData = req.body.courseData; // Get course data from the request body
      const creator=req.body.creator;
      courseData['creator'] = creator;
      console.log(courseData);
      // Create a new course using the Course model
      const newCourse = new Course(courseData);
      newCourse.creator = creator;
      // Save the new course to the database
      await newCourse.save();
  
      res.status(201).json({ message: 'Course created successfully' });
    } catch (error) {
      console.error('Error creating course:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  module.exports=Create;