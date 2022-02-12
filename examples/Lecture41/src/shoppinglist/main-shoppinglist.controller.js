(function () {
'use strict';

angular.module('MenuApp')
.controller('categoryController', categoryController);


categoryController.$inject = ['ShoppingListService', 'items'];
function categoryController(ShoppingListService, items) {
  var mainlist = this;
  mainlist.items = items;
}

})();
