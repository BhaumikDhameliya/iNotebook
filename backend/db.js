const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo = async()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connecteed to mongoose successfully")
    })

}

module.exports =connectToMongo;