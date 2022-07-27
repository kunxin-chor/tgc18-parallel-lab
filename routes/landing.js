const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
    res.send("Home page")
})

router.get('/faq', function(req,res){
    res.send('FAQ');
})

router.get('/about-us', function(req,res){
    res.send('About Us')
})

module.exports = router;