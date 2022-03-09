(function () {
"use strict";

angular.module('public')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['menuItems'];
function MenuItemsController(menuItems) {
  var $ctrl = this;
  $ctrl.categoryName=menuItems.category.name;
  $ctrl.special_instructions=menuItems.category.special_instructions;
  $ctrl.menuItems=menuItems;
  // console.log(items.menu_items[0]);
  // for(var item in $ctrl.menuItems){
  // 	console.log(item);
  // }
  // console.log($ctrl.menuItems);
}

})();
