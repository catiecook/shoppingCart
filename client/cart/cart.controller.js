angular.module("meanTeaApp")

  .controller("cartController", function($scope, $location, cartController, shopService) {
    $scope.cart = []
    $scope.cartEmpty = true

    $scope.addToCart = function(teaObject, quantity) {
      $scope.cart.push(teaService.addItem(teaObject, quantity))
      console.log($scope.cart);
    }
  })
