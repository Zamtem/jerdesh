 
 window.onload = function() {
 }
 
 function updateSales(sales){
  var salesDiv = document.getElementById ("sales");
  for (var i =0; i < sales.length; i++){
      var sale = sales[i];
	  var div = document.createElement("div");
	  div.setAttribute("class","saleItem");
	  div.innerHTML = "<i>" + sale.name + " " + sale.sales + " " + sale.latitude + " " + "</i>gumballs";
	  salesDiv.appendChild(div);
	  
	  }
 
 }
 
