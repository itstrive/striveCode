const express = require('express');

let router = express.Router();

module.exports = router;

router.get('/',function(req,res){
    res.render('user/index',{user:{name:'Strive', age:18}, message:'我是用户的主页面'});
});

router.get(/\/\d+/,function(req,res){
    res.render('user/user_info',{info: req.url});
});