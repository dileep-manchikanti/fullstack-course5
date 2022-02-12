(function(){
	'use strict';
	angular.module('MenuApp')
	.controller('categoriesController',categoriesController);

	categoriesController.$inject=['categories'];
	function categoriesController(categories){
		list=this;
		list.categories=categories;
	}
})()