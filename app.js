const express=require("express")
const bodyParser = require("body-parser")
require("./DB/conn");
const data=require("./model/signup")
const app=express()
const port=3000 || process.env.PORT


app.use(express.json());
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

app.get('/',(req,res)=>{
    
    return res.redirect("Main Page.html");

})


app.get('/login',(req,res)=>{
    
    return res.redirect("login.html");

})

app.post("/signup",(req,res)=>{
    console.log(req.body.name);
    console.log(req.body.phone);
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.cpassword);


    const users=new data({
        name: req.body.name,
        phone: req.body.phone,
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