// Here we will be defining all the schemas for all the ttypes of data we are going to store 

const mongoose = require('mongoose')

// if i want to specify the name of our new database, then put that nama after / in the below link
mongoose.connect("mongodb+srv://deepthisway:Deep%403574@cluster0.dp3sd3u.mongodb.net/Course_Selling_App_with_auth");
// admin schema
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
})

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses:   [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    }]
})

const courseSchema = new mongoose.Schema({
    username: String,
    description: String,
    imageLink: String,
    price: Number,
})

// creating instances of the above made schemas

const Admin = mongoose.model('Admin', AdminSchema)
const User = mongoose.model('User', UserSchema)
const Course = mongoose.model('Course', courseSchema)


// to export these to other files, this syntax is used
module.exports= {
    Admin,
    User,
    Course
}
