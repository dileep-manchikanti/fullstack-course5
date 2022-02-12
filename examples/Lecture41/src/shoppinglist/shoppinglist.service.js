(function () {
'use strict';

angular.module('MenuApp')
.service('MenuService', MenuService);


// MenuService.$inject = ['$q', '$timeout']
function MenuService() {
  var service = this;

  // List of shopping items
  var items = [];

  // Pre-populate a no cookie list
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
    var categoriesHtml='https://davids-restaurant.herokuapp.com/categories.json';
    var response=$http({
      method:"GET",
      url:categoriesHtml
    });
    return response;
  };

  service.getItems = function (short_name) {
    // var deferred = $q.defer();

    // // Wait 2 seconds before returning
    // $timeout(function () {
    //   // deferred.reject(items);
    //   deferred.resolve(items);
    // }, 800);
    var singleCategoryHtml='https://davids-restaurant.herokuapp.com/menu_items.json';
    var response=$http({
      method:"GET",
      url:singleCategoryHtml,
      params:{
        category:short_name
      }
    });
    return response;
  };
}

})();
