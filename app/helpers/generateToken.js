const jwt = require('jsonwebtoken');

// TODO: add role in database
const tokenSing = async (user) => jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

const verifyToken = async (token) =>{
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
}

const decodeSing = async (token) => jwt.decode(token, null);

module.exports = { tokenSing, verifyToken, decodeSing };