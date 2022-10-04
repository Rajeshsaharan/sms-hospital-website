const jwt = require('jsonwebtoken')


module.exports = checkAuth= (request, response, next)=>{
    const token = request.body.token ||  request.params.token || request.header['access-token']
    if (!token){
        return response.send({error : "please 1login first"})
    }
    const user = jwt.verify(token, process.env.JWT_AUTH_KEY) //verify the user by token
    request.user  = user //set request user to user
    next()
}
