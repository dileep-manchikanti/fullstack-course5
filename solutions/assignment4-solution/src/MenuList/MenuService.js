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
			console.log("hi");	
			var response=$http({
				method:"GET",
				url:categoriesHtml
			});
			console.log(service.categories);
			return response;
		}

		service.getItems=function(short_name){
			var response=$http({
				method:"GET",
				url:singleCategoryHtml,
				params:{
					category:short_name
				}
			});
			return response;
		}
	}
})();