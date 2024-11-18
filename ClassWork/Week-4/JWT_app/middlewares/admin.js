const jwt  = require("jsonwebtoken")
const {JWT_SECRET} = require("../config.js")

function adminMiddleware(req, res, next)  {
    const token= req.headers.authorization;
    const words = token.split(" ")  //Token Format: The token is expected to be in the format Bearer <token>. Therefore, the string is split by space, 
                                    //and the actual JWT token is extracted as the second element (words[1]
    const jwtToken = words[1];
    // when creating a jwt, there has to be a global secret, 
    // that will be used to sign the token and has to be used to verify the token as well 
    // we'll define a file to make that secret key in the config file

    const decoded_value = jwt.verify(jwtToken, JWT_SECRET)      // verifies the created jwt token with the secret key

    if(decoded_value.username)  {       // username is encoded in jwt, it extracts that and returns true or false

        next();
    }
    else{
        res.status(403).json({
            msg: 'you are not authorized'
        })
    }
}

module.exports = {
    adminMiddleware
}