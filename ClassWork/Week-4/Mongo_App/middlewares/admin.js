// middlewares
// in order to match the data with databases, the models has to be acquired here.
// if this middleware satisfies, then only the user/admin can move ahead and acceess the data

const {Admin} = require ("../database/index")

function AdminMiddleware (req, res, next)   {
    const username = req.headers.username;
    const password = req.headers.password;
    Admin.findOne({
        username: username,
        password: password,
    })
        .then(function (value)  {
            if(value)   {
                next();
            } else{
                res.status(403).json({
                    msg:"user cannot be found"
                })
            }
        })
}

module.exports = {AdminMiddleware}
