(function(){
	'use strict';

		var app = angular.module('yipperApp', ['ngResource', 'ngRoute']);

/////////////////////////========CONTROLLERS=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
	app.controller('PhraseCtrl', ['$scope', '$timeout', '$resource', 'customService',  function($scope, $timeout, $resource, customService){
		$scope.randomPhrase = "This life is more than just a read-through. ";
		
		$scope.handle = '';
		
		$timeout(function(){
			$scope.randomPhrase = "I should show up after 2 seconds!";
		}, 2000);

		$scope.characters = 3; 

		$scope.alertClick = function(){
			alert("Hey there.");
		};

		$scope.fakeData = $resource('books_file.json').get().$promise.then(function(data){
			$scope.book_info = data.books;
		});
		console.log($scope.book_info);

		$scope.fizzy = customService.customServiceVar;

		$scope.person = {
			name: 'Peek-a-boo Pinkie',
			address: '5 Simple Lane'
		}

	}]);

	app.controller('FirstPageCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
		$scope.num = $routeParams.num || 'No value yet';
	}]);

	app.controller('SecondPageCtrl', ['$scope', function($scope){

	}]);

/////////////////////////========DIRECTIVES=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
	app.directive('searchResult', function(){
		return {
			templateUrl: 'directives/name_and_address.html', 
			replace: true,
			personName: "@"
		}
	});

/////////////////////////========SERVICES=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
	app.service('customService', function(){
		this.customServiceVar = "I hate myself for lovin you."
	});

/////////////////////////========ROUTES=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
	app.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'pages/landing.html', 
				controller: 'PhraseCtrl'
			})	
			.when('/first', {
				templateUrl: 'pages/first_page.html', 
				controller: 'PhraseCtrl'
			})			
			.when('/books', {
				templateUrl: 'pages/books_table.html', 
				controller: 'PhraseCtrl'
			})
			.when('/first/:num', {
				templateUrl: 'pages/first_page.html',
				controller: 'PhraseCtrl'
			});
	});

})();
