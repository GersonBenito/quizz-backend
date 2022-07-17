const { response } = require("express");
const { verifyToken } = require('../helpers/generateToken');

const checkChangePassword = async(req, res = response, next) =>{
    try {
        const id = req. params.id;
        const token = req.headers.authorization.split(' ').pop();
        const { _id } = await verifyToken(token);
        
        if(id === _id){
            next();
        }

        if(id !== _id){
            return res.status(401).json({
                status: 401,
                message: 'No have permission for change the password the this user'
            })
        }

    } catch (error) {
        res.status(409).json({
            status: 409,
            message: 'Token no valido'
        })
    }
}

module.exports = checkChangePassword;