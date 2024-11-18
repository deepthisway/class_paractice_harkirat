const { ALL } = require("dns");
const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json());

const ALL_USERS = [
  {
    username: "gagan@gmail.com",
    password: "123",
    name: "Gagan Sirohi",
  },
  {
    username: "riya@gmail.com",
    password: "123321",
    name: "Riya Mahajan",
  },
  {
    username: "rajesh@gmail.com",
    password: "123321",
    name: "Rajesh Yadav",
  },
];

function userExists(username, password) {
  let userExists = false;
  for(let i=0; i<ALL_USERS.length ; i++)    {
    if(ALL_USERS[i].username == username && ALL_USERS[i].password == password)  {
        return userExists = true;
    }
    return userExists;
  }
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }
  
  var token = jwt.sign({ username: username }, "shhhhh");
  return res.send(token);[]
});


// go to Postman, after running this endpoint, pass the token generated earlier to the header : create one with name authoriztion and paste token there,
// then you can access the protected route
app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword); // jwt token to verify the token generated
    const username = decoded.username;
    // return a list of users other than this username
    res.json ({
        users: ALL_USERS.filter((value) => {
            if(value.username == username)  {
                return false;
            }
            else{
                return true;
            }
        })
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(4000, () =>{
    console.log("Server is running on port 4000");
})