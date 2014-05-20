var myApp = angular.module('myApp.controllers', []);

var controllers = {};

controllers.regularController = function($scope) {
  $scope.name = "Anne";
}

myApp.controller(controllers);
