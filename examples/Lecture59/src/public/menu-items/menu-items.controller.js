(function () {
"use strict";

angular.module('public')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['menuItems'];
function MenuItemsController(menuItems) {
  var $ctrl = this;
  $ctrl.menuItems = menuItems;
  for(var item in $ctrl.menuItems["menu_items"]){
  	console.log(item);
  }
}

})();
