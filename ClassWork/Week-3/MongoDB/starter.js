const mongoose  = require("mongoose");
const express = require('express');

const app = express();
app.use(express.json());

// way to connect to out database
mongoose.connect("mongodb+srv://deepthisway:Deep%403574@cluster0.dp3sd3u.mongodb.net/userappnew")

const User = mongoose.model('firstDB' , {name: String, email: String , password : String })

// taking input from the body 

app.post('/user' , async (req, res)=> {
    // const user = req.body.username;
    // const email = req.body.email;
    // const password = req.body.password;
    const {username, email, password} = req.body;
  
  // check if the user already exists
const existingUser  = await User.findOne({
  email: email,
})

if(existingUser)  {
  return res.status(400).send("User already exists");
}

const user1 = new User ({
  name: username,
email: email,
password: password
})

await user1.save().then(()=>
res.status(201).send("User saved successfully")
);

})
app.listen(8000, () =>  {
  console.log("Server is running on port 8000");
});

