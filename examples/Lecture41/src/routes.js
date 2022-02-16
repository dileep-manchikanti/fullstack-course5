(function () {
'use strict';

angular.module('ShoppingList')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/shoppinglist/templates/home.template.html'
  })

  // Premade list page
  .state('categoryList', {
    url: '/category-list',
    templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
    controller: 'categoryController as list',
    resolve:{
      items:['MenuService',function (MenuService){
        return MenuService.getCategories();
      }]
    }
  })

  .state('categoryDetail', {
    url: '/category-detail/{category}',
    templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
    controller:'categoryDetailController as list',
    resolve:{
      items:['MenuService','$stateParams',function (MenuService,$stateParams){ 
        return MenuService.getItems($stateParams.category);
      }]
    }
  });

}

})();
