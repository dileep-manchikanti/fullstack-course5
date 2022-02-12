(function () {
'use strict';

angular.module('MenuApp')
.controller('categoryDetailController', categoryDetailController);


categoryDetailController.$inject = ['$stateParams', 'items'];
function categoryDetailController($stateParams, items) {
  var itemDetail = this;
  var item = items[$stateParams.categoryId];
  itemDetail.name = item.name;
  itemDetail.quantity = item.quantity;
  itemDetail.description = item.description;
}

})();
