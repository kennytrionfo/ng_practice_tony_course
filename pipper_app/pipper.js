'use strict';
var angularApp = angular.module('pipperApp', ['ngRoute']);

/////////////////////////========Controllers=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
	angularApp.controller('phraseCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
		$scope.phrase = "If the elevator tries to break you down, go crazy! ";
		$timeout(function() {
			$scope.phrase = "I should be here in 2 seconds!";
		}, 2000);
	}]); 

	angularApp.controller('handleCtrl', ['$scope', function ($scope) {
		$scope.handle = "";
	}]);

	angularApp.controller('firstCtrl', ['$scope', 'customService', function ($scope, customService) {
		$scope.billybob = customService.customServiceVar;
	}]);

	angularApp.controller('secondCtrl', ['$scope', 'anotherService', function ($scope, anotherService) {
		$scope.freddie = anotherService.anotherServiceVar;
	}]);

	angularApp.controller('searchCtrl', ['$scope', function ($scope) {
		$scope.title = '';
		$scope.person = {
			name: 'Fuffy Funnelcakes',
			address: '333 Funky House Lane'
		};
	}]);


/////////////////////////========Services=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
	angularApp.service('customService', function() {
		this.customServiceVar = "I'm a customServiceVar!";
	});

	angularApp.service('anotherService', function() {
		this.anotherServiceVar = "I'm the Var from the anotherService Service. yeah. . ";
	});

/////////////////////////========Routes=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
	angularApp.config(function($routeProvider) {
		$routeProvider
			.when('/',  {
				templateUrl: 'pages/home.html', 
				// controller: 'handleCtrl' 
			}) 
			.when('/first',  {
				templateUrl: 'pages/first.html', 
				controller: 'firstCtrl'
			}) 
			.when('/second', {
				templateUrl: 'pages/second.html',
				controller: 'secondCtrl'
			})
			.when('/search', {
				templateUrl: 'pages/search.html',
				controller: 'searchCtrl'
			});
	});

/////////////////////////========Directives=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
	angularApp.directive('searchResult', function() {
		return {
			templateUrl: 'directives/searchresult.html'
		};
	});
	angularApp.directive('searchResult2', function() {
		return {
			template: '<a href="" class="list-group-item "><h4 class="list-group-item-heading">Sidney Siddys</h4><p class="list-group-item-text">555 Main St., New York, NY 55555 </p></a>'
		};
	});



