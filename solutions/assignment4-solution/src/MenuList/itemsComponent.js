(function (){
	'use strict';
	angular.module('MenuApp')
	.component('itemList',{
		templateUrl:'templates/itemDisplay.html',
		bindings:{
			items:'<',
		}
	});
})();