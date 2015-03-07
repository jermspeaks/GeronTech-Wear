
var dhp = angular.module('dhp', ['ngRoute', 'templates']);

// var App = angular.module('therebelrobot', ['ngRoute','templates']);

dhp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {  templateUrl: 'states/main.html', controller: 'MainCtrl'  })
      .when('/about', {  templateUrl: 'states/about.html', controller: 'AboutCtrl'  })
      .otherwise({
        redirectTo: '/'
      });
  });