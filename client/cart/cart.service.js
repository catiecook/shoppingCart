angular.module("meanTeaApp")

  .service('cartService', function() {

    this.addItem = function(teaObject, quantity) {
      var item = {
        name: teaObject.name,
        price: teaObject.price,
        quantity: quantity
      }
      // console.log(item);
      return item
    }

    this.upDateCart = function(item, quantity) {

    }

    this.deleteItem = function(item) {

    }

    
  })
