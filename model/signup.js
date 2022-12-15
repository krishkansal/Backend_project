const mongoose=require('mongoose');
const bcrypt = require("bcrypt");

const userSchema=new mongoose.Schema({
    name:mongoose.Schema.Types.String,
    phone:mongoose.Schema.Types.Number,
    email:mongoose.Schema.Types.String,
    password:mongoose.Schema.Types.String,
    cpassword:mongoose.Schema.Types.String,
})

userSchema.pre("save" , async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,10);

        this.cpassword=undefined;
    }
    next();
})

const data=new mongoose.model('data',userSchema);
module.exports=data;
