"use strict";
const express = require("express");
const mainCtrl = require('./../controllers/main');
const authCtrl = require("./../controllers/authentication");
const auth = require('./../middleware/authentication');
const accountCtrl = require('./../controllers/account');
const router = express.Router();

// router.get('/',mainCtrl.showPage('index',{title:'Zooop'}));
router.get('/',(req,res)=>{
  res.render('index',{title:"Zooop",currentUser:req.user});
});

router.get("/login",(req,res)=>{
  res.render('login');
});

router.post('/login', authCtrl.signin);
router.post('/signup',accountCtrl.signup);
router.get('/logout', authCtrl.signout);

router.get("/dashboard",auth.ensured,(req,res)=>{
  res.render('dashboard',{user:req.user});
});

module.exports = router;
