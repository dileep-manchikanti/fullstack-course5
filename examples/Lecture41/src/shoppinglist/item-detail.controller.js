(function () {
'use strict';

angular.module('MenuApp')
.controller('singleCategoryController', singleCategoryController);


singleCategoryController.$inject = ['$stateParams', 'items'];
function singleCategoryController($stateParams, items) {
  var list = this;
  list.items=items;
}

})();
