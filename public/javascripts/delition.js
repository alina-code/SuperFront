function deleteCategory(category_id){
    let uri = "/delete/category/"+category_id;

    fetch(uri).then(response => response.text())
        .then(data=> {
            alert(data);
            if (data == "Category was deleted successfully! ") document.getElementById(category_id).remove();
        }).catch(err => console.log(err));

}
function deleteProduct(product_id){
    let uri = "/delete/product/"+product_id;

    fetch(uri).then(response => response.text())
        .then(data=> {
            alert(data);
            if (data == "Product was deleted successfully! ") document.getElementById(category_id).remove();
        }).catch(err => console.log(err));
}

function deleteStoreProduct(s_product_id){
    let uri = "/delete/storeProduct/"+s_product_id;
    fetch(uri);
    alert('Delition was sucessful');
    document.getElementById(s_product_id).remove();
}

function deleteCheck(check_id){
    let uri = "/delete/receipt/"+check_id;

    fetch(uri).then(response => response.text())
        .then(data=> {
            alert(data);
            if (data == "Check was deleted successfully! ") document.getElementById(check_id).remove();
        }).catch(err => console.log(err));
}

function deleteClient(client_id){
    let uri = "/delete/customerCard/"+client_id;

    fetch(uri).then(response => response.text())
        .then(data=> {
            alert(data);
            if (data == "Customer was deleted successfully! ") document.getElementById(client_id).remove();
        }).catch(err => console.log(err));
}

function deleteEmployee(employee_id){
    let uri = "/delete/employee/"+employee_id;

    fetch(uri).then(response => response.text())
        .then(data=> {
            alert(data);
            if (data == "Employee was deleted successfully! ") document.getElementById(employee_id).remove();
        }).catch(err => console.log(err));
}
