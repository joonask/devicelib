'use strict';

angular.module('devicelibApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/admin/users', {
        templateUrl: 'app/users/users.html',
        controller: 'UsersCtrl'
      });
  });
