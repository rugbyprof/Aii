//Travis Osteen
var myApp = angular.module('myApp', ['ngRoute','ui.bootstrap','myApp.controller.js']);


myApp.config(function ($routeProvider) {

  $routeProvider.when('/', {
      controller: 'DropdownCtrl',
      templateUrl: 'home.html'
  })
  .when('/home',
  {
      controller: 'DropdownCtrl',
      templateUrl: 'home.html'
  })
  .when('/newPatient',
  {
      controller: 'DropdownCtrl',
      templateUrl: 'partials/newPatient.html'
  })
  .when('/accntSettings',
  {
      controller: 'DropdownCtrl',
      templateUrl: 'partials/accntSettings.html'
  })
  .when('/logout',
  {
      controller: 'DropdownCtrl',
      templateUrl: 'partials/logout.html'
  })
  .when('/messages',
  {
      controller: 'DropdownCtrl',
      templateUrl: 'partials/messages.html'
  })
  .when('/invites',
  {
      controller: 'DropdownCtrl',
      templateUrl: 'partials/invites.html'
  })
  .when('/careTeam',
  {
      controller: 'DropdownCtrl',
      templateUrl: 'partials/careTeam.html'
  })
  .when('/editPatient',
  {
      controller: 'DropdownCtrl',
      templateUrl: 'partials/editPatient.html'
  })
  .otherwise({redirectTo: 'home.html'});

});
