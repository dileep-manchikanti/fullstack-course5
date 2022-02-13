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
  	console.log(response);
  });
  mainlist.items = items;
}

})();
