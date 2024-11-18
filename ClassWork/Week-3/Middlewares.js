const express = require('express');

const app= express();

// Dumb way of doing input validation(without using middlewares)

// app.get('/health-checkup' , (req,res)=>    {
// const username = req.headers.username;
// const password = req.headers.password;
// const kidneyId = req.query.kidneyId;

//     if(!(username == "Deep" && password == "pass"))    { 
//         res.status(400).json({msg: "Something cooked bad!!"})
//         return;
        
//     }
//     if(kidneyId ==1 || kidneyId ==2)    {
//         //do something
//         res.json({
//             msg: "You have been logged in!!"
//         })
//     }
// });

// USING MIDDLEWARES(1)

function userMiddleware( req, res, next)    {
    const username = req.headers.username;
    const password = req.headers.password;
    if(!(username == "Deep" && password == "pass")) {
        res.status(400).json({msg: "Invalid Credentials"})
        return;
    }
    else{
        next();
    }
}
// middleware to check kidneys (2)
function kidneyMiddleware(req, res, next) {
    const kidneyId = parseInt(req.query.kidneyId, 10);
    if(!(kidneyId ==1 || kidneyId ==2))    {
        res.status(403).json({
            msg: "Incorrect inputs"
        })
    } else next();
}

// using these middlewares instead of writing logic inside get request!!

app.get('/kidney-report',userMiddleware, kidneyMiddleware, (req,res) => {
    res.json({
        msg:"We've got you. You're good!!!"
    })
})

// *------------LISTENING DEPARTMENT DOWN THERE--------------------*

app.listen(3000, () =>  {
    console.log("Server is runninng on port 3000"); 
});
