(function () {
"use strict";

angular.module('public')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['menuItems'];
function MenuItemsController(menuItems) {
  var $ctrl = this;
  var items = menuItems;
  $ctrl.menuItems=[];
  for(var i=0;i<items.menu_items.length;i++){
  	$ctrl.menuItems.push(items.menu_items[i]);
  }
  console.log($ctrl.menuItems);
}

})();
