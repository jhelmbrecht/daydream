'Use Strict';
angular.module('App').controller('communitiesController', function ($scope, $state,$cordovaOauth, $localStorage, $log, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
  var ref = firebase.database().ref();
   $scope.go = function ( path ) {
    $state.go(path);
  };
  
   $scope.community = function () {
	   console.log("WOAH");
      //$location.path("/community");
  }
  
  $scope.communities = [
  {
    "_id": 1,
    "link": "",
    "image": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s500/blank-792125_1280.jpg",
	"image_thumb": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s300-h300-c/blank-792125_1280.jpg",
    "title": "Pham",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    "post_type": "post_photo",
    "tags": [
      "home",
      "tag2",
      "tag3"
    ]
  },
  {
    "_id": 2,
    "link": "",
    "image": "http://2.bp.blogspot.com/-YytBQ-VwmQc/VYGjnsxx_yI/AAAAAAAAA04/uncM-5p5MbI/s500/board-761586_1280.jpg",
	 "image_thumb": "http://2.bp.blogspot.com/-YytBQ-VwmQc/VYGjnsxx_yI/AAAAAAAAA04/uncM-5p5MbI/s300-h300-c/board-761586_1280.jpg",
    "title": "Bassnectar Hell",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    "post_type": "post_photo",
    "tags": [
      "Movies",
      "Hunger Games",
      "Hunger"
    ]
  },
  {
    "_id": 3,
    "link": "",
    "image": "http://1.bp.blogspot.com/-M0fdr0xWaaA/VYGjpZwTflI/AAAAAAAAA1I/f3sxnFuhMCc/s500/business-792113_1280.jpg",
	 "image_thumb": "http://1.bp.blogspot.com/-M0fdr0xWaaA/VYGjpZwTflI/AAAAAAAAA1I/f3sxnFuhMCc/s300-h300-c/business-792113_1280.jpg",
    "title": "BASSBILLS",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    "post_type": "post_photo",
    "tags": [
      "Movies",
      "Avengers"
    ]
  },
  {
    "_id": 4,
    "image": "http://3.bp.blogspot.com/-IvUXSLYsXwk/VYGjs7E23CI/AAAAAAAAA1Q/RDJcktzwYzQ/s500/cactus-787931_1280.jpg",
	 "image_thumb": "http://3.bp.blogspot.com/-IvUXSLYsXwk/VYGjs7E23CI/AAAAAAAAA1Q/RDJcktzwYzQ/s300-h300-c/cactus-787931_1280.jpg",
    "link": "",
    "title": "TKELS",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    "post_type": "post_photo",
    "tags": [
      "Simple",
      "Post"
    ]
  },
  {
    "_id": 5,
    "image": "http://1.bp.blogspot.com/-IMsTheNxIqo/VYGjyM2hLiI/AAAAAAAAA1g/ZQO2uRgQSU4/s500/cappadocia-805624_1280.jpg",
	 "image_thumb": "http://1.bp.blogspot.com/-IMsTheNxIqo/VYGjyM2hLiI/AAAAAAAAA1g/ZQO2uRgQSU4/s300-h300-c/cappadocia-805624_1280.jpg",
    "link": "",
    "title": "Loon Mountain",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    "post_type": "post_photo",
    "tags": [
      "Simple",
      "Post"
    ]
  },
  {
    "_id": 6,
    "image": "http://3.bp.blogspot.com/-zR75pEKCSSU/VYGjwNogrmI/AAAAAAAAA1Y/xgPrSXra3fE/s500/darts-102919_1280.jpg",
	 "image_thumb": "http://3.bp.blogspot.com/-zR75pEKCSSU/VYGjwNogrmI/AAAAAAAAA1Y/xgPrSXra3fE/s300-h300-c/darts-102919_1280.jpg",
    "link": "http://www.weblogtemplates.net/",
    "title": "Work",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    "post_type": "post_photo",
    "tags": [
      "Link",
      "Link Post"
    ]
  },
  {
    "_id": 7,
    "image": "http://1.bp.blogspot.com/-F508t9rbLAs/VYGj6BK-O1I/AAAAAAAAA1o/aPlZysKleoI/s500/darts-155726_1280.png",
	 "image_thumb": "http://1.bp.blogspot.com/-F508t9rbLAs/VYGj6BK-O1I/AAAAAAAAA1o/aPlZysKleoI/s300-h300-c/darts-155726_1280.png",
    "link": "http://www.skyafar.com/",
    "title": "Mountain Biking",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    "post_type": "post_photo",
    "tags": [
      "Link",
      "Link Post"
    ]
  }
];
  
  
});




function ContentController($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}
