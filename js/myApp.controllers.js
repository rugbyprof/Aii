var myApp = angular.module('myApp.controllers', []);

var controllers = {};

controllers.regularController = function($scope) {
  $scope.name = "Anne";
}

controllers.dateGenController = function($scope) {

  $scope.months = ["January","February","March","April",
                  "May","June","July","August","September","October",
                  "November","December"];
  $scope.days = [];
  $scope.years = [];
  $scope.i = 0;

  for($scope.i=0;$scope.i<32;$scope.i++){
    $scope.days[$scope.i] = $scope.i;
  }

  $scope.i = 0;
  $scope.j = 0;

  for($scope.j=1900;$scope.j<2016;$scope.j++){
    $scope.years[$scope.i] = $scope.j;
    $scope.i++;
  }


}

myApp.controller(controllers);
