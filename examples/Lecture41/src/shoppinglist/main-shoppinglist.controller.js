(function () {
'use strict';

angular.module('ShoppingList')
.controller('categoryController', categoryController);


categoryController.$inject = ['MenuService'];
function categoryController(MenuService) {
  var mainlist = this;
  var promise=MenuService.getItems();
  var items=[];
  promise
  .then(function(response){
  	mainlist.items=response.data;
  	data=response.data;
    for(var i=0;i<data.length;i++){
      items.push(data[i]);
    }
  	console.log(response.data);
  	console.log(mainlist.items);
  });
  console.log(mainlist.items);
  console.log(mainlist.items[0]);
  console.loog(mainlist.items[0].name);
  // mainlist.items = items;
}

})();
