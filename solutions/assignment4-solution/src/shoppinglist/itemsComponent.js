(function (){
	'use strict';

	angular.module('ShoppingList')
	.component('itemsList',{
		templateUrl: 'src/shoppinglist/templates/itemsDisplay.html',
		bindings:{
			items:"<"
		}
	});


})();