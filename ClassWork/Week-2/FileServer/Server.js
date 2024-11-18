const fs = require('fs');
const path = require('path');
const express = require('express');
const port = 3002;

const app =  express();

app.get('/files', (req, res)    =>  {
    // console.log(__dirname); // __dirname gives the path of the current directory and '__dirname' , './files/' joins /files with 
    // path => ultimate path becomes path to directory where all files exist

    fs.readdir(path.join(__dirname , './files/'), (err,files)=>   {
        // can use => const filepath = path.join('__dirname' , './files/') and pass into function. 

        if(err) {
            console.log(err);
            return res.status(500).json({
                error: "There is some error!!! Please check."
            })
        }
            res.json(files);
            // res.send(files);
    })
})

app.get('/files/:filename' , (req, res) =>  {
    const filepath2 = path.join(__dirname , './files/' ,req.params.filename );

    fs.readFile(filepath2, 'utf-8' , (err, data)=>  {
        if(err) {
            return res.status(404).send("File not found");
        }
        res.send(data);
    }
    )
})

/*The app.all("*", (req, res) => { ... }) route in an Express 
application is used to handle all HTTP methods (GET, POST, PUT, DELETE, etc.) 
for any routes that have not been previously matched by other route handlers.*/

app.all('*' , (req, res)=>  {
    res.status(404).send("No path found!! Enter the correct path.")
})


app.listen(port);


