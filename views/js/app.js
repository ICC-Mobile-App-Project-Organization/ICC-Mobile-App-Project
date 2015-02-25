var profileApp = angular.module('routerApp',
	['ui.router']);

profileApp.config(
	
	function($stateProvider,$urlRouterProvider){

	//$urlRouterProvider.otherwise('/dashboard');

	$stateProvider

		.state('map', {
	    url: '/map',
	    templateUrl: 'map.html',
	    controller: function($scope) {
	        $scope.message =' ng work';
	    }
	})