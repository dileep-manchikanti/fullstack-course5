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
      console.log(response.data);
      var data=response.data;
      var favourite=signUp.user.favourite;
      signUp.user.favourite=undefined;
      for(var i=0;i<data.length;i++){
      	if(data[i].short_name==favourite)signUp.user.favourite=data[i];
      }
      service.user=signUp.user;
      window.alert("Your Info is saved Sucessfully....");
    })
	.catch(function(error){
		window.alert("the favourite dish name you entered is Invalid!!!.please enter a valid name for Favourite dish");
	});
		}
	}
})();