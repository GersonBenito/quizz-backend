const bcrypt = require('bcryptjs');


const encrypty = async (textPlaint) => {
    const hash = await bcrypt.hash(textPlaint, 10);
    return hash;
}

const compare = async (passwordPlaint, hashPassword) =>{
    return await bcrypt.compare(passwordPlaint, hashPassword);
}

module.exports = { encrypty, compare }