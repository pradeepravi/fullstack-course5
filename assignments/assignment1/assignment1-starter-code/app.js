(function() {
  'use strict';
  angular.module('lunchCheckerApp', [])
  .controller ('LunchCheckerController',function ($scope) {
    $scope.items="";
    $scope.message="";
    //$scope.items = "";
    $scope.checkIfTooMuch = function(){
      $scope.message="";
      if($scope.items=='' || $scope.items.trim()==''){
        $scope.message="Plese enter items and try the Checking";
      }else {
        var  itemsArray = $scope.items.split(",");
        console.log(itemsArray.length);
        if(itemsArray.length>3){
          $scope.message="Too Much!!";
        }else{
          $scope.message="Enjoy!!!";
        }

      }
    }
    console.log("Items List:"+$scope.items);
  });

}());
