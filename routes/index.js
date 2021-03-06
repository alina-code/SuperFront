let express = require('express');
let router = express.Router();

const fetch = require('node-fetch');

const cookieParser = require('cookie-parser');
router.use(cookieParser());


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Zlagoda' });
});


router.post('/login', function(req, res, next) {

  let tok = req.body.phone + ':' + req.body.password;
  let hash = Buffer.from(tok).toString('base64');
  let auth =  "Basic " + hash;

  fetch('http://localhost:8080/authorize', {
    method: 'GET',
    headers: {
      Authorization: auth
    }}).then(response => response.json())
      .then(data => {
        if(typeof data[0] === "undefined")
          res.redirect("/");

        else {
          res.cookie('role', data[0].authority)
          res.cookie('auth', auth);
          res.render('index', {title: 'Zlagoda', role: data[0].authority});
        }
      })
      .catch(err => console.log(err));


});



router.get('/cashier-queries', function(req, res, next) {

  res.render('cashierQueriesPage', { title: 'Zlagoda'});
});

router.get('/categories', function(req, res, next) {
  let auth = req.cookies.auth;
  fetch('http://localhost:8080/manager/categories',{
    method: 'GET',
    headers: {
        Authorization: auth
    }}).then(response => response.json())
      .then(data => {
        console.log(data);
        res.render('categoriesPage', { title: 'Zlagoda', categories: data});
      })
      .catch(err => console.log(err));
});

router.get('/checks', function(req, res, next) {

  fetch('http://localhost:8080/manager/checks',{
    method: 'GET',
    headers: {
      Authorization: req.cookies.auth
    }}).then(response => response.json())
      .then(data => {
        res.render('checksPage', { title: 'Zlagoda', checks: data});
      })
      .catch(err => console.log(err));



});
router.get('/checksCashier', function(req, res, next) {

  fetch('http://localhost:8080/cashier/checks',{
    method: 'GET',
    headers: {
      Authorization: req.cookies.auth
    }}).then(response => response.json())
      .then(data => {
        res.render('checksCashierPage', { title: 'Zlagoda', checks: data});
      })
      .catch(err => console.log(err));



});

router.get('/clients', function(req, res, next) {
  let auth = req.cookies.auth;
  fetch('http://localhost:8080/manager/clients',{
    method: 'GET',
    headers: {
      Authorization: auth
    }}).then(response => response.json())
      .then(data => {
        res.render('clientsPage', { title: 'Zlagoda', clients: data});
      })
      .catch(err => console.log(err));
});

router.get('/manager-queries', function(req, res, next) {
  // get product data

  res.render('managerQueriesPage', { title: 'Zlagoda'});
});

router.get('/addCheck', function(req, res, next) {

  let auth = req.cookies.auth;
  fetch('http://localhost:8080/cashier/storeProducts',{
    method: 'GET',
    headers: {
        Authorization: auth
    }}).then(response => response.json())
      .then(data => {
        res.render('addCheck', { title: 'Zlagoda', products: data});

      })
      .catch(err => console.log(err));



});

router.get('/products', function(req, res, next) {

  let auth = req.cookies.auth;
  fetch('http://localhost:8080/manager/products',{
    method: 'GET',
    headers: {
       Authorization: auth
    }}).then(response => response.json())
      .then(data => {
        res.render('productsPage', { title: 'Zlagoda', products: data});
      })
      .catch(err => console.log(err));
});

router.get('/store-products', function(req, res, next) {
  fetch('http://localhost:8080/manager/storeProducts',{
    method: 'GET',
    headers: {
      Authorization: req.cookies.auth
    }}).then(response => response.json())
      .then(data => {
        let data2 = data;
        res.render('storeProductPage', { title: 'Zlagoda', store_products: data});

      })
      .catch(err => console.log(err));

});



router.get('/employ', function(req, res, next) {
  let auth = req.cookies.auth;
  fetch('http://localhost:8080/manager/employees',{
    method: 'GET',
    headers: {
      Authorization: auth
    }}).then(response => response.json())
      .then(data => {
        res.render('employPage', { title: 'Zlagoda', employees: data});

      })
      .catch(err => console.log(err));
});



module.exports = router;
