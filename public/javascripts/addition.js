
function addCategory(){
    let categoryName = document.getElementById('inputCategoryName').value;
    let category = {
        category_name: categoryName
    }

    console.log(JSON.stringify(category));

    fetch('/add/category', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body:
            JSON.stringify(category)

    }).then(response => response.text())
        .then(data=>alert(data))
        .catch(err => console.log(err));

}

function addStoreProduct(){

    let upc = document.getElementById('inputStoreProductUpc').value;
    let id_product = $('#selectProductId').find('option:selected').attr('id').substr(7);
    let selling_price = document.getElementById('inputStoreProductPrice').value;
    let products_number = document.getElementById('inputStoreProductsNumber').value;
    let promotional_product = document.getElementById('selectProm').value;
    let store_product = {
        upc : upc,
        id_product : id_product,
        selling_price : selling_price,
        products_number : products_number,
        promotional_product : promotional_product
    }

    fetch('/add/storeProduct', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:
            JSON.stringify(store_product)

    }).then(response => response.text())
        .then(data=>alert(data))
        .catch(err => console.log(err))


}

function loadStoreProductAddition(form_id, opt_id){
    let select = document.getElementById(opt_id);
    select.innerHTML=""
    fetch("/manager/getProducts").then(response => response.json())
        .then(data => {
            for(let i=0; i<data.length; i++){
                let opt = document.createElement('option');
                opt.value =  data[i].product_name;
                opt.innerHTML =  data[i].id_product +", "+data[i].product_name;
                opt.id = "product"+data[i].id_product;
                select.appendChild(opt);
            }
        })
        .catch(err => console.log(err));

    document.getElementById(form_id).style.display = 'block';

}

function hideForm(id){
    document.getElementById(id).style.display = 'none';
}

function deleteCategory(category_id){
    let uri = "/delete/category/"+category_id;

    fetch(uri).then(response => response.text())
        .then(data=> {
            alert(data);
            if (data == "Category was deleted successfully! ") document.getElementById(category_id).remove();
        }).catch(err => console.log(err));

}
function deleteStoreProduct(s_product_id){
    let uri = "/delete/storeProduct/"+s_product_id;
    fetch(uri).then(response => response.text())
        .then(data=> {
            alert(data);
            if (data == "Product was deleted successfully! ") document.getElementById(category_id).remove();
        }).catch(err => console.log(err));
    alert('Delition was sucessful');
    document.getElementById(s_product_id).remove();
}