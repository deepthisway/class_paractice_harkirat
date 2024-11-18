const {Router} = require("express");
const { userMiddleware } = require("../middlewares/user");
const { User, Course } = require("../database");
const router = Router();


// user routes
 
router.post('/signup', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username,
        password
    })
    res.json({
        msg: "user created successfully!!"
    })
}) 

router.get('/courses', async (req, res)   =>  {
    const response = await Course.find({});

    res.send({
        allCourses: response,
    })
})

// implement the couse purchase logic
router.post('/purchase/:courseID',userMiddleware, async (req,res)=> {
    const courseID = req.params.courseID;
    const username = req.headers.username;

    await User.updateOne({
        username :username,
    }, {
        "$push": {
            purchasedCourses: courseID,
        }
    })
    res.json({
        msg: "course purchased successfully!!"
    })
})

// router.get('/purchasedCourses', userMiddleware, async (req,res)=> {
//     const user = await User.findOne({
//         username : req.headers.username
        
//     })
// })

module.exports = router;