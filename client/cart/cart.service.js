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

    this.updateItem = function(teaObject, newQuantity) {
      item.quantity = newQuantity
      return newQuantity
    }

    this.deleteItem = function(item) {

    }


  })
