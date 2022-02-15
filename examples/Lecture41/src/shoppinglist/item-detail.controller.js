(function () {
'use strict';

angular.module('ShoppingList')
.controller('categoryDetailController', categoryDetailController);


categoryDetailController.$inject = ['MenuService','$stateParams'];
function categoryDetailController(MenuService,$stateParams) {
  var category=$stateParams.categoryId;
  console.log(category);
  var list=this;
  var items=MenuService.getItems(category);
  list.items=items;
}

})();
