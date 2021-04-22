function deleteCategory(category_id){
    let uri = "/categories/delete/"+category_id;

    fetch(uri).then(response => response.json())
        .then(data => {
            if(data==1) alert('Delition was sucessful');
            else alert('Delition failed');
            document.getElementById('table1').innerHTML = buildTableFromJson(data);
        })
        .catch(err => console.log(err));

}