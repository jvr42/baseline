'use strict';

angular.module('baselineApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/registro', {
        templateUrl: 'app/registro/registro.html',
        controller: 'RegistroCtrl'
      });
  });
