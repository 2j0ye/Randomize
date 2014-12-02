'use strict';

angular.module('randomize')
  .controller('UsersCtrl', function ($scope) {
    $scope.users = [];
    $scope.chosenOne = {name: ''};
    $scope.newuser = { name: ''};

    $scope.newUserAction = function () {
      if ($scope.newuser.name.length < 1) {
        return false;
      }
      var user = {
        name: $scope.newuser.name
      };
      $scope.users.push(user);
      $scope.newuser.name = '';
    };

    $scope.removeUserAction = function (username) {
      var i = 0;
      angular.forEach($scope.users, function (user) {
        if (user.name === username) {
          $scope.users.splice(i, 1);
        }
        i++;
      });
    };

    $scope.randomizeAction = function () {
      var random = Math.floor(Math.random() * ($scope.users.length));
      $scope.chosenOne = $scope.users[random];
    };

  });
