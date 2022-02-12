(function (){
	'use strict';

	angular.module('MenuApp')
	.component('itemsList',{
		templateUrl: 'src/shoppinglist/templates/itemsDisplay.html',
		bindings:{
			items:"<"
		}
	});


})();