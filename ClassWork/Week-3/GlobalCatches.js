const express = require ('express');

const app = express();

app.use(express.json());

app.post('/health' , (req,res)=>    {
    const kidneys = req.body.kidneys;
    const NumKidney = kidneys.length;

    res.send("You have " + NumKidney + " kidneys");

});


// anything can hit our server, not neccessariy a array of int that we are expecting 
// to save our server from crashing, we use Global catches
// has 4 arguments. handels when a users send wrong body 
// kind of error handling 

// Global catch

app.use((err, req, res, next)=> {
    res.json({
        msg: "Struckk!!That was an invalid input into the body."
    })
})  

app.listen(3001);
