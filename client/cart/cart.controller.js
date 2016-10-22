angular.module("meanTeaApp")

  .controller("cartController", function($scope, $location, cartService, shopService) {
    $scope.cart = []
    $scope.cartEmpty = true
    $scope.changeQuantity = false

    $scope.addToCart = function(teaObject, quantity) {
      $scope.cartEmpty = false
      $scope.cart.push(teaService.addItem(teaObject, quantity))
      console.log($scope.cart);
    }

    $scope.updateItem = function(teaObject, newQuantity) {
      cartService.updateItem(teaObject, newQuantity)
    }
  })
