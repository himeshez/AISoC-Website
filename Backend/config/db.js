const mongoose = require("mongoose"); 

dotenv = require("dotenv") ; 

dotenv.config() ;


const dbConnect = ()=>{
    mongoose.connect(process.env.DB_URL)
    .then (  () =>console.log("DB connection Success"))
    .catch((err) =>{
        console.log("issue in Db connection") ; 
        console.log(err) ; 
        process.exit(1) ; 
    }) ; 
}

module.exports = dbConnect ; 