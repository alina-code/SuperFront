router.delete("/categories/delete/:category_id",function (req,res){
    let auth = req.cookies.auth;
    console.log(req.params.from);
    fetch('http://localhost:8080/manager/category/'+req.params.category_id, {
        method: 'DELETE',
        headers: {
            Authorization: auth
        }}).then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err));
})