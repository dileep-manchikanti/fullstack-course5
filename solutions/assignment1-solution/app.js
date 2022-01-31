(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController',verifyLunch);
verifyLunch.$inject=["$scope"];
 var verifyLunch=function($scope){
	$scope.list="";
	$scope.isBalanceDiet=function(){
		var items=$scope.list.split(",");
		if(items.length==0)$scope.result="Plese enter Data first.."
		if(items.length<=3){
			$scope.result="the diet list is with in limit. Enjoy Eating!!";
		}
		else{
			$scope.result="the diet list is not with in limit. It's too much heavy!!!"
		}
	}
}
})();
