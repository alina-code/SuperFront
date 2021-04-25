function cashiersBySurname() {
    let uri = "/manager/cashiers";
    console.log(uri);

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table1').innerHTML = buildTableFromJson(data)
        })
        .catch(err => console.log(err));

}

function goodsFromCategory2() {
    let id = $('#category-selector').find('option:selected').attr('id').substr(8);

    let uri = "/manager/productsOfCategory/"+id;

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table2').innerHTML = buildTableFromJson(data)
        })
        .catch(err => console.log(err));}

function employeeBySurname(){
    let surname = document.getElementById('surname-input').value;
    let uri = "/manager/employee/"+surname;

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table3').innerHTML = buildTableFromJson(data)
        })
        .catch(err => console.log(err));
}

function productsSorted(){
    let uri = "/manager/products";

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table6').innerHTML = buildTableFromJson(data)
        })
        .catch(err => console.log(err));
}

function goodsFromCategoryNotSorted() {
    let id = $('#category-selector-2').find('option:selected').attr('id').substr(8);

    let uri = "/manager/productsOfCategory/"+id;

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table8').innerHTML = buildTableFromJson(data)
        })
        .catch(err => console.log(err));}

function categoriesSorted(){
    let uri = "/manager/categories";

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table7').innerHTML = buildTableFromJson(data)
        })
        .catch(err => console.log(err));
}

function storeProductsOfProduct() {
    let id = $('#product-selector').find('option:selected').attr('id').substr(7);
    let uri = "/manager/store-products/"+id;

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table9').innerHTML = buildTableFromJson(data)
        })
        .catch(err => console.log(err));}

function productByUpc() {
    let upc = document.getElementById('upc-selector').value;

    let uri = "manager/price-and-quantity-by-upc/"+upc;
    console.log(uri);

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('selling-price').innerHTML = data.selling_price;
            document.getElementById('items-available').innerHTML = data.products_number;
            document.getElementById('table11').style.visibility = 'visible';
        })
        .catch(err => console.log(err));

}

function promgoods2() {
    let sortBy = document.getElementById('sortby-selector').value;
    let uri = "/manager/promotionalProducts/"+sortBy;
    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table12').innerHTML = buildTableFromJson(data)
        })
        .catch(err => console.log(err));}

function notpromgoods(){
    let sortBy = document.getElementById('sortby-not-selector').value;
    let uri = "/manager/notPromotionalProducts/"+sortBy;
    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table13').innerHTML = buildTableFromJson(data)
        })
        .catch(err => console.log(err));}

function cashierChecks(){
    let id = $('#cashier-selector').find('option:selected').attr('id').substr(7);
    let from = reformatDate(document.getElementById('date1from').value);
    let to = reformatDate(document.getElementById('date1to').value);

    let uri = "/manager/receipt/"+id+"/"+from+"/"+to;

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table22').innerHTML = buildTableFromJson(data);
        })
        .catch(err => console.log(err));
}

function allCashiersChecks(){
    let from = reformatDate(document.getElementById('date1from2').value);
    let to = reformatDate(document.getElementById('date1to2').value);

    let uri = "/manager/receipt/"+from+"/"+to;

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table23').innerHTML = buildTableFromJson(data);
        })
        .catch(err => console.log(err));
}

function soldItemsOfProduct(){
    let id = $('#product-selector-2').find('option:selected').attr('id').substr(7);
    let from = reformatDate(document.getElementById('date1from3').value);
    let to = reformatDate(document.getElementById('date1to3').value);

    let uri = "/manager/receipt/numberOf/"+id+"/"+from+"/"+to;

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table24').innerHTML = buildTableFromJson(data);
        })
        .catch(err => console.log(err));
}

function allClients(){
    let uri = "/manager/clients/";

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table25').innerHTML = buildCustomTableFromJson(data);
        })
        .catch(err => console.log(err));
}

function clientsByPercent(){
    let percent = document.getElementById('percent-input').value;
    let uri = "/manager/clients/"+percent;

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table26').innerHTML = buildCustomTableFromJson(data);
        })
        .catch(err => console.log(err));
}

function productByUpc2() {
    let upc = document.getElementById('upc-selector-2').value;

    let uri = "manager/productByUpc/"+upc;
    console.log(uri);

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('selling-price-2').innerHTML = data.selling_price;
            document.getElementById('items-available-2').innerHTML = data.products_number;
            document.getElementById('product-name-2').innerHTML = data.product_name;
            document.getElementById('characteristics-2').innerHTML = data.characteristics;
            document.getElementById('table27').style.visibility = 'visible';
        })
        .catch(err => console.log(err));
}

//functions to get data for selectors
function findCategories(id) {
    let select = document.getElementById(id)
    select.innerHTML=""
    fetch("/manager/getCategories").then(response => response.json())
        .then(data => {

            for(let i=0; i<data.length; i++){
                let category = data[i].category_name;
                let opt = document.createElement('option');
                opt.value =  data[i].category_name;
                opt.innerHTML =  data[i].category_name;
                opt.id = "category"+data[i].category_number;
                select.appendChild(opt);
            }
        })
        .catch(err => console.log(err));

}

function findProducts(id) {
    let select = document.getElementById(id)
    select.innerHTML=""
    fetch("/manager/getProducts").then(response => response.json())
        .then(data => {

            for(let i=0; i<data.length; i++){
                let product = data[i].product_name;
                let opt = document.createElement('option');
                opt.value =  data[i].product_name;
                opt.innerHTML =  data[i].product_name;
                opt.id = "product"+data[i].id_product;
                select.appendChild(opt);
            }
        })
        .catch(err => console.log(err));

}

function findCashiers(id) {
    let select = document.getElementById(id)
    select.innerHTML=""
    fetch("/manager/getCashiers").then(response => response.json())
        .then(data => {

            for(let i=0; i<data.length; i++){
                let cashier = data[i].empl_surname;
                let opt = document.createElement('option');
                opt.value =  data[i].empl_surname;
                opt.innerHTML =  data[i].empl_surname;
                opt.id = "cashier"+data[i].id_employee;
                select.appendChild(opt);
            }
        })
        .catch(err => console.log(err));

}




function reformatDate(dateStr)
{
    dArr = dateStr.split("-");  // ex input "2010-01-18"
    return dArr[2]+ "-" +dArr[1]+ "-" +dArr[0];
}

function buildTableFromJson(data){
    let html = '<table class="table table-striped">';
    html += '<tr>';
    let flag = 0;
    $.each(data[0], function(index, value){
        html += '<th>'+index+'</th>';
    });
    html += '</tr>';
    $.each(data, function(index, value){
        html += '<tr>';
        $.each(value, function(index2, value2){
            html += '<td>'+value2+'</td>';
        });
        html += '<tr>';
    });
    html += '</table>';
    return html;
}

function buildCustomTableFromJson(data){
    let html = '<table class="table table-striped">';
    html += '<tr>';

    html += '<th>'+'Full Name'+'</th>';
    html += '<th>'+'Phone'+'</th>';
    html += '<th>'+'Address'+'</th>';

    html += '</tr>';

    $.each(data, function(index, value){
        html += '<tr>';

        html += '<td>'+value.cust_surname+" "+value.cust_name+" "+value.cust_patronymic+'</td>';
        html += '<td>'+value.phone_number+'</td>';
        if(value[5] != '<null>') {html += '<td>'+value.city+", "+value.street+", "+value.zip_code+'</td>';}
        else {html += '<td>'+"-"+'</td>';}
        html += '<tr>';
    });
    html += '</table>';
    return html;
}