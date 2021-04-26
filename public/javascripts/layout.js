window.addEventListener("load", function(event) {
  if(getCookie('role')=='CASHIER'){
      document.getElementById('managerQueriesPage').hidden=true;
      document.getElementById('productsPage').hidden=true;
      document.getElementById('storeProductsPage').hidden=true;
      document.getElementById('employeesPage').hidden=true;
      document.getElementById('categoriesPage').hidden=true;
      document.getElementById('clientsPage').hidden = true;
      document.getElementById('checksPage').hidden = true;

  }
  else if(getCookie('role')=='MANAGER'){
      document.getElementById('cashierQueriesPage').hidden = true;
      document.getElementById('addCheckPage').hidden=true;
      document.getElementById('checksCashierPage').hidden=true;
  }


});

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}