(function () {
'use strict';

angular.module('ShoppingList')
.controller('categoryDetailController', categoryDetailController);


categoryDetailController.$inject = ['MenuService','items'];
function categoryDetailController(MenuService,items) {
  var list=this;
  list.items=items.menu_items;
}

})();
