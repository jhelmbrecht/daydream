'Use Strict';
angular.module('App').controller('friendsController', function ($scope, $state,$cordovaOauth, $localStorage, $log, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
  var ref = firebase.database().ref();

  $scope.go = function ( path ) {
    $state.go(path);
  };
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
