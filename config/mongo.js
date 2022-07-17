const { connect } = require('mongoose');

const dbConnect = () =>{
    const DB_URI = process.env.DB_URI;
    connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (error, res) =>{
        if(!error){
            console.log('***********CONNECTION SUCCESS*************');
        }else{
            console.log('***********ERROR TO CONnECTION', error);
        }
    });
}

module.exports = { dbConnect };