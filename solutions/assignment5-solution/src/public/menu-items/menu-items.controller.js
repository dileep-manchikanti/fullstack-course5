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
  $ctrl.menuItems=[];
  console.log(items.menu_items);
  for(var i=0;i<items.menu_items.length;i++){
  	$ctrl.menuItems.push(items.menu_items[i]);
  }
  console.log($ctrl.menuItems);
}

})();
