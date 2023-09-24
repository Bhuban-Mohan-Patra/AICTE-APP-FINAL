const mongoose=require('mongoose');

async function conn()
{
    try
    {
        // await mongoose.connect('mongodb+srv://saketnanda:Deadman6@usersdb.jmmruhn.mongodb.net/');
        await mongoose.connect('mongodb+srv://saketnanda:Deadman6@usersdb.jmmruhn.mongodb.net/');
        console.log('database connected successfully');

    }
    catch(err)
    {
        console.log(err);
    }

}

module.exports=conn;