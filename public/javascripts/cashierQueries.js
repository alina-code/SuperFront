
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