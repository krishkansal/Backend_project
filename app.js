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
app.get('/signup',(req,res)=>{
    
    return res.redirect("signup.html");

})


// app.post('/signup',async (req,res)=>{
//     try{
//         const password=req.body.password;
//         const cpassword=req.body.cpassword;

//         if(password===cpassword){

//             const signupdata=new data({
//                 name:req.body.name,
//                 phone:req.body.phone,
//                 email:req.body.email,
//                 password:req.body.password,
//                 cpassword:req.body.cpassword

//             })

//             const registered =await signupdata.save();
//             res.status(201).redirect("Main Page.html")

//         }else{
//             res.send("password are not matching")
//         }

//     }catch(error){
//         res.status(400).send(error);
//     }
// })



app.post("/signup",(req,res)=>{
    console.log(req.body.name);
    console.log(req.body.phone);
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.cpassword);

    const password=req.body.password;
    const cpassword=req.body.cpassword;

    if(password===cpassword){

    const users=new data({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        cpassword: req.body.cpassword
    })
        

    
    users.save()
    .then(()=>{ res.status(201).redirect("Main Page.html");})
    .catch((e) => {res.status(400).json(e);})
    }else{
        res.send("password are not matching")
    }
})



app.listen(port,()=>{
    console.log("connection setup");
})