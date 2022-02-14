(function () {
'use strict';

angular.module('ShoppingList')
.controller('categoryDetailController', categoryDetailController);


categoryDetailController.$inject = ['MenuService','$stateParams'];
function categoryDetailController(MenuService,$stateParams) {
  var category=$stateParams.categoryId;
  console.log(category);
  var list=this;
  var data=[];
  var items=[];
  var promise=MenuService.getItems(category);
  promise
  .then(function(response){
  	data=response.data["menu_items"];
    for(var i=0;i<data.length;i++){
      items.push(data[i]);
    }
    console.log(items);
  });
  list.items=items;
}

})();
