(function(){
	'use strict';
	angular.module('MenuApp')
	.component('categoriesList',{
		templateUrl:'categoriesDisplay.html',
		bindings:{
			categories:'<',
		}
	});
})();