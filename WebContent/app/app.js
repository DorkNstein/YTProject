
(function(){
	
var app = angular.module("YTapp",["ngRoute","ngSanitize"]);

app.config(function($routeProvider){
	$routeProvider
				.when("/users/:username",{
					templateUrl: '../views/user.html',
					controller:'UserController'
				})
				
				.otherwise({redirectTo:"/main"});
	
});


// app.config(['$httpProvider', function($httpProvider) {
//   $httpProvider.defaults.withCredentials = true;
// }])

}());