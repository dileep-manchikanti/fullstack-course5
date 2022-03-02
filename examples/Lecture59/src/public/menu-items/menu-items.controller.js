(function () {
"use strict";

angular.module('public')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['menuItems'];
function MenuItemsController(menuItems) {
  var $ctrl = this;
  $ctrl.menuItems = menuItems;
  console.log($ctrl.menuItems);
  for(var i=0;i<$ctrl.menuItems.menu_items.length;){
  	console.log($ctrl.menuItems.menu_items[i]);
  }
}

})();
