var Module = (function() {
    var brands = [{brand: "extra", price: 1.50},
    {brand: "dublemint", price: 1.20},
    {brand: "trident", price: 1.00},
    {brand: "bubble", price: 2.00}];

    return { addItems: function(n) {
        var formerItems = document.getElementById("items").innerHTML
        var formerQuantity = Number(formerItems)
        var formerBrand = document.getElementById("detail").innerHTML
        var nowBrand=brands[n].brand
        document.getElementById("items").innerHTML = formerQuantity + 1
        document.getElementById("detail").innerHTML = formerBrand + ' ' + nowBrand
    },

        addPrice: function(n) {
        var formerPrice = Number(document.getElementById("total").innerHTML)
        var itemPrice = brands[n].price
        var newPrice = formerPrice + itemPrice
        document.getElementById("total").innerHTML = newPrice
    },

        clear: function() {
          var x = 0
          document.getElementById("items").innerHTML = 0
          document.getElementById("total").innerHTML = 0
          document.getElementById("detail").innerHTML = ""
        }
    };
})();

document.getElementById("extra").addEventListener("click",function(){
  Module.addItems(0)
  Module.addPrice(0)});
document.getElementById("dublemint").addEventListener("click",function(){
  Module.addItems(1)
  Module.addPrice(1)});
document.getElementById("trident").addEventListener("click",function(){
  Module.addItems(2)
  Module.addPrice(2)});
document.getElementById("bubble").addEventListener("click",function(){
  Module.addItems(3)
  Module.addPrice(3)});
document.getElementById("clear").addEventListener("click",function(){
  Module.clear()});
