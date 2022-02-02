(function (){
'use strict';
angular.module('assignment2',[])
.controller('toBuy',toBuy)
.controller('Bought',Bought)
.service('shoppingListService',shoppingListService)
toBuy.$inject=['shoppingListService'];
function toBuy(shoppingListService){
  var list1=this;
  list1.items=shoppingListService.getToBuyItems();
  list1.buy=function (index){
      shoppingListService.removeItem(index);
  };
}
Bought.$inject=['shoppingListService'];
function Bought(shoppingListService){
  var list2=this;
  list2.items=shoppingListService.getBoughtItems();
}
function shoppingListService(){
  var service=this;
  var toBuy=[{name:"cookies",quantity:10},{name:"pepsi",quantity:5},{name:"potato chips",quantity:10},{name:"brownie choclate",quantity:2},{name:"maggi",quantity:6}];
  var bought=[];
  service.getToBuyItems=function (){
  return toBuy;
}
  service.getBoughtItems=function(){
    return bought;
  }
  service.removeItem=function(index){
    var item=toBuy.splice(index,1);
    console.log(item);
     var bought={name:item[0].name,quantity:item[0].quantity};
    service.addBoughtItem(bought);
  }
service.addBoughtItem=function(item){
  bought.push(item);
  }
}
}
)()