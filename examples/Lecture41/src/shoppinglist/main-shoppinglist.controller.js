(function () {
'use strict';

angular.module('ShoppingList')
.controller('categoryController', categoryController);


categoryController.$inject = ['MenuService', 'items'];
function categoryController(MenuService, items) {
  var mainlist = this;
  mainlist.items = items;
}

})();
