let express = require('express');
let router = express.Router();

const fetch = require('node-fetch');

const cookieParser = require('cookie-parser');
router.use(cookieParser());


router.post("/category", function (req,res) {

    console.log(JSON.stringify(req.body));
    fetch('http://localhost:8080/manager/category', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type':'application/json',
            Authorization: req.cookies.auth
        },
        body:JSON.stringify(req.body)

    }).then(response => {
        console.log(response)
        if(response.status==200)
            res.send ("Category was added successfully! ");
        else res.send("Addition failed")
    })
        .catch(err => console.log(err));

})

module.exports = router;