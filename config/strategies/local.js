'use strict';

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require('mongoose');

const User = mongoose.model("User");

module.exports = ()=>{
  passport.use('local',new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },(email,password,done)=>{
      User.authenicate(email,password,(err,user)=>{
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: 'Invalid email or password.' });
        }

        return done(null, user);
      });
    }
  ));
};
