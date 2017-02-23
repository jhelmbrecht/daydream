'Use Strict';
angular.module('App').controller('newtripController', function ($scope, $state,$cordovaOauth, $localStorage, $log, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
  var ref = firebase.database().ref();
   $scope.newTrip = function(trip) {
	if(trip != "undefined"){
        if(angular.isDefined(trip)){
           console.log("angular IsDefined", trip);
		   console.log("Local User", $localStorage.RealUser);
		   var tripRef = ref.child("trips");
 
           var newTripRef = tripRef.push({
            name: trip.name,
            where: trip.where,
			when:trip.when,
			info:trip.info,
			createdBy:$localStorage.RealUser.uid,
			updateBy:$localStorage.RealUser.uid,
			createdAt:new Date().getTime(),
			updatedAt:new Date().getTime(),
			isSponsored:false,
			sponsoredBy:"",
			isDeleted:false
           });
		   
           $localStorage.NewTripKey = newTripRef.key;
		   
		   $location.path("/triplist");
        }
	}
  };

});

