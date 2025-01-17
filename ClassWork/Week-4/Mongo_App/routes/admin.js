const express = require('express')
const {AdminMiddleware} = require ("../middlewares/admin");
const { Admin, Course } = require('../database');
const router = express.Router()

router.post("/signup", (req, res)  =>   {
    // implement Admin Sign-Up logic
    const username = req.body.username;
    const password = req.body.password; 

    Admin.create({
        username:username,
        password: password,
    })
    .then(function() {
        res.json({
            msg: "User created successfully!!"
        })
    })
})

router.post('/courses' , AdminMiddleware , async(req, res) =>   {
    // implement create course logic
    // things to acquire from req must be same nas defined in schema
    const username = req.body.username; // should havendone some input validation using zod
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    
    // creating the course
    const newCourse = await Course.create({
        username,       // if the name of the varible and field is same then this can be done insted of username: username
        description,
        imageLink,
        price
    })
        res.json({
            msg: "Course created successfully!!",
            courseID: newCourse._id, // syntax to acquire the ID automatically generated by MONGO.DB
        })
    }) 

// to get all the courses someone has purchased

router.get('/courses', AdminMiddleware, async (req, res)=>    {
    // fetch all the courses
    const allCourses = await Course.find({}); // don't need to pass anthinig to find, because we are not looking for a specific course, we want all
    res.json({
        msg: "Courses fetched successfully!!",
        courses: allCourses,
        })
})

module.exports = router;