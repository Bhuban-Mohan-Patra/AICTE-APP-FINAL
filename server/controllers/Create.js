const Course = require('../models/courseSchema'); // Import your Mongoose model


const Create=async (req, res) => {
    try {
      const courseData = req.body; // Get course data from the request body
  
      // Create a new course using the Course model
      const newCourse = new Course(courseData);
  
      // Save the new course to the database
      await newCourse.save();
  
      res.status(201).json({ message: 'Course created successfully' });
    } catch (error) {
      console.error('Error creating course:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  module.exports=Create;