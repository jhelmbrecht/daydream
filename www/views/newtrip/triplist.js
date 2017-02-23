'Use Strict';
angular.module('App').controller('tripListController', function ($scope, $ionicModal, $state,$cordovaOauth, $localStorage, $log, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
  var ref = firebase.database().ref();
  var listRef = ref.child("lists");
  var itemRef = ref.child("items");
  console.log("$localStorage.NewTripListKey", $localStorage.NewTripListKey);
  $scope.items = [];
  if($localStorage.NewTripListKey == undefined){
	console.log("NewTripListKey Not Defined");
	var newlistRef = listRef.push({
		createdBy:$localStorage.RealUser.uid,
		createdAt:new Date().getTime(),
		updatedAt:new Date().getTime(),
		trip_id:$localStorage.NewTripKey,
		isSponsored:false,
		sponsoredBy:"",
		isDeleted:false
	});
	
	console.log("newlistRef.key", newlistRef.key);
	$localStorage.NewTripListKey = newlistRef.key;
	  
	var newitemRef = itemRef.push({
		name:'Water',
		createdBy:$localStorage.RealUser.uid,
		createdAt:new Date().getTime(),
		updatedAt:new Date().getTime(),
		list_id:newlistRef.key,
		isSponsored:false,
		sponsoredBy:"",
		isDeleted:false
	});
	  
       var item_ref = ref.child('items').orderByChild("list_id").equalTo($localStorage.NewTripListKey)
	   var item_resp = item_ref.on("value", function(snapshot) {
       console.log("items",snapshot.val());
	   $localStorage.NewTripListItems = snapshot.val();
		
	       snapshot.forEach(function(childSnapshot) {
	          var item = childSnapshot.val();
	          console.log("child data", item);
			  $scope.items[$scope.items.length] = item;
			  console.log("scope",$scope.items);
           });
		  
       });
  
  }else{
	  //var data = $firebaseObject(ref.child('items').child(id));
      console.log("NewTripListKey Defined");
	   var item_ref = ref.child('items').orderByChild("list_id").equalTo($localStorage.NewTripListKey)
	   var item_resp = item_ref.on("value", function(snapshot) {
       console.log("items",snapshot.val());
	   $localStorage.NewTripListItems = snapshot.val();
		
	       snapshot.forEach(function(childSnapshot) {
	          var item = childSnapshot.val();
	          console.log("child data", item);
			  $scope.items[$scope.items.length] = item;
			  console.log("scope",$scope.items);
           });
		  
       });
  }
  
  $scope.inviteFriends = function () {
      $location.path("/invitefriends");
  }
  
  
  
 $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
 
});

  