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

	$scope.patID = "";
	$scope.fname = "";
	$scope.lname = "";
	$scope.mi = "";
	$scope.dt = "";
	$scope.streetAddress = "";
	$scope.city = "";
	$scope.zip = "";
	$scope.Sex = "";
	$scope.Race = "";
	$scope.BMI = "20";
	$scope.Height = "60";
	$scope.Weight = "120";

	$scope.bmis = [];
	$scope.heights = [];
	$scope.weights = [];
	$scope.i = 0;

	for($scope.i=0;$scope.i<36;$scope.i++){
		$scope.bmis[$scope.i] = $scope.i + 10;
	}

	for($scope.i=0;$scope.i<68;$scope.i++){
		$scope.heights[$scope.i] = $scope.i + 12;
	}

	for($scope.i=0;$scope.i<221;$scope.i++){
		$scope.weights[$scope.i] = $scope.i + 80;
	}

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
      $scope.list.push({'PatientID':this.patID, 'fname':this.fname, 'lname':this.lname, 'mi':this.lname,
			'DOB':this.dt, 'streetAddress':this.streetAddress, 'city':this.city, 'state':this.state,
			'zip':this.zip, 'Sex':this.Sex, 'Race':this.Race, 'BMI':this.BMI,
			'Height':this.Height, 'Weight':this.Weight});
	};
};

controllers.existingPatientsCtrl = function ($scope) {

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };


  $scope.street = "";
  $scope.city = "";
  $scope.state = "";
  $scope.zip = "";
   $scope.list = [];

  $scope.submit = function() {
		{
			$scope.list.push({'street':this.street,'city':this.city,'state':this.state,'zip':this.zip});
		}
	};
};

controllers.periopCtrl = function ($scope) {
  $scope.date="";
  $scope.ear="";
  $scope.procTreated="";
  $scope.procNonTreated="";
  $scope.treatment=[];
  $scope.submit = function() {
	if($scope.date && $scope.ear && $scope.procTreated && $scope.procNonTreated)	{
			$scope.treatment.push({'Date of Implantation': this.date,
			'ear':this.ear,
			'procedureForTreated':this.procTreated,
			'procedureForNontreated':this.procNonTreated});
		}
	};
};

controllers.candidacyCtrl = function ($scope) {
  $scope.pta="";
  $scope.srt="";
  $scope.sds="";
  $scope.testValues=[];
  $scope.submit = function() {
		{
			$scope.testValues.push({'pta':this.pta,'srt':this.srt,'sds':this.sds});
		}
	};
};

controllers.audioTestCtrl = function ($scope){
  $scope.pta="";
  $scope.srt="";
  $scope.sds="";
  $scope.testValues=[];
  $scope.submit = function() {
	if($scope.pta && $scope.srt && $scope.sds)	{
			$scope.testValues.push({'pta':this.pta,'srt':this.srt,'sds':this.sds});
		}
	};
}

myApp.controller(controllers);
