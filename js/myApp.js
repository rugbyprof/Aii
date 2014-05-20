//Travis Osteen
var myApp = angular.module('myApp', ['ngRoute','ui.bootstrap','myApp.controllers']);


myApp.config(function ($routeProvider) {

  $routeProvider.when('/', {
      controller: '',
      templateUrl: 'home.html'
  })
  .when('/home',
  {
      controller: '',
      templateUrl: 'home.html'
  })
  .when('/newPatient',
  {
      controller: '',
      templateUrl: 'partials/newPatient.html'
  })
  .when('/accntSettings',
  {
      controller: '',
      templateUrl: 'partials/accntSettings.html'
  })
  .when('/logout',
  {
      controller: '',
      templateUrl: 'partials/logout.html'
  })
  .when('/messages',
  {
      templateUrl: 'partials/messages.html'
  })
  .when('/invites',
  {
      controller: '',
      templateUrl: 'partials/invites.html'
  })
  .when('/careTeam',
  {
      controller: '',
      templateUrl: 'partials/careTeam.html'
  })
  .when('/editPatient',
  {
      controller: '',
      templateUrl: 'partials/editPatient.html'
  })
  .otherwise({redirectTo: 'home.html'});

});
