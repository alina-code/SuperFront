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
            else res.send("Deletion failed: there are store products of this kind.\nDelete them first")
    })
        .catch(err => console.log(err));
})

router.get("/product/:product_id",function (req,res){
    let auth = req.cookies.auth;

    fetch('http://localhost:8080/manager/product/'+req.params.product_id, {
        method: 'DELETE',
        headers: {
            //Authorization: auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

router.get("/storeProduct/:s_product_id",function (req,res){
    let auth = req.cookies.auth;

    fetch('http://localhost:8080/manager/storeProduct/'+req.params.s_product_id, {
        method: 'DELETE',
        headers: {
            //Authorization: auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

module.exports = router;