let express = require('express');
let router = express.Router();

const fetch = require('node-fetch');

const cookieParser = require('cookie-parser');
router.use(cookieParser());

router.get("/category/:category_id",function (req,res){
    let auth = req.cookies.auth;

    fetch('http://localhost:8080/manager/category/'+req.params.category_id, {
        method: 'DELETE',
        headers: {
            Authorization: auth
        }}).then(response => {
        if(response.status==200)
            res.send("Category was deleted successfully! ");
        else res.send("Deletion failed: there are products of this category.\nDelete them first")
    })
        .catch(err => console.log(err));
})

router.get("/product/:product_id",function (req,res){
    let auth = req.cookies.auth;

    fetch('http://localhost:8080/manager/product/'+req.params.product_id, {
        method: 'DELETE',
        headers: {
            //Authorization: auth
        }}).then(response => {
        if(response.status==200)
            res.send("Product was deleted successfully! ");
        else res.send("Deletion failed: there are store products of this kind.\nDelete them first")})
        .catch(err => console.log(err));
})

router.get("/storeProduct/:s_product_id",function (req,res){
    let auth = req.cookies.auth;

    fetch('http://localhost:8080/manager/storeProduct/'+req.params.s_product_id, {
        method: 'DELETE',
        headers: {
            //Authorization: auth
        }}).then(response => {
        if(response.status==200)
            res.send("Store product was deleted successfully! ");
        else res.send("Deletion failed: there are store products of this kind.\nDelete them first")})
            .catch(err => console.log(err));
})

router.get("/receipt/:check_id",function (req,res){
    let auth = req.cookies.auth;

    fetch('http://localhost:8080/manager/receipt/'+req.params.check_id, {
        method: 'DELETE',
        headers: {
            Authorization: auth
        }}).then(response => {
        if(response.status==200)
            res.send("Check was deleted successfully! ");
        else res.send("Deletion failed: database integrity violated.\nDelete related entities first")})
        .catch(err => console.log(err));
})

router.get("/customerCard/:client_id",function (req,res){
    let auth = req.cookies.auth;

    fetch('http://localhost:8080/manager/customerCard/'+req.params.client_id, {
        method: 'DELETE',
        headers: {
            //Authorization: auth
        }}).then(response => {
        if(response.status==200)
            res.send("Customer was deleted successfully! ");
        else res.send("Deletion failed: database integrity violated.\nDelete related entities first.")})
        .catch(err => console.log(err));
})

router.get("/employee/:employee_id",function (req,res){
    let auth = req.cookies.auth;

    fetch('http://localhost:8080/manager/employee/'+req.params.employee_id, {
        method: 'DELETE',
        headers: {
            //Authorization: auth
        }}).then(response => {
        if(response.status==200)
            res.send("Employee was deleted successfully! ");
        else res.send("Deletion failed: database integrity violated.\nDelete related entities first")})
        .catch(err => console.log(err));
})

module.exports = router;