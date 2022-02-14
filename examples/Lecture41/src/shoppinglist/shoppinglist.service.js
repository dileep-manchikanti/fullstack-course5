(function () {
'use strict';

angular.module('ShoppingList')
.service('MenuService', MenuService);


MenuService.$inject = ['$q', '$http']
function MenuService($q, $http) {
  var service = this;

  // List of shopping items
  // var items = [];

  // // Pre-populate a no cookie list
  // items.push({
  //   name: "Sugar",
  //   quantity: "2 bags",
  //   description: "Sugar used for baking delicious umm... baked goods."
  // });
  // items.push({
  //   name: "flour",
  //   quantity: "1 bags",
  //   description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
  // });
  // items.push({
  //   name: "Chocolate Chips",
  //   quantity: "3 bags",
  //   description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
  // });

  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getCategories = function () {
    // var deferred = $q.defer();

    // // Wait 2 seconds before returning
    // $timeout(function () {
    //   // deferred.reject(items);
    //   deferred.resolve(items);
    // }, 800);

    var response=$http({
      method:"GET",
      url:'https://davids-restaurant.herokuapp.com/categories.json'
    });
    console.log("hi");
    // response.then(function(info){
    //   console.log(info.data);
    //   deferred.resolve(info.data);
    // });

    return response;
  };

  service.getItems=function(type){
    var response=$http({
      method:"GET",
      url:'https://davids-restaurant.herokuapp.com/menu_items.json'
      params:{
        category:type
      }
    });
    console.log('hello');
    return response;
  }
}

})();
