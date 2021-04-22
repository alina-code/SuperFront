let express = require('express');
let router = express.Router();

const fetch = require('node-fetch');

const cookieParser = require('cookie-parser');
router.use(cookieParser());

router.get("/receiptPrintByMe/:from/:to",function (req,res){
    let auth = req.cookies.auth;
    console.log(req.params.from);
    fetch('http://localhost:8080/cashier/receiptPrintByMe/'+req.params.from+"/"+req.params.to, {
        method: 'GET',
        headers: {
            Authorization: auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));

})

router.get("/checkInfo/:checkN",function (req,res){
    let auth = req.cookies.auth;
    fetch('http://localhost:8080/cashier/receipt/'+req.params.checkN, {
        method: 'GET',
        headers: {
            Authorization: auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})
router.get("/clientInfo/:surname",function (req,res){
    let auth = req.cookies.auth;
    fetch('http://localhost:8080/cashier/client/'+req.params.surname, {
        method: 'GET',
        headers: {
            Authorization: auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

router.get("/clientsWithDiscount/:discount",function (req,res){
    let auth = req.cookies.auth;
    fetch('http://localhost:8080/cashier/client/discount/'+req.params.discount, {
        method: 'GET',
        headers: {
            Authorization: auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})
module.exports = router;