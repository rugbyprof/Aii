var app = angular.module('careTeamApp',['ngRoute','ui.bootstrap']);

			app.config(function ($routeProvider) {

			$routeProvider
			.when('/', {
			controller:'',
			templateUrl: 'Partials/home.html'
			})
			.when('/home', {
			controller:'',
			templateUrl: 'Partials/home.html'
			})
			.when('/baa',{
			controller:'',
			templateUrl: 'Partials/baa.html'
			})
			.when('/invitations',{
			controller:'',
			templateUrl: 'Partials/invitations.html'
			})
			.when('/providers',{
			controller:'',
			templateUrl: 'Partials/providers.html'
			})
			.otherwise({redirectTo: 'Partials/home.html'});
		
		});