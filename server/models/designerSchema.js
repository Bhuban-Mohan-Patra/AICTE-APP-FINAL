const mongoose=require('mongoose');

const Schema=new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    designation:{
        type: String,
        required: true
    },
    organisation:{
        type: String,
        required: true
    },
    mobileno:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    c_password:{
        type: String,
        required: true
    },
    dob:{
        type: Date,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    feedbacks:{
        type: Array
    }


})

const Designer=mongoose.model('Designers',Schema);

module.exports=Designer;