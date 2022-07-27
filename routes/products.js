const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
    res.send('display all products')
})

router.get('/create', function(req,res){
    res.send("Create product")
})
module.exports= router;