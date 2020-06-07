'use strict';
var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    // My simple calculator Comp2068
    var x = req.query.x;
    var y = req.query.y;
    var method = req.query.method;
    function calculator(method, x, y) {
        if (method == 'add') {
            console.log(x + " + " + y + " = " + (parseInt(x) + parseInt(y)))
        }
        else if (method == 'subtract') {
            console.log(x + " - " + y + " = " + (parseInt(x) - parseInt(y)))
        }
        else if (method == 'multiply') {
            console.log(x + " * " + y + " = " + (parseInt(x) * parseInt(y)))
        }
        else if (method == 'divide') {
            console.log(x + " / " + y + " = " + (parseInt(x) / parseInt(y)))
        }
        else {
            console.log('Error!!! Please enter mathematical functions only.')
        }
    }
    calculator(req.query.x, req.query.y, req.query.method);
    res.render('index', { title: "My calculator Lab 2 - Comp2068" });
});

module.exports = router;
