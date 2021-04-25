let express = require('express');
let router = express.Router();

const fetch = require('node-fetch');

const cookieParser = require('cookie-parser');
router.use(cookieParser());

router.get("/category",function (req,res){
    let auth = req.cookies.auth;
    let categoryName = document.getElementById('inputCategoryName').value;
    console.log(categoryName);
    let category = {
        category_name: categoryName
    }

    fetch('http://localhost:8080/manager/category', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            //Authorization: auth
        },
        body:
            JSON.stringify(category)

    }).then(response => {
        if(response.status==200)
            res.send("Category was added successfully! ");
        else res.send("Addition failed")
    })
        .catch(err => console.log(err));
})

module.exports = router;