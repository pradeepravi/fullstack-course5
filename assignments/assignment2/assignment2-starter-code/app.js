(function() {
  'use strict';
  angular.module('shoppingListCheckerApp', [])
  .controller('ShoppingListController', ShoppingListController)
  .controller('ShoppedListController', ShoppedListController)
  //.factory('ShoppingListFactory', ShoppingListFactory);
  .service('ShoppingListService', ShoppingListService);


  ShoppingListController.$inject = ['ShoppingListService'];

  function  ShoppingListController(shoppingListService) {

    var list1 = this;
    list1.itemsToBuy =[{
      name: "cookies", quantity: 10
    },
    {
      name: "chips", quantity: 5
    },
    {
      name: "milk", quantity: 10
    },
    {
      name: "biscuits", quantity:4
    },
    {
      name: "sugar", quantity: 1
    },
    {
      name: "veggies", quantity: 10
    },
    {
      name: "sauce", quantity: 2
    }

    ];
    //var listFactory =  ShoppingListFactory();

    list1.addItem = function (item,index){
      console.log("in Add Items - "+item.name);
      console.log("Index - "+index);
      shoppingListService.addItem(item);
      list1.itemsToBuy.splice(index,1);
    };
  }

  ShoppedListController.$inject = ['ShoppingListService'];
  function ShoppedListController(shoppingListService){
    var list2 = this;
    //var factory2 = ShoppingListFactory();
    this.shoppedList = shoppingListService.getItems();
  }


  // If not specified, maxItems assumed unlimited
  function ShoppingListService() {
    var service = this;

    // List of shopping items
    var items = [];

    service.addItem = function (item) {
        items.push(item);
    }

    service.removeItem = function (itemIndex) {
      items.splice(itemIndex, 1);
    };

    service.getItems = function () {
      return items;
    };
  }
})();
