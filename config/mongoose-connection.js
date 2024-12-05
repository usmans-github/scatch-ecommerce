const mongoose = require("mongoose")
const config = require("config")



mongoose
.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(function(){console.log("connected to mongodb")})
.catch(function(err){console.log("Error is", err);
})

module.exports = mongoose.connection;