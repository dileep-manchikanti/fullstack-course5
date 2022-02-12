(function(){
	'use strict';
	angular.module('MenuApp')
	.controller('singleCategoryController',singleCategoryController);

	singleCategoryController.$inject=['categories','items','$stateParams'];
	function singleCategoryController(categories,items,$stateParams){
		list=this;
		list.items=items;
		list.shortName=$stateParams.name;
		list.categoryName=list.getName();
		list.getName=function(){
			var name="";
			for(var i=0;i<categories.length;i++){
				if(categories[i].short_name===list.shortName){
					name=categories[i].name;
					break;
				}
			}
			return name;
		}

	}
})()