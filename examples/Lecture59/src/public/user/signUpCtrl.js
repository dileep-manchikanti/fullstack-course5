(function (){
	'use strict';
	angular.module('public')
	.controller('signUpCtrl',signUpCtrl);
	signUpCtrl.$inject=['$http','infoService'];
	function signUpCtrl($http,infoService){
		var signUp=this;
		var service=infoService;
		signUp.invalid=true;
		signUp.submit=function(){
			$http.get('https://davids-restaurant.herokuapp.com/categories.json').then(function (response) {
      signUp.user.favourite=response.data[signUp.user.favourite];
      service.user=signUp.user;
      signUp.invalid=false;
    })
	.catch(function(error){
		signUp.invalid=true;
	});
		}
	}
})();