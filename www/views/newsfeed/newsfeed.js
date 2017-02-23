'Use Strict';
angular.module('App').controller('newsfeedController', function ($scope, $state,$cordovaOauth, $localStorage, $log, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
  var ref = firebase.database().ref();

  $scope.logOut = function () {
      Auth.logout();
      $location.path("/login");
  }

}
);


angular.module('App').controller('TodoCtrl', function($scope) {
  $scope.tasks = [
    { title: 'Reunion - TKELS',    "image": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s500/blank-792125_1280.jpg",
	 "image_thumb": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s300-h300-c/blank-792125_1280.jpg" },
    { title: 'Bassnectar NYE - Bassnectar Hell',
    "image": "http://2.bp.blogspot.com/-YytBQ-VwmQc/VYGjnsxx_yI/AAAAAAAAA04/uncM-5p5MbI/s500/board-761586_1280.jpg",
	 "image_thumb": "http://2.bp.blogspot.com/-YytBQ-VwmQc/VYGjnsxx_yI/AAAAAAAAA04/uncM-5p5MbI/s300-h300-c/board-761586_1280.jpg", },
    { title: 'Ski Trip - Loon',
    "image": "http://1.bp.blogspot.com/-M0fdr0xWaaA/VYGjpZwTflI/AAAAAAAAA1I/f3sxnFuhMCc/s500/business-792113_1280.jpg",
	 "image_thumb": "http://1.bp.blogspot.com/-M0fdr0xWaaA/VYGjpZwTflI/AAAAAAAAA1I/f3sxnFuhMCc/s300-h300-c/business-792113_1280.jpg", },
    { title: 'Case Mountain - Mountain Biking',
    "image": "http://3.bp.blogspot.com/-IvUXSLYsXwk/VYGjs7E23CI/AAAAAAAAA1Q/RDJcktzwYzQ/s500/cactus-787931_1280.jpg",
	 "image_thumb": "http://3.bp.blogspot.com/-IvUXSLYsXwk/VYGjs7E23CI/AAAAAAAAA1Q/RDJcktzwYzQ/s300-h300-c/cactus-787931_1280.jpg", }
  ];
  
  
  
  $scope.other_profile = [
  {
    "_id": 1,
    "link": "",
    "image": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s500/blank-792125_1280.jpg",
	 "image_thumb": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s300-h300-c/blank-792125_1280.jpg",
    "title": "Coffee and Paper",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    "post_type": "post_photo",
	"friend_name": "John Doe",
    "friend_image": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s100-c/blank-792125_1280.jpg",
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
    "title": "Game Board",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    "post_type": "post_photo",
	"friend_name": "John Doe",
    "friend_image": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s100-c/blank-792125_1280.jpg",
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
    "title": "Simple Office",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    "post_type": "post_photo",
	"friend_name": "John Doe",
    "friend_image": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s100-c/blank-792125_1280.jpg",
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
    "title": "Flower Power",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    "post_type": "post_photo",
	"friend_name": "John Doe",
    "friend_image": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s100-c/blank-792125_1280.jpg",
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
    "title": "Balloons",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    "post_type": "post_photo",
	"friend_name": "John Doe",
    "friend_image": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s100-c/blank-792125_1280.jpg",
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
    "title": "WeblogTemplates Blogger Templates",
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
    "title": "Skyafar Technology Blog",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    "post_type": "post_photo",
	"friend_name": "John Doe",
    "friend_image": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s100-c/blank-792125_1280.jpg",
    "tags": [
      "Link",
      "Link Post"
    ]
  }
];
  
  
  $scope.newsfeed = [
  {
    "_id": 1,
    "link": "",
    "image": "http://idaydream.newmemvp.build/photo/art/large_x2_16_9/9523763-15290121.jpg?v=1463840843",
	 "image_thumb": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s300-h300-c/blank-792125_1280.jpg",
    "title": "Kenny V",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    "post_type": "post_photo",
	"friend_name": "Day Dream",
    "friend_image": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s100-c/blank-792125_1280.jpg",
    "tags": [
      "home",
      "tag2",
      "tag3"
    ]
  },
  {
    "_id": 2,
    "link": "",
    "image": "http://idaydream.newmemvp.build/photo/art/large_x2_16_9/9497747-15244118.jpg?v=1463552156",
	 "image_thumb": "http://2.bp.blogspot.com/-YytBQ-VwmQc/VYGjnsxx_yI/AAAAAAAAA04/uncM-5p5MbI/s300-h300-c/board-761586_1280.jpg",
    "title": "Chris Mateo",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    "post_type": "post_photo",
	"friend_name": "Day Dream",
    "friend_image": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s100-c/blank-792125_1280.jpg",
    "tags": [
      "Movies",
      "Hunger Games",
      "Hunger"
    ]
  },
  {
    "_id": 3,
    "link": "",
    "image": "http://idaydream.newmemvp.build/photo/art/large_x2_16_9/9523773-15290131.jpg?v=1463853189",
	 "image_thumb": "http://1.bp.blogspot.com/-M0fdr0xWaaA/VYGjpZwTflI/AAAAAAAAA1I/f3sxnFuhMCc/s300-h300-c/business-792113_1280.jpg",
    "title": "John Hill",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    "post_type": "post_photo",
	"friend_name": "Day Dream",
    "friend_image": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s100-c/blank-792125_1280.jpg",
    "tags": [
      "Movies",
      "Avengers"
    ]
  },
  {
    "_id": 4,
    "image": "http://idaydream.newmemvp.build/photo/art/large_x2_16_9/10037829-16311344.jpg?v=1475773854",
	 "image_thumb": "http://3.bp.blogspot.com/-IvUXSLYsXwk/VYGjs7E23CI/AAAAAAAAA1Q/RDJcktzwYzQ/s300-h300-c/cactus-787931_1280.jpg",
    "link": "",
    "title": "Netta",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    "post_type": "post_photo",
	"friend_name": "Day Dream",
    "friend_image": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s100-c/blank-792125_1280.jpg",
    "tags": [
      "Simple",
      "Post"
    ]
  },
  {
    "_id": 5,
    "image": "http://idaydream.newmemvp.build/photo/art/large_x2_16_9/10037174-16309969.jpg?v=1471280494",
	 "image_thumb": "http://1.bp.blogspot.com/-IMsTheNxIqo/VYGjyM2hLiI/AAAAAAAAA1g/ZQO2uRgQSU4/s300-h300-c/cappadocia-805624_1280.jpg",
    "link": "",
    "title": "Tazzy Jay",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    "post_type": "post_photo",
	"friend_name": "Day Dream",
    "friend_image": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s100-c/blank-792125_1280.jpg",
    "tags": [
      "Simple",
      "Post"
    ]
  },
  {
    "_id": 6,
    "image": "http://idaydream.newmemvp.build/photo/art/large_x2_16_9/9975851-16185326.jpg?v=1470238256",
	 "image_thumb": "http://3.bp.blogspot.com/-zR75pEKCSSU/VYGjwNogrmI/AAAAAAAAA1Y/xgPrSXra3fE/s300-h300-c/darts-102919_1280.jpg",
    "link": "http://www.weblogtemplates.net/",
    "title": "Margaret McDuffy",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    "post_type": "post_photo",
	"friend_name": "Day Dream",
    "friend_image": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s100-c/blank-792125_1280.jpg",
    "tags": [
      "Link",
      "Link Post"
    ]
  },
  {
    "_id": 7,
    "image": "http://idaydream.newmemvp.build/photo/art/large_x2_16_9/9636416-15506660.jpg?v=1465317666",
	 "image_thumb": "http://1.bp.blogspot.com/-F508t9rbLAs/VYGj6BK-O1I/AAAAAAAAA1o/aPlZysKleoI/s300-h300-c/darts-155726_1280.png",
    "link": "http://www.skyafar.com/",
    "title": "Matt McCluster",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    "post_type": "post_photo",
	"friend_name": "Day Dream",
    "friend_image": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s100-c/blank-792125_1280.jpg",
    "tags": [
      "Link",
      "Link Post"
    ]
  }
];


    $scope.bookings = [
  {
    "_id": 1,
	 "title": "John Doe",
	 "job":"Photographer",
    "image": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s100-c/blank-792125_1280.jpg"
  },
  {
    "_id": 2,
	 "title": "Sam",
	 "job":"Guitarist",
    "image": "http://2.bp.blogspot.com/-YytBQ-VwmQc/VYGjnsxx_yI/AAAAAAAAA04/uncM-5p5MbI/s100-c/board-761586_1280.jpg"
  },
  {
    "_id": 3,
	 "title": "Max",
	 "job":"Videographer",
    "image": "http://1.bp.blogspot.com/-M0fdr0xWaaA/VYGjpZwTflI/AAAAAAAAA1I/f3sxnFuhMCc/s100-c/business-792113_1280.jpg"
  },
  {
    "_id": 4,
	 "title": "David",
	 "job":"Graphic Artist",
    "image": "http://3.bp.blogspot.com/-IvUXSLYsXwk/VYGjs7E23CI/AAAAAAAAA1Q/RDJcktzwYzQ/s100-c/cactus-787931_1280.jpg"
  },
  {
    "_id": 5,
	 "title": "Michael",
	 "job":"Programmer",
    "image": "http://1.bp.blogspot.com/-IMsTheNxIqo/VYGjyM2hLiI/AAAAAAAAA1g/ZQO2uRgQSU4/s100-c/cappadocia-805624_1280.jpg"
  },
  {
    "_id": 6,
	 "title": "Robert",
	 "job":"Social Media Special",
    "image": "http://3.bp.blogspot.com/-zR75pEKCSSU/VYGjwNogrmI/AAAAAAAAA1Y/xgPrSXra3fE/s100-c/darts-102919_1280.jpg"
  },
  {
    "_id": 7,
	 "title": "Christian",
	 "job":"Writer",
    "image": "http://1.bp.blogspot.com/-F508t9rbLAs/VYGj6BK-O1I/AAAAAAAAA1o/aPlZysKleoI/s100-c/darts-155726_1280.png"
  },
  {
    "_id": 8,
	 "title": "Thomas",
	 "job":"Costume Designer",
    "image": "http://3.bp.blogspot.com/-PzPenQ-FGz0/VYGj9bPPbCI/AAAAAAAAA1w/0xw6K-h5bz0/s100-c/girl-785304_1280.jpg"
  },
  {
    "_id": 9,
	 "title": "Richard",
	 "job":"Photographer",
    "image": "http://4.bp.blogspot.com/-Ips46dmnU6M/VYGj9ubrwyI/AAAAAAAAA10/pa7wuEboOdg/s100-c/monkey-161227_1280.png"
  },
  {
    "_id": 10,
	 "title": "William",
	 "job":"Web Developer",
    "image": "http://1.bp.blogspot.com/-BdewC981JO4/VYGkBpTdmOI/AAAAAAAAA2A/l1M0YOVSYiU/s100-c/pamukkale-14984_1280.jpg"
  },
  {
    "_id": 11,
	 "title": "Mary",
	 "job":"Producer",
    "image": "http://4.bp.blogspot.com/-hof2H_08j5E/VYGkEIxqg8I/AAAAAAAAA2I/i9zwpSI1DoI/s100-c/stork-782060_1280.jpg"
  },
  {
    "_id": 12,
	 "title": "Daniel",
	 "job":"Painter",
    "image": "http://4.bp.blogspot.com/-Ips46dmnU6M/VYGj9ubrwyI/AAAAAAAAA10/pa7wuEboOdg/s100-c/monkey-161227_1280.png"
  }
];
  
  
  $scope.friends = [
  {
    "_id": 1,
	 "title": "John Doe",
	 "job":"Photographer",
    "image": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s100-c/blank-792125_1280.jpg"
  },
  {
    "_id": 2,
	 "title": "Sam",
	 "job":"Guitarist",
    "image": "http://2.bp.blogspot.com/-YytBQ-VwmQc/VYGjnsxx_yI/AAAAAAAAA04/uncM-5p5MbI/s100-c/board-761586_1280.jpg"
  },
  {
    "_id": 3,
	 "title": "Max",
	 "job":"Videographer",
    "image": "http://1.bp.blogspot.com/-M0fdr0xWaaA/VYGjpZwTflI/AAAAAAAAA1I/f3sxnFuhMCc/s100-c/business-792113_1280.jpg"
  },
  {
    "_id": 4,
	 "title": "David",
	 "job":"Graphic Artist",
    "image": "http://3.bp.blogspot.com/-IvUXSLYsXwk/VYGjs7E23CI/AAAAAAAAA1Q/RDJcktzwYzQ/s100-c/cactus-787931_1280.jpg"
  },
  {
    "_id": 5,
	 "title": "Michael",
	 "job":"Programmer",
    "image": "http://1.bp.blogspot.com/-IMsTheNxIqo/VYGjyM2hLiI/AAAAAAAAA1g/ZQO2uRgQSU4/s100-c/cappadocia-805624_1280.jpg"
  },
  {
    "_id": 6,
	 "title": "Robert",
	 "job":"Social Media Special",
    "image": "http://3.bp.blogspot.com/-zR75pEKCSSU/VYGjwNogrmI/AAAAAAAAA1Y/xgPrSXra3fE/s100-c/darts-102919_1280.jpg"
  },
  {
    "_id": 7,
	 "title": "Christian",
	 "job":"Writer",
    "image": "http://1.bp.blogspot.com/-F508t9rbLAs/VYGj6BK-O1I/AAAAAAAAA1o/aPlZysKleoI/s100-c/darts-155726_1280.png"
  },
  {
    "_id": 8,
	 "title": "Thomas",
	 "job":"Costume Designer",
    "image": "http://3.bp.blogspot.com/-PzPenQ-FGz0/VYGj9bPPbCI/AAAAAAAAA1w/0xw6K-h5bz0/s100-c/girl-785304_1280.jpg"
  },
  {
    "_id": 9,
	 "title": "Richard",
	 "job":"Photographer",
    "image": "http://4.bp.blogspot.com/-Ips46dmnU6M/VYGj9ubrwyI/AAAAAAAAA10/pa7wuEboOdg/s100-c/monkey-161227_1280.png"
  },
  {
    "_id": 10,
	 "title": "William",
	 "job":"Web Developer",
    "image": "http://1.bp.blogspot.com/-BdewC981JO4/VYGkBpTdmOI/AAAAAAAAA2A/l1M0YOVSYiU/s100-c/pamukkale-14984_1280.jpg"
  },
  {
    "_id": 11,
	 "title": "Mary",
	 "job":"Producer",
    "image": "http://4.bp.blogspot.com/-hof2H_08j5E/VYGkEIxqg8I/AAAAAAAAA2I/i9zwpSI1DoI/s100-c/stork-782060_1280.jpg"
  },
  {
    "_id": 12,
	 "title": "Daniel",
	 "job":"Painter",
    "image": "http://4.bp.blogspot.com/-Ips46dmnU6M/VYGj9ubrwyI/AAAAAAAAA10/pa7wuEboOdg/s100-c/monkey-161227_1280.png"
  }
];
  
  
  
})



function ContentController($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}
