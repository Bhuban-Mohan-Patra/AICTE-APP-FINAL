const express=require('express');
const app=express();
const PORT=5000;
const bodyParser = require('body-parser')
const Router=require('./Routes/Routes');
const conn=require('./db/conn');
conn();




app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(Router);


app.get('/',(req,res)=>
{
    res.send("Hello World from app.js");
}
)






app.listen(PORT,(req,res)=>
{
    console.log(`listening on port ${PORT}`);
})