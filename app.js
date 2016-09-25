(function () {
'use strict';

angular.module('myFirstApp', [])

  .controller('LunchCheckController', function ($scope) {
    $scope.name = " list comma separated dishes you usually have for lunch";

    $scope.lunch = "";

    $scope.sayHello = function () {
      return "Check if too much for lunch";
    };
  });

  })();
