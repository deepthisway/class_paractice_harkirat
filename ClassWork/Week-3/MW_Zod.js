// Zod library is used for validation and checks.

const express = require ("express")
const zod = require('zod')
const app = express();
const schema = zod.array(zod.number()) // this sets the validation check that 
                                        //whichever follows this schema, taht has to be an array of integers

// we won't have to apply 100 differnet checks to check if it is a array of numbers
app.use(express.json())

app.post('/zod' , (req,res)=>    {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys) // syntax to apply that schema on input array
    // res.send({
    //     response    // now respose has all the details, if it is 
    //                    //false, failed, data type which can be extracted to display to the user (can check in postman)
    // })
    // or we can access diffent keys provided by Zod
    if(!response.success)   {
        res.status(400 ).json({
            msg: "Invalid input"
        })
    } else{
        res.send({
            response
        })
    }

});

app.listen(4000);
