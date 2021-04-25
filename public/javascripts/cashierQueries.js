
function myChecks(){
    let from = reformatDate(document.getElementById('date1from').value);
    let to = reformatDate(document.getElementById('date1to').value);


      let uri = "/cashier/receiptPrintByMe/"+from+"/"+to;

      fetch(uri).then(response => response.json())
          .then(data => {
              document.getElementById('table1').innerHTML = buildTableFromJson(data);
          })
          .catch(err => console.log(err));

}
function checkInfo() {
    let checkNumber = document.getElementById('check-number-selector').value;

    let uri = "/cashier/checkInfo/"+checkNumber;
    console.log(uri);

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table2').innerHTML = buildTableFromJson(data)
        })
        .catch(err => console.log(err));

}

function clientInfo() {
    let surname = document.getElementById('client-surname-selector').value;

    let uri = "/cashier/clientInfo/"+surname;
    console.log(uri);

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table3').innerHTML = buildTableFromJson(data)
        })
        .catch(err => console.log(err));

}

function clientWithDiscountInfo(){
    let discount = document.getElementById('client-discount-selector').value;

    let uri = "/cashier/clientsWithDiscount/"+discount;
    console.log(uri);

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table4').innerHTML = buildTableFromJson(data)
        })
        .catch(err => console.log(err));
}

function findCategories() {
    let select = document.getElementById('category-selector')
    select.innerHTML=""
    fetch("/cashier/getCategories").then(response => response.json())
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

function goodsFromCategory() {
    let category = document.getElementById('category-selector').value
    let id = $('#category-selector').find('option:selected').attr('id').substr(8);

    let uri = "/cashier/productsFromCategory/"+id;

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table5').innerHTML = buildTableFromJson(data)
        })
        .catch(err => console.log(err));}

function goods() {
    let uri = "/cashier/productsFromCategory/";

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table6').innerHTML = buildTableFromJson(data)
        })
        .catch(err => console.log(err));}

function promgoods() {
    let sortBy = document.getElementById('sortby-selector').value;
    //let sortBy = $('#sortby-selector').find('option:selected').attr('sortBy').substr(8);
    let uri = "/cashier/promotionalProducts/"+sortBy;
    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table7').innerHTML = buildTableFromJson(data)
        })
        .catch(err => console.log(err));}

function notpromgoods() {
    let sortBy = document.getElementById('sortby-not-selector').value;
    //let sortBy = $('#sortby-selector').find('option:selected').attr('sortBy').substr(8);
    let uri = "/cashier/notPromotionalProducts/"+sortBy;
    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table8').innerHTML = buildTableFromJson(data)
        })
        .catch(err => console.log(err));}

// возвращает куки с указанным name,
// или undefined, если ничего не найдено
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
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

function checkProductsInfo() {
    let checkNumber = document.getElementById('check-number-selector-2').value;

    let uri = "/cashier/productsInReceipt/"+checkNumber;
    console.log(uri);

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table9').innerHTML = buildTableFromJson(data)
        })
        .catch(err => console.log(err));

}

function productByUpc() {
    let upc = document.getElementById('upc-selector').value;

    let uri = "/cashier/priceAndQuantityByUpc/"+upc;
    console.log(uri);

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('selling-price').innerHTML = data.selling_price;
            document.getElementById('items-available').innerHTML = data.products_number;
            document.getElementById('table11').style.visibility = 'visible';
        })
        .catch(err => console.log(err));

}