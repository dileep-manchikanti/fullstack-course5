(function (){
	'use strict';
	angular.module('MenuApp')
	.component('itemList',{
		templateUrl:'itemDisplay.html',
		bindings:{
			items:'<',
		}
	});
})();