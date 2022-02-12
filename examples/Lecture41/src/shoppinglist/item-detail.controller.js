(function () {
'use strict';

angular.module('ShoppingList')
.controller('categoryDetailController', categoryDetailController);


categoryDetailController.$inject = ['$stateParams', 'items'];
function categoryDetailController($stateParams, items) {
  var itemDetail = this;
  var item = items[$stateParams.itemId];
  itemDetail.name = item.name;
  itemDetail.quantity = item.quantity;
  itemDetail.description = item.description;
}

})();
