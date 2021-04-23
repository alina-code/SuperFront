let express = require('express');
let router = express.Router();

const fetch = require('node-fetch');

const cookieParser = require('cookie-parser');
router.use(cookieParser());

router.get("/cashiers",function (req,res){
    let auth = req.cookies.auth;
    fetch('http://localhost:8080/manager/cashiers'+req.params.upc, {
        method: 'GET',
        headers: {
            //Authorization: auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

router.get("/productsOfCategory/:num", function(req,res){
    fetch('http://localhost:8080/manager/productsOfCategory/'+req.params.num, {
        method: 'GET',
        headers: {
            //Authorization: req.cookies.auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

router.get("/employee/:surname", function(req,res){
    fetch('http://localhost:8080/manager/employee/'+req.params.surname, {
        method: 'GET',
        headers: {
            //Authorization: req.cookies.auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

module.exports = router;