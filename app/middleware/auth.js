const { response } = require("express");
const { verifyToken } = require("../helpers/generateToken");

const checkAuth = async (req, res = response, next)=>{
    try {
        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await verifyToken(token);
        if(tokenData._id){
            next();
        }else{
            return res.status(409).json({
                status: 409,
                message: 'Token no valido'
            })
        }
    } catch (error) {
        res.status(409).json({
            status: 409,
            message: 'Token no valido'
        })
    }
}

module.exports = checkAuth;