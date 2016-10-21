angular.module("meanTeaApp")

  .controller("cartController", function($scope, $location, cartController) {
    $scope.cart = []
    $scope.cartEmpty = true
    
  })
