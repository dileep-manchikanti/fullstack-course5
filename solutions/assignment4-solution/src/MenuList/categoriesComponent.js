(function(){
	'use strict';
	angular.module('MenuApp')
	.component('categoriesList',{
		templateUrl:'templates/categoriesDisplay.html',
		bindings:{
			categories:'<',
		}
	});
})();