(function()
{
	'use strict';
	angular.module('formValidationApp',[])
	.controller('RegistrationController',RegistrationController);

	function RegistrationController(){
		var reg=this;
		reg.submit=function(){
			reg.completed=true;
		}
		reg.clear=function(){
			reg.completed=false;
		}
		// reg.completed=reg.regForm.$valid;
	}
}
)();