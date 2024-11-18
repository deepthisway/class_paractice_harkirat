const express = require('express');
const cors = require('cors');
const app = express();

// using the cors middleware to remove the CORS error
app.use(cors());


app.get('/sum', (req,res)=> {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1 + num2;
    res.send(sum.toString());

})

app.listen(4000, ()=>   {
    console.log('Server is running on port 4000');
})

