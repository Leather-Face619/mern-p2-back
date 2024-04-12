const mongoose = require("mongoose");

const DB = "mongodb://localhost:27017/test1"

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=> console.log("DataBase Connected")).catch((err)=>{
    console.log("Error => "+err);
})