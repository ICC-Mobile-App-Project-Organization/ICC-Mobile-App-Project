
var trendsApp = angular.module('trends',['ui.router'])
	.config(function config($stateProvider){
		$stateProvider.state('trends',{
			url: '/trends',
			templateUrl: 'trends.html',
			controller: 'trendsCtrl'
		});
	})
	.controller('trendsCtrl',function($scope){
		$scope.message='ng-work';
						

	});