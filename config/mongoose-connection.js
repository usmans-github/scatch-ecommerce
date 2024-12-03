const mongoose = require("mongoose")

mongoose
.connect("mongodb://localhost:27017/scatch")
.then(function(){console.log("connected to mongodb")})
.catch(function(err){console.log("Error", err);
})

module.exports = mongoose.connection;