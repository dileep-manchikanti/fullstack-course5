(function () {
'use strict';

angular.module('ShoppingList')
.controller('categoryDetailController', categoryDetailController);


categoryDetailController.$inject = ['MenuService','items'];
function categoryDetailController(MenuService,items) {
  var list=this;
  console.log(items);
  list.items=items;
}

})();
