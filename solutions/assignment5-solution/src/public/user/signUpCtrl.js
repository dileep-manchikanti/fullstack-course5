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
			$http.get('https://davids-restaurant.herokuapp.com/menu_items.json').then(function (response) {
      var data=response.data.menu_items;
      var favourite=signUp.user.favourite;
      console.log(data);
      console.log(favourite);
      signUp.user.favourite=undefined;
      for(var i=0;i<data.length;i++){
      	if(data[i].short_name==favourite){
      		signUp.user.favourite=data[i];
      		break;
      	}
      }
      if(signUp.user.favourite==undefined){
      	window.alert("Not a valid favourite dish name entered.");
      	signUp.user=undefined;
      }
      else window.alert("Your Info is saved Sucessfully....");
      service.user=signUp.user;
    })
	.catch(function(error){
		window.alert("the favourite dish name you entered is Invalid!!!.please enter a valid name for Favourite dish");
	});
		}
	}
})();