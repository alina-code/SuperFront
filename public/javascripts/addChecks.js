let goods =[];
let goodsLong =[];

function sendForm() {
 if(goods.length==0 ) {
     alert("Please add some goods to check!");
     return;
 }
let card = document.getElementById('inputCardNumber').value;
let data = {card_number: card,
            products: goods}
fetch("/cashier/check",{
    method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    body: JSON.stringify(data)}
    ).then(res=>res.text())
     .then(data => {
    alert(data)
    })
    .catch((err)=>console.log(err))

    goods = [];
    goodsLong = []
    document.getElementById("purchases").innerHTML=buildTableFromJson(goodsLong)

}

function addProductToCheck() {
    let option =  $('#storeProductSelect').find('option:selected');
    let amount  = parseInt(document.getElementById('productsCount').value);
    if(amount > productsAvailable() || totalAmount(option.attr('id'), amount) >productsAvailable()) {
        alert("Введена кількість товару перевищує його наявність!")
        return;
    }

        goodsLong.push({
            upc: option.attr('id'),
            product_name: option.attr('name'),
            product_number: amount,
        })
        document.getElementById("purchases").innerHTML=buildTableFromJson(goodsLong)

        for(let i = 0; i<goods.length; i++) {
            if (goods[i].upc == option.attr('id')) {
                goods[i].product_number += amount
                return;
            }
        }
        goods.push({upc: option.attr('id'),
                    product_number: amount});

        console.log(goods);


}


function totalAmount(upc, int) {
    let sum=int;
    for(let i = 0; i<goods.length; i++){
        if(goods[i].upc == (upc))
        sum+=goods[i].product_number
    }
return sum;
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





$(document).ready(function () {
    $('#clientCardInput').hide();

    $('#exampleCheck1').change(function () {
        if (!this.checked)
            $('#clientCardInput').hide();
        else
            $('#clientCardInput').show();
    });
});




function productsAvailable(){
    return parseInt($('#storeProductSelect').find('option:selected').attr('count'));
}
window.onload = function(){
    document.getElementById("addStoreProductDiv").style.display='none';
};
function openAddProduct() {
    document.getElementById("addStoreProductDiv").style.display='block';
    $('#openAddProductButton').hide();
}
