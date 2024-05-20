const mongoose = require('mongoose');

const mongodbUrl = `mongodb://127.0.0.1:27017/blogapp`


async function dbConnection(){
    try{
        let resp = await mongoose.connect(mongodbUrl);
        console.log("Database Connected Successfully...");
    }catch(error){
        console.log("Error while Database Connecting...",error)
    }
}


module.exports = {dbConnection};