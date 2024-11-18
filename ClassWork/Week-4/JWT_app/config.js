//When a user logs in or registers, the server creates a JWT token. 
//This token is signed using a secret key.
//The secret key ensures the token's integrity and authenticity.
const JWT_SECRET = "deep_sever";

module.exports = {
    JWT_SECRET,
}