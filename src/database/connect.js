const { connect } = require('mongoose');

const dbConnect = () => {
    return new Promise((resolve, reject)=>{
        console.log('connecting to database mongodb...');
        try {
            connect(process.env.DB_CONNECTION, {
                useNewUrlParser: true,
            });
            resolve(true);
            console.log('connected to database of mongodb');
        } catch (error) {
            reject(false);
            console.log('ocurred a error to try connected to database', error);
        }
    });
}


module.exports = { dbConnect }