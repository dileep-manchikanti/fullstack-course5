(function () {
"use strict";

angular.module('public')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['menuItems'];
function MenuItemsController(menuItems) {
  var $ctrl = this;
  var items = menuItems;
  $ctrl.categoryName=items.category.name;
  $ctrl.short_name=items.category.short_name;
  $ctrl.special_instructions=items.category.special_instructions;
  $ctrl.menuItems=items.menu_items;
  $ctrl.menuItems=items.menu_items;
  console.log(items.menu_items[0]);
  for(var item in $ctrl.menuItems){
  	console.log(item);
  }
  // console.log($ctrl.menuItems);
}

})();
