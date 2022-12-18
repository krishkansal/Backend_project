const mongoose=require('mongoose');

mongoose.connect(`mongodb+srv://krishkansal:krishkansal99@cluster0.8derh9k.mongodb.net/user-data?retryWrites=true&w=majority`)
.then( () => console.log("connection seccessfull..."))
.catch(err=>console.log(err));