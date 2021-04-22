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

        console.log(data)
        res.cookie('role',data[0].authority )
        res.cookie('auth', auth);
        res.render('index', { title: 'Zlagoda', role: data[0].authority});
      })
      .catch(err => console.log(err));


});



router.get('/cashier-queries', function(req, res, next) {

  res.render('cashierQueriesPage', { title: 'Zlagoda'});
});

router.get('/cashier', function(req, res, next) {
  res.render('cashierQueryPage', { title: 'Zlagoda'});
});

router.get('/categories', function(req, res, next) {
  let categories = [{category_number: "1", category_name:"category1"},{category_number: "2", category_name:"category2"},{category_number: "3", category_name:"category3"}];

  res.render('categoriesPage', { title: 'Zlagoda', categories:categories});
});

router.get('/checks', function(req, res, next) {
  let checks = [{check_number:"1", id_employee:"1", card_number:"1", print_date:"17-04-2021", total_sum:"100", vat:"12"},
    {check_number:"2", id_employee:"3", card_number:"4", print_date:"12-04-2021", total_sum:"109", vat:"52"}];

  res.render('checksPage', { title: 'Zlagoda', checks:checks});
});

router.get('/clients', function(req, res, next) {
  let clients = [{card_number:"1", cust_surname:"Nemyria", cust_name:"Nastia", cust_patronymic: "Maksymivna", phone_number: "0978856643", city: "Kyiv", zip_code: "3456", discount:"10"},
    {card_number:"2", cust_surname:"Markova", cust_name:"Julia", cust_patronymic: "Andriivna", phone_number: "0979879640", city: "Kyiv", zip_code: "0956", discount:"10"}];

  res.render('clientsPage', { title: 'Zlagoda', clients:clients});
});

router.get('/manager-queries', function(req, res, next) {
  // get product data

  res.render('managerQueriesPage', { title: 'Zlagoda'});
});

router.get('/products', function(req, res, next) {

  let auth = req.cookies.auth;
  fetch('http://localhost:8080/cashier/products',{
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

  let auth = req.cookies.auth;
  fetch('http://localhost:8080/cashier/storeProduct',{
    method: 'GET',
    headers: {
      Authorization: auth
    }}).then(response => response.json())
      .then(data => {
        res.render('storeProductPage', { title: 'Zlagoda', store_products: data});

      })
      .catch(err => console.log(err));

});

router.get('/employ', function(req, res, next) {
  let auth = req.cookies.auth;
  fetch('http://localhost:8080/manager/employee',{
    method: 'GET',
    headers: {
      Authorization: auth
    }}).then(response => response.json())
      .then(data => {
        res.render('employPage', { title: 'Zlagoda', employees: data});

      })
      .catch(err => console.log(err));
});


/*router.get('/kek', function(req, res, next) {
  // get product data
  let product = [{name: "1", price: "1"}, {name: "1", price: "1"},{name: "1", price: "1"},]
let products = [{id_product: "1", category_number: "1", product_name:"chocolate", characteristics:"tasty chocolate"},
    {id_product: "2", category_number: "5", product_name:"ice cream", characteristics:"tasty icecream"},
    {id_product: "3", category_number: "4", product_name:"coffee", characteristics:"tasty coffee"}];



  res.render('kek', {products: product});
});*/
/*router.get('/error', function(req, res, next) {
  // get product data

  res.render('error', { message: 'Error'});
});*/

module.exports = router;
