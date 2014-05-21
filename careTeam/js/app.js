var app = angular.module('careTeamApp',['ngRoute','ui.bootstrap']);

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
			.when('/baa',{
			controller:'',
			templateUrl: 'partials/baa.html'
			})
			.when('/invitations',{
			controller:'',
			templateUrl: 'partials/invitations.html'
			})
			.when('/providers',{
			controller:'',
			templateUrl: 'partials/providers.html'
			})
			.otherwise({redirectTo: 'Partials/home.html'});
		
		});