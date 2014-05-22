var app = angular.module('careTeamApp',['ngRoute','ui.bootstrap','ct_patientcontrollers', 'ct_careteamcontrollers']);

			app.config(function ($routeProvider) {

			$routeProvider
			.when('/', {
			controller:'',
			templateUrl: 'partials/home.html'
			})
			.when('/home', {
			controller:'',
			templateUrl: 'partials/home.html'
			})
			.when('/careteams',{
<<<<<<< HEAD
			controller:'',
<<<<<<< HEAD
			templateUrl: 'partials/baa.html'
=======
=======
			controller:'getCareTeamDataCtrl',
>>>>>>> SananBranch
			templateUrl: 'partials/careteams.html'
>>>>>>> SananBranch
			})
			.when('/invitations',{
			controller:'',
			templateUrl: 'partials/invitations.html'
			})
			.when('/providers',{
			controller:'',
			templateUrl: 'partials/providers.html'
			})
            .when('/patientpage',{
                controllers:'getPatientDataCtrl',
                templateUrl: 'partials/patientpage.html'
            })
			.otherwise({redirectTo: 'partials/home.html'});
		
		});