(function () {
'use strict';

angular.module('ShoppingList')
.controller('categoryController', categoryController);


categoryController.$inject = ['MenuService'];
function categoryController(MenuService) {
  var mainlist = this;
  var promise=MenuService.getCategories();
  var items=[];
  var data=[];
  promise
  .then(function(response){
  	mainlist.items=response.data;
  	data=response.data;
    for(var i=0;i<data.length;i++){
      items.push(data[i]);
    }
  });
  mainlist.items = items;
}

})();
