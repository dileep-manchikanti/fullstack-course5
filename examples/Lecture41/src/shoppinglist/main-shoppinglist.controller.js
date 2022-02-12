(function () {
'use strict';

angular.module('ShoppingList')
.controller('categoryController', categoryController);


categoryController.$inject = ['ShoppingListService', 'items'];
function categoryController(ShoppingListService, items) {
  var mainlist = this;
  mainlist.items = items;
}

})();
