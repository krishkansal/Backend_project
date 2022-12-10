const express=require("express")

require("./DB/conn");
const data=require("./model/signup")
const app=express()
const port=3000 || process.env.PORT


app.use(express.json());

app.get('/',(req,res)=>{
    
    res.send("hello from home side");

})

app.post("/signup",(req,res)=>{
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.cpassword);


    const users=new data({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cpassword: req.body.cpassword
    })
        

    
    users.save()
    .then(()=>{ res.status(201).json(users);})
    .catch((e) => {res.status(400).json(e);})

})


app.listen(port,()=>{
    console.log("connection setup");
})