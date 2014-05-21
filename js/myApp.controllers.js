var myApp = angular.module('myApp.controllers', []);

var controllers = {};

controllers.regularController = function($scope) {
	$scope.name = "Anne";
}
<<<<<<< HEAD
controllers.TabController = function(){
	this.tab=0;
	this.selectTab=function(tabNum){
		this.tab=tabNum;
	};
	this.isSelected=function(checkTab){
		return this.tab===checkTab;
	};
}	
=======

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

>>>>>>> Travis-Branch
myApp.controller(controllers);
