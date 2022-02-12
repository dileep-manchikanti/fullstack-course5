(function(){
	'use strict';
	angular.module('MenuApp')
	.service('MenuService',MenuService);

	MenuService.$inject=['$http'];
	function MenuService($http)	{
		service=this;
		var categoriesHtml='https://davids-restaurant.herokuapp.com/categories.json';
		var singleCategoryHtml='https://davids-restaurant.herokuapp.com/menu_items.json?category=';
		service.getCategories=function(){
			$http({
				method:"GET",
				url:categoriesHtml
			})
			.then(function(response){
				service.categories=response.data;
			})
			.catch(function(error){
				console.log('some thing went terribly wrong');
			});
			return service.categories;
		}

		service.getItems=function(short_name){
			$http({
				method:"GET",
				url:singleCategoryHtml,
				params:{
					category:short_name
				}
			})
			.then(function(response){
				service.items=response.data;
			})
			.catch(function(error){
				console.log('some thing went terribly wrong');
			});
			return service.items;
		}
	}
})()