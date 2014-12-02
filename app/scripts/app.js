'use strict';

angular.module('randomize', [
  'ngAnimate',
  'ui.router'
])
.config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('users', {
          url: '',
          controller: 'UsersCtrl',
          templateUrl: 'partials/users.html'
        });
    }]);
