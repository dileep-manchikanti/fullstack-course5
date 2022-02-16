(function () {
'use strict';

angular.module('ShoppingList')
.service('MenuService', MenuService);


MenuService.$inject = ['$http'];
function MenuService($http) {
  var service = this;
  service.getCategories = function () {
    return $http.get('https://davids-restaurant.herokuapp.com/categories.json').then(function (response){
      return response.data;
    });
  };

  service.getItems=function(type){
    return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json?category='+type).then(function (response){
      return response.data;
    });
  };
}
})();
