const { connect } = require('mongoose');

const dbConnect = async() =>{
    try {
        await connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
        });

        console.log('connected to database of mongodb');
    } catch (error) {
        console.log('ocurred a error to try connected to database', error);
    }
}

module.exports = { dbConnect }