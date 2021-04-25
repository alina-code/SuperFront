function addCategory(){
    let uri = "/add/category";

    fetch(uri).then(response => response.text())
        .then(data=> {
            alert(data);
        }).catch(err => console.log(err));

}