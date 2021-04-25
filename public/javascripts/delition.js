function deleteCategory(category_id){
    let uri = "/delete/category/"+category_id;

    fetch(uri).then(response => response.text())
        .then(data=> {
            alert(data);
            document.getElementById(category_id).remove();
        }).catch(err => console.log(err));

}

function deleteProduct(product_id){
    let uri = "/delete/product/"+product_id;

    fetch(uri).then(response => response.text())
        .then(data=> {
        alert(data);
    }).catch(err => console.log(err));
}

function deleteStoreProduct(s_product_id){
    let uri = "/delete/storeProduct/"+s_product_id;
    fetch(uri).then(function(response) {
        console.log(response); // returns 200
        alert(response);
        });

    /*const response = fetch(uri);
    alert(response.ok);
    console.log(response.ok);*/
    /*fetch(uri).then(response => response.json())
        .then(data => {
            console.log(data);
            if(data==1){
                alert('Delition was sucessful');
                document.getElementById(s_product_id).remove();
            }
            else{
                console.log(data);
                alert('Delition failed.');}
        })
        .catch(err => console.log(err));*/
}
