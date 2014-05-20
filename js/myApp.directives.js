//Travis Osteen

var myApp = angular.module('myApp.directives', []);

myApp.directive('newPatientForm', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/new-patient-form.html'
	}
});	