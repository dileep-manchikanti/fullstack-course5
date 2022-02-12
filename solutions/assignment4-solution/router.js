(function(){
	'use strict';
	angular.module('MenuApp')
	.config(RouterConfig);

	RouterConfig.$inject=['$stateProvider','$urlRouterProvider'];
	function RouterConfig($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
		.state('home',{
			url:'/',
			templateUrl:'templates/home-view.html',
			}
		)

		.state('categories',{
			url:'/categories',
			templateUrl:'categoriesView.html',
			controller:'categoriesController as list',
			resolve:{
				categories:['MenuService',function(MenuService){
					return MenuService.getCategories();
				}]
			}
		})
		.state('categories.items',{
			url:'/{name}',
			templateUrl:'singleCategoryView.html',
			controller:'singleCategoryController as list',
			resolve:{
				items:['MenuService','$stateParams',function(MenuService,$stateParams){
					return MenuService.getItems($stateParams.name);
				}]
			}
		})
	}
})()