(function () {
"use strict";

angular.module('public')
.component('menuItem', {
  templateUrl: 'src/public/menu-item/menu-item.html',
  bindings: {
    menuItem: '<'
  },
  controller:menuItemController
});

	function menuItemController(){
		console.log(this.menuItem);
	}
}
)
();
