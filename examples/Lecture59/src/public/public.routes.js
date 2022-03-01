(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider','$urlRouterProvider'];
function routeConfig ($stateProvider,$urlRouterProvider) {
  // Routes
  // $urlRouterProvider.otherwise('public.home');
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.myInfo',{
      url: '/user/info',
      templateUrl: 'src/public/user/user-info.html',
      controller: 'userInfoController',
      controllerAs: 'userInfoCtrl'
    })
    .state('public.signUp',{
      url:'/user/signUp',
      templateUrl: 'src/public/user/signUp.html',
      controller: 'signUpController',
      controllerAs:'signUpCtrl'
    })
    ;
}
})();
