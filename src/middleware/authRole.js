const User = require('../models/user')

const authRole = async (req, res, next) =>{
    const user = await User.findOne({roles: "Admin"})

    // for(let i=0;i<user.length;i++){

    // }
    

    try{
        if(user.roles[0] !== "Admin"){
            return res.status(401).send({message: "Not Allowed"})
        }

        next()
    } catch(e){
        console.log(e)
    }
}

module.exports = authRole


