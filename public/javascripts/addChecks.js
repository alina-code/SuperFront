let goods =[];
let goodsLong =[];

function sendForm() {
let card = document.getElementById('inputCardNumber').value;
let data = {card_number: card,
            products: goods}

goods = [];
fetch("/cashier/check",{
    method: 'POST',
    body: JSON.stringify(data) }
    ).then((res)=>console.log(res))
    .catch((err)=>console.log(err))


}

function addProductToCheck() {
    let option =  $('#storeProductSelect').find('option:selected');
    let amount  = parseInt(document.getElementById('productsCount').value);
    console.log(amount, productsAvailable())
    if(amount > productsAvailable() || totalAmount(option.attr('id'), amount) >productsAvailable())
        alert("Введена кількість товару перевищує його наявність!")
    else {

        goods.push({upc: option.attr('id'),
                    product_number: amount});
        goodsLong.push({
            upc: option.attr('id'),
            product_name: option.attr('name'),
            product_number: amount,
        })
    }
    document.getElementById("purchases").innerHTML=buildTableFromJson(goodsLong)

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
