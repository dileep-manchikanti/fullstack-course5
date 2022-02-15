(function () {
'use strict';

angular.module('ShoppingList')
.controller('categoryController', categoryController);


categoryController.$inject = ['MenuService'];
function categoryController(MenuService) {
  var mainlist = this;
  var items=MenuService.getCategories();
  mainlist.items = items;
}

})();
