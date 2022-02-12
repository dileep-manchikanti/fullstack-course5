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
			templateUrl:'src/MenuList/templates/home-view.html'
			}
		)

		.state('categories',{
			url:'/categories',
			templateUrl:'src/MenuList/templates/categoriesView.html',
			controller:'categoriesController as list',
			resolve:{
				categories:['MenuService',function(MenuService){
					MenuService.getCategories()
					.then(function(response){
						return response.data;
					})
				}]
			}
		})
		.state('categories.items',{
			url:'/{name}',
			templateUrl:'src/MenuList/templates/singleCategoryView.html',
			controller:'singleCategoryController as list',
			resolve:{
				items:['MenuService','$stateParams',function(MenuService,$stateParams){
					MenuService.getItems($stateParams.name)
					.then(function(response){
						return response.data;
					})
				}]
			}
		})
	}
})();