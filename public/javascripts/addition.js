
function addCategory(){
    let categoryName = document.getElementById('inputCategoryName').value;
    console.log(categoryName);
    let category = {
        category_name: categoryName
    }

    console.log(JSON.stringify(category));

    fetch('/add/category', {
        method: 'POST',
       // mode: 'no-cors',
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
