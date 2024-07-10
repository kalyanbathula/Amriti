const mongoose = require("mongoose")

const mongoDbUrl =
  "mongodb+srv://harshpahwa74:jyFBADBhVAYXhCaZ@cluster0.06c31bq.mongodb.net/?retryWrites=true&w=majority";
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}