// creating out first server using express library 

const express  = require('express')
const port = 3001

const app = express(); // creating instance of express application to do bunch of things on that instance a


app.get('/' , function(req, res)    {
    res.send('This is my first server @@!!')
    console.log(req.body);
});


app.get('/init', function(req, recs)   {
    // res.send("This is the second block.")
    res.json({
        name: "Deepanshu",
        age: 21
    })

});

app.post('/new' , function(req, res)    {
    res.send({
        msg: "2+2 =4"
    })
})

app.listen(port);
