var myApp = angular.module('myApp.controllers', []);

var controllers = {};

controllers.regularController = function($scope) {
	$scope.name = "Anne";
}

controllers.TabController = function(){
	this.tab=0;
	this.selectTab=function(tabNum){
		this.tab=tabNum;
	};
	this.isSelected=function(checkTab){
		return this.tab===checkTab;
	};
}


controllers.newPatientsController = function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.maxDate = new Date();

	$scope.fname = "";
	$scope.lname = "";
	$scope.mi = "";
	$scope.dt = "";
	$scope.street = "";
	$scope.city = "";
	$scope.zip = "";

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

  $scope.list = [];
  $scope.text = 'hello';
  $scope.submit = function() {
    if ($scope.fname && $scope.lname && $scope.mi && $scope.dt && $scope.street && $scope.city && $scope.state && $scope.zip) {
      $scope.list.push(this.fname);
			$scope.list.push(this.mi);
			$scope.list.push(this.lname);
			$scope.list.push(this.dt);
			$scope.list.push(this.street);
			$scope.list.push(this.city);
			$scope.list.push(this.state);
			$scope.list.push(this.zip);
      $scope.fname = '';
    }
	};
};


myApp.controller(controllers);
