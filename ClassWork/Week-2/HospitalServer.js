const express = require("express");
const app = express();
// const port = 4000;

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
        // unhealthy: false,
      },
    ],
  },
];

app.use(express.json());        // explained later(Middleware). if we dont use this, then req.body will be undefined in post request.

app.get("/", (req, res) => {            // to send the data to client
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({        // sends the data to the client in JSON format
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnealthyKidneys,
  });
});

app.post('/', (req,res) =>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done",
    })
})


// PUT request ( eg. setting all the kidney to healthy or unhealthy)

app.put('/', (req, res) =>  {
    for(let i= 0; i< users[0].kidneys.length ; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
})

app.delete('/', (req,res) =>    {
    if(isThereAnyUnhealthyKidney()) {   // trying to put a check
        const newKidneys = [];
    for(let i =0; i< users[0].kidneys.length ; i++)  {
        if(users[0].kidneys.healthy) {
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "Completed"})
    }
    else    {
        res.status(411).json({      // used to send somestatus code. done by the programmer. GOOD Practice in case of errors
            congratulations: "You have no unHealthy kidneys!! Relax!!"
        })
    }

})

// what if there are no unhealthy kidneys, then only delete. to put that check, we will use this function 

function isThereAnyUnhealthyKidney()    {
    let thereIsUnhealthyKid = false;
    for(let i = 0; i<users[0].kidneys.length; i++)  {
        if(!users[0].kidneys.healthy)   {
            thereIsUnhealthyKid = true
        }
    }
    return thereIsUnhealthyKid;
}


app.listen(3001);
