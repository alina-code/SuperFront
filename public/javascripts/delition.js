function deleteCategory(category_id){
    alert('delete category '+category_id);
    let uri = "/categories/delete/"+category_id;

    fetch(uri).then(response => response.json())
        .then(data => {
            if(data==1){
                alert('Delition was sucessful');
                document.getElementById(category_id).remove();
            }
            else{alert('Delition failed');}
            document.getElementById('table1').innerHTML = buildTableFromJson(data);
        })
        .catch(err => console.log(err));

}

function addCategory(){
    alert('add category');
}