(function(){
	'use strict';

		var app = angular.module('yipperApp', ['ngResource', 'ngRoute']);

/////////////////////////========CONTROLLERS=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
	app.controller('PhraseCtrl', ['$scope', '$timeout', '$resource',  function($scope, $timeout, $resource){
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
	}]);

	app.controller('FirstPageCtrl', ['$scope', function($scope){

	}])

	app.controller('SecondPageCtrl', ['$scope', function($scope){

	}])

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
