(function (){
	'use strict';
	angular.module('public')
	.controller('userInfoCtrl',userInfoCtrl);

	userInfoCtrl.$inject=['infoService'];
	function userInfoCtrl(infoService){
		var info=this;
		var service=infoService;
		if(service.user==undefined)info.is_signed=false;
		else{
			info.is_signed=true;
		}
		info.user=service.user;
	}
})();