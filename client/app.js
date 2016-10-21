angular.module('meanTeaApp', ['ngMaterial', 'ngAria', 'ngAnimate', 'ngRoute', 'angular.filter', 'ngMdIcons'])

.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'shop/shop.html',
      controller: 'shopController'
    })
    $locationProvider.html5Mode(true);
    .when('/cart', {
      templateUrl: 'cart/cart.html',
      controller: 'cartController'
    })
    $locationProvider.html5Mode(true);
})
