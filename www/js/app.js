'Use Strict';
angular.module('App', ['ionic','ngStorage', 'ngCordova','firebase', 'pascalprecht.translate','ngMessages'])
.config(function($stateProvider, $urlRouterProvider, $translateProvider, $translateStaticFilesLoaderProvider) {
$translateProvider.preferredLanguage('en');

        $translateProvider.useStaticFilesLoader({
          prefix: 'langs/lang-',
          suffix: '.json'
        });
		


$stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'views/login/login.html',
      controller:'loginController'
    })
	.state('communities', {
      url: '/communities',
      templateUrl: 'views/communities/communities.html',
      controller:'communitiesController'
    })
	.state('new_community', {
      url: '/communities/new_community',
      templateUrl: 'views/communities/new_community/new_community.html',
      controller:'newcommunityController'
    })
	.state('communitypath', {
      url: '/community',
      templateUrl: 'views/community/community.html',
      controller:'communityController'
    })
	.state('bookings', {
      url: '/bookings',
      templateUrl: 'views/bookings/bookings.html',
      controller:'bookingsController'
    })
	.state('book', {
      url: '/book',
      templateUrl: 'views/book/book.html',
      controller:'bookController'
    })
	.state('community_trips', {
      url: '/community_trips',
      templateUrl: 'views/community_trips/community_trips.html',
      controller:'communitytripsController'
    })
	.state('search_communities', {
      url: '/search_communities',
      templateUrl: 'views/search_communities/search_communities.html',
      controller:'searchCommunitiesController'
    })
	.state('search_friends', {
      url: '/search_friends',
      templateUrl: 'views/search_friends/search_friends.html',
      controller:'searchFriendsController'
    })
	.state('other_person', {
      url: '/other_person',
      templateUrl: 'views/other_person/other_person.html',
      controller:'otherpersonController'
    })
	.state('list', {
      url: '/list',
      templateUrl: 'views/list/list.html',
      controller:'listController'
    })
	.state('events', {
      url: '/events',
      templateUrl: 'views/events/events.html',
      controller:'eventsController'
    })
	.state('event', {
      url: '/events/event',
      templateUrl: 'views/events/event/event.html',
      controller:'eventController'
    })
	.state('post', {
      url: '/post',
      templateUrl: 'views/post/post.html',
      controller:'postController'
    })
	.state('gallery', {
      url: '/gallery',
      templateUrl: 'views/gallery/gallery.html',
      controller:'galleryController'
    })
	.state('members', {
      url: '/members',
      templateUrl: 'views/members/members.html',
      controller:'membersController'
    })
	.state('friends', {
      url: '/friends',
      templateUrl: 'views/friends/friends.html',
      controller:'friendsController'
    })
	 .state('settings', {
      url: '/settings',
      templateUrl: 'views/settings/settings.html',
      controller:'settingsController'
    })
	.state('profile', {
      url: '/profile',
      templateUrl: 'views/profile/profile.html',
      controller:'profileController'
    })
    .state('forgot', {
      url: '/forgot',
      templateUrl: 'views/forgot/forgot.html',
      controller:'forgotController'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register/register.html',
      controller:'registerController'
    })
    .state('trips', {
      url: '/trips',
      templateUrl: 'views/trips/trips.html',
      controller:'tripsController'
    })
	.state('trip', {
      url: '/trip',
      templateUrl: 'views/trip/trip.html',
      controller:'tripController'
    })
	.state('newtrip', {
      url: '/newtrip',
      templateUrl: 'views/newtrip/newtrip.html',
      controller:'newtripController'
    })
    .state('newsfeed', {
      url: '/newsfeed',
      templateUrl: 'views/newsfeed/newsfeed.html',
      controller:'newsfeedController'
    })
	.state('triplist', {
      url: '/triplist',
      templateUrl: 'views/newtrip/triplist.html',
      controller:'tripListController'
    })
    .state('invitefriends', {
      url: '/invitefriends',
      templateUrl: 'views/newtrip/invitefriends.html',
      controller:'inviteFriendsController'
    })
    ;
$urlRouterProvider.otherwise("/login");
})
// Changue this for your Firebase App URL.
.constant('FURL', {
    apiKey: "AIzaSyB33u_As8ZftdSF0pG1-LD_89ojRFZCnYI",
    authDomain: "trippy-ed3db.firebaseapp.com",
    databaseURL: "https://trippy-ed3db.firebaseio.com",
    storageBucket: "trippy-ed3db.appspot.com",
  }
  )
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function(FURL) {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});


