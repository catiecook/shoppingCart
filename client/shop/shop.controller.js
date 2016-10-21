angular.module("meanTeaApp")

  .controller('shopController', function($scope, $location, teaService) {
    $scope.allData = teaService.teaData()
    $scope.allData.categories = []
    $scope.cart = []
    //Should this be separated into the card controller?
    $scope.addToCart = function(teaObject, quantity) {
      teaService.addItem(teaObject, quantity)
    }
    for(var i=0; i<$scope.allData.length; i++){
      for(var j=0; j<$scope.allData[i].categories.length; j++){
        $scope.allData.categories.push($scope.allData[i].categories[j])
      }
    }
  }
)
