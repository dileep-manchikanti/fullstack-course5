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
      console.log(signUp.user.favourite);
      signUp.user.favourite=response.data[signUp.user.favourite];
      console.log(signUp.user.favourite);
      service.user=signUp.user;
      window.alert("Your Info is saved Sucessfully....");
    })
	.catch(function(error){
		window.alert("the favourite dish name you entered is Invalid!!!.please enter a valid name for Favourite dish");
	});
		}
	}
})();