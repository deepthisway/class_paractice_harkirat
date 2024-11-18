// acquiring the user from the database

const {User}= require ('../database/index');

function userMiddleware(req,res, next)  {
    const username = req.headers.username;
    const password = req.headers.password;

    User.findOne({
        username: username,
        password: password,
    })
        .then(function(value)    {
            if(value)   {
                next();
            } else{
                res.status(404).json({
                    msg: "User not found",
                })
            }
})
}

module.exports = {
    userMiddleware,
}