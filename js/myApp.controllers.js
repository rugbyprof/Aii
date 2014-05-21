var myApp = angular.module('myApp.controllers', []);

var controllers = {};

controllers.regularController = function($scope) {
  $scope.name = "Anne";
}

controllers.DatepickerDemoCtrl = function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.maxDate = new Date();

  $scope.clear = function () {
    $scope.dt = null;
  };

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.initDate = new Date('2016-15-20');
  $scope.format = 'yyyy/MM/dd';
};

myApp.controller(controllers);
