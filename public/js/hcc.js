var hccApp = angular.module('hcc',['ui.router'])
	.config(function config($stateProvider){
		$stateProvider.state('hcc',{
			url: '/hcc',
			templateUrl: 'hcc.html',
			controller: 'hccCtrl'
		});
	})
	.controller('hccCtrl',function($scope,$http){
    $http.get('dummy_data.json')
    .success(function(response) 
	{
		$scope.employees = response.employees;
	});
	
	
	$scope.addUser = function()
	{
	  var newEmp = {
	     "name": $scope.newName,
		 "class": $scope.newSkill
	  };
	   $scope.employees.push(newEmp);
	}
	
	$scope.editUser = function(name)
	{
	 for(i in $scope.employees) {
            if($scope.employees[i].name == name) {
            $scope.newName = $scope.employees[i].name;
			 $scope.newSkill = $scope.employees[i].class;
			 $scope.temp_id = $scope.employees[i].id;
            }
        }  
	
	}
	
	$scope.saveEditChanges = function()
	{
       for(i in $scope.employees) {
            if($scope.employees[i].id ==  $scope.temp_id) {
               $scope.employees[i].name =  $scope.newName;
		       $scope.employees[i].class = 	 $scope.newSkill;
            }
        }  		
	}
		$scope.deleteUser = function()
	{	
       for(i in $scope.employees) {
            if($scope.employees[i].id ==  $scope.temp_id) {
             $scope.employees.splice(i,1);  
            }
        }  		
	}
	
});
/*
sampleApp .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/addOrder', {
        templateUrl: 'templates/add-order.html',
        controller: 'AddOrderController'
      }).
      when('/showOrders', {
        templateUrl: 'templates/show-orders.html',
        controller: 'ShowOrdersController'
      }).
      otherwise({
        redirectTo: '/addOrder'
      });
  }]);
  */