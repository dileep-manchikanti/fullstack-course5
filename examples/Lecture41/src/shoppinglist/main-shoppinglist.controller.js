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
  	items=response.data;
  	console.log(response.data);
  });
  console.log(items);
  console.log(items[0]);
  console.loog(items[0].name);
  mainlist.items = items;
}

})();
