const mongoose = require('mongoose');


const resourceSchema = new mongoose.Schema({
  // title: String,
  type: String,
  url: String,
  author: String,
  date: Date,
});

const topicSchema = new mongoose.Schema({
  title: String,
  resources: [ resourceSchema],
});


const moduleSchema = new mongoose.Schema({
  duration: Number,
  topics: [topicSchema],
});




const courseSchema = new mongoose.Schema({
  degree: String,
  title: String,
  objective: String,
  category: String,
  department: String,
  semester: String,
  subject: String,
  sub_code: String,
  elective: String,
  credit: Number,
  modules: [moduleSchema],
});

module.exports = mongoose.model('Course', courseSchema);
