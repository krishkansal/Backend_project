const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
    name:mongoose.Schema.Types.String,
    phone:mongoose.Schema.Types.Number,
    email:mongoose.Schema.Types.String,
    password:mongoose.Schema.Types.String,
    cpassword:mongoose.Schema.Types.String,
})

const data=new mongoose.model('data',userSchema);
module.exports=data;
