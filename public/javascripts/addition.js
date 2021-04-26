
function addCategory(){
    let categoryName = document.getElementById('inputCategoryName').value;
    console.log(categoryName);
    let category = {
        category_name: categoryName
    }

    console.log(JSON.stringify(category));

    fetch('http://localhost:8080/manager/category', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type':'application/json',
        },
        body:
            JSON.stringify(category)

    }).then(response => {
        if(response.status==200)
            alert ("Category was added successfully! ");
        else alert("Addition failed")
    })
        .catch(err => console.log(err));

}

function addStoreProduct(){
    let categoryName = document.getElementById('inputCategoryName').value;
    console.log(categoryName);
    let category = {
        category_name: categoryName
    }

    fetch('http://localhost:8080/manager/category', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:
            JSON.stringify(category)

    }).then(response => {
        if(response.status==200)
            alert ("Category was added successfully! ");
        else alert("Addition failed")
    })
        .catch(err => console.log(err));

}

