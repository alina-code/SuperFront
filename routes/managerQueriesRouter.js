let express = require('express');
let router = express.Router();

const fetch = require('node-fetch');

const cookieParser = require('cookie-parser');
router.use(cookieParser());

router.get("/cashiers",function (req,res){
    let auth = req.cookies.auth;
    fetch('http://localhost:8080/manager/cashiers', {
        method: 'GET',
        headers: {
            Authorization: auth
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
            Authorization: req.cookies.auth
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
            Authorization: req.cookies.auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
            alert(data);
        })
        .catch(err => console.log(err));
})

router.get("/products", function(req,res){
    fetch('http://localhost:8080/manager/products', {
        method: 'GET',
        headers: {
            Authorization: req.cookies.auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
            alert(data);
        })
        .catch(err => console.log(err));
})

router.get("/categories", function(req,res){
    fetch('http://localhost:8080/manager/categories', {
        method: 'GET',
        headers: {
            Authorization: req.cookies.auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
            alert(data);
        })
        .catch(err => console.log(err));
})

router.get("/store-products/:id", function(req,res){
    fetch('http://localhost:8080/manager/storeProducts/'+req.params.id, {
        method: 'GET',
        headers: {
            Authorization: req.cookies.auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

router.get("/price-and-quantity-by-upc/:upc",function (req,res){
    let auth = req.cookies.auth;
    fetch('http://localhost:8080/manager/productByUpc/'+req.params.upc, {
        method: 'GET',
        headers: {
            Authorization: auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

router.get("/promotionalProducts/:sortBy", function(req,res){
    fetch('http://localhost:8080/cashier/promotionalProducts/'+req.params.sortBy, {
        method: 'GET',
        headers: {
            Authorization: req.cookies.auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

router.get("/notPromotionalProducts/:sortBy", function(req,res){
    fetch('http://localhost:8080/cashier/notPromotionalProducts/'+req.params.sortBy, {
        method: 'GET',
        headers: {
            Authorization: req.cookies.auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

router.get("/receipt/:id/:from/:to",function (req,res){
    let auth = req.cookies.auth;
    fetch('http://localhost:8080/manager/receiptPrintByCashier/'+req.params.id+"/"+req.params.from+"/"+req.params.to, {
        method: 'GET',
        headers: {
            Authorization: auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

router.get("/receipt/:from/:to",function (req,res){
    let auth = req.cookies.auth;
    fetch('http://localhost:8080/manager/receipt/'+req.params.from+"/"+req.params.to, {
        method: 'GET',
        headers: {
            Authorization: auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

router.get("/receipt/numberOf/:id/:from/:to",function (req,res){
    let auth = req.cookies.auth;
    fetch('http://localhost:8080/manager/receipt/numberOf/'+req.params.id+"/"+req.params.from+"/"+req.params.to, {
        method: 'GET',
        headers: {
            Authorization: auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

router.get("/clients",function (req,res){
    let auth = req.cookies.auth;
    fetch('http://localhost:8080/manager/clients', {
        method: 'GET',
        headers: {
            Authorization: auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

router.get("/clients/:percent",function (req,res){
    let auth = req.cookies.auth;
    fetch('http://localhost:8080/manager/clients/'+req.params.percent, {
        method: 'GET',
        headers: {
            //Authorization: auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

router.get("/productByUpc/:upc",function (req,res){
    let auth = req.cookies.auth;
    fetch('http://localhost:8080/manager/productByUpc/'+req.params.upc, {
        method: 'GET',
        headers: {
            //Authorization: auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

//functions to get data for selectors

router.get("/getCategories",function (req,res){
    fetch('http://localhost:8080/manager/categories', {
        method: 'GET',
        headers: {
            Authorization: req.cookies.auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

router.get("/getProducts",function (req,res){
    fetch('http://localhost:8080/manager/products', {
        method: 'GET',
        headers: {
            Authorization: req.cookies.auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

router.get("/getCashiers",function (req,res){
    fetch('http://localhost:8080/manager/cashiers', {
        method: 'GET',
        headers: {
            Authorization: req.cookies.auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

module.exports = router;