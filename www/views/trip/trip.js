'Use Strict';
angular.module('App').controller('tripController', function ($scope, $state,$cordovaOauth, $localStorage, $log, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
  var ref = firebase.database().ref();

  $scope.go = function ( path ) {
    $state.go(path);
  };
  
});

