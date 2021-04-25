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

router.get("/getCategories",function (req,res){
    fetch('http://localhost:8080/cashier/categories', {
        method: 'GET',
        headers: {
            Authorization: req.cookies.auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

router.get("/productsFromCategory/:num", function(req,res){
    fetch('http://localhost:8080/cashier/productsFromCategory/'+req.params.num, {
        method: 'GET',
        headers: {
            Authorization: req.cookies.auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})
router.get("/productsFromCategory", function(req,res){
    fetch('http://localhost:8080/cashier/products', {
        method: 'GET',
        headers: {
            Authorization: req.cookies.auth
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

router.get("/info", function(req,res){
    fetch('http://localhost:8080/cashier/', {
        method: 'GET',
        headers: {
            Authorization: req.cookies.auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

router.get("/productsInReceipt/:checkN",function (req,res){
    let auth = req.cookies.auth;
    fetch('http://localhost:8080/cashier/productsInReceipt/'+req.params.checkN, {
        method: 'GET',
        headers: {
            Authorization: auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

router.get("/priceAndQuantityByUpc/:upc",function (req,res){
    let auth = req.cookies.auth;
    fetch('http://localhost:8080/cashier/priceAndQuantityByUpc/'+req.params.upc, {
        method: 'GET',
        headers: {
            Authorization: auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

router.get('/checkProdInfo/:check', function (req,res){
    let auth = req.cookies.auth;
    fetch('http://localhost:8080/cashier/sales/'+req.params.check, {
        method: 'GET',
        headers: {
            Authorization: auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})

router.post("/check", function (req, res){
        let card ;
        if(req.body.card_number=="")
            card ={}
        else card = {card_number: req.body.card_number}
        let prods = req.body.products;

    fetch('http://localhost:8080/cashier/receipt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: req.cookies.auth
            },
            body: JSON.stringify(card) }).then(response =>
                     response.json())
            .then(data => {
                if(data.status==500) {
                    res.send("It seems this client does not exist!")
                    return;
                }

                    for (let i = 0; i < prods.length; i++)
                        prods[i].check_number = data.check_number;


                    fetch('http://localhost:8080/cashier/goods', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: req.cookies.auth
                        },
                        body: JSON.stringify(prods)}).then(response => response.json())
                        .then(data2 => {
                            res.send("Your check was created successfully! Номер чеку: "+ data.check_number )
                        });
           })
            .catch(err => console.log(err));
}

)


module.exports = router;