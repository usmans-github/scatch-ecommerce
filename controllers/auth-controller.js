const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken")


module.exports.registerUser = function (req, res) {

    try {
      let { fullname, email, password } = req.body;
  
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
          if (err) return res.send(err.message);
          else {
            let user = await userModel.create({
              fullname,
              email,
              password: hash,
            });
  
            let token = generateToken(user)
            res.cookie("token", token);
            res.send("user created successfully");
         
          }
        });
      });
    } catch (err) {
      res.send(err.message);
    }
  }