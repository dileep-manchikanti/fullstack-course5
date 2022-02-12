(function () {
'use strict';

angular.module('ShoppingList')
.component('categoryList', {
  templateUrl: 'src/shoppinglist/templates/shoppinglist.template.html',
  bindings: {
    items: '<'
  }
});

})();
