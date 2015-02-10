var meetingApp = angular.module('meeting',['ui.router'])
	.config(function config($stateProvider){
		$stateProvider.state('meeting',{
			url: '/meeting',
			templateUrl: 'meeting.html',
			controller: 'meetingCtrl'
		});
	})
	.controller('meetingCtrl',function($scope){
		$scope.message='ng-work';
						

	});