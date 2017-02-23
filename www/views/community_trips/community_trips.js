'Use Strict';
angular.module('App').controller('communitytripsController', function ($scope, $state,$cordovaOauth, $localStorage, $log, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
  var ref = firebase.database().ref();

  
  $scope.newtrip = function () {
      $location.path("/newtrip");
  }  
  $scope.trip = function () {
      $location.path("/trip");
  }
}
);




function ContentController($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}
