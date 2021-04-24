function cashiersBySurname() {
    let uri = "/cashiers";
    console.log(uri);

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table1').innerHTML = buildTableFromJson(data)
        })
        .catch(err => console.log(err));

}

function goodsFromCategory() {
    let id = $('#category-selector').find('option:selected').attr('id').substr(8);

    let uri = "/manager/productsOfCategory/"+id;

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table2').innerHTML = buildTableFromJson(data)
        })
        .catch(err => console.log(err));}

function employeeBySurname(){
    let surname = document.getElementById('surname-input').value;
    alert(surname);
    let uri = "/manager/employee/"+surname;

    fetch(uri).then(response => response.json())
        .then(data => {
            document.getElementById('table3').innerHTML = buildTableFromJson(data)
        })
        .catch(err => console.log(err));
}




function reformatDate(dateStr)
{
    dArr = dateStr.split("-");  // ex input "2010-01-18"
    return dArr[2]+ "-" +dArr[1]+ "-" +dArr[0];
}

function buildTableFromJson(data){
    let html = '<table class="table table-striped">';
    html += '<tr>';
    let flag = 0;
    $.each(data[0], function(index, value){
        html += '<th>'+index+'</th>';
    });
    html += '</tr>';
    $.each(data, function(index, value){
        html += '<tr>';
        $.each(value, function(index2, value2){
            html += '<td>'+value2+'</td>';
        });
        html += '<tr>';
    });
    html += '</table>';
    return html;
}