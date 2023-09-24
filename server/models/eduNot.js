const mongoose=require('mongoose');

const Schema=new mongoose.Schema({
    c_id: String,
    c_name: String,
    c_degree: String,
    c_branch: String,

})


const eduNotification=mongoose.model('Edu_Notifications',Schema);

module.exports=eduNotification;