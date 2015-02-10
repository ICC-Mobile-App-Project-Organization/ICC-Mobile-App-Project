
var dashboardApp = angular.module('dashboard',['ui.router'])
	.config(function config($stateProvider){
		$stateProvider.state('dashboard',{
			url: '/dashboard',
			templateUrl: 'dashboard.html',
			controller: 'dashboardCtrl'
		});
	})
	.controller('dashboardCtrl',function($scope){
		$scope.message='Getting started';
    $scope.menuState = {  show: true   }   
    $scope.toggleMenu = function() {  
    $scope.menuState.show = !$scope.menuState.show;  
    }    
    $scope.toggle = true;
    var ctx0 = $("#myChart0").get(0).getContext("2d");
    var ctx1 = $("#myChart1").get(0).getContext("2d");
    var ctx2 = $("#myChart2").get(0).getContext("2d");
    var ctx3 = $("#myChart3").get(0).getContext("2d");
    var ctx4 = $("#myChart4").get(0).getContext("2d");
    var ctx5 = $("#myChart5").get(0).getContext("2d");

          var data0 = {
                  labels: ["1", "2", "3", "4", "5", "6", "7"],
                  datasets: [
                      {
                          label: "My First dataset",
                          fillColor: "rgba(220,220,220,0.5)",
                          strokeColor: "rgba(220,220,220,0.8)",
                          highlightFill: "rgba(220,220,220,0.75)",
                          highlightStroke: "rgba(220,220,220,1)",
                          data: [65, 59, 80, 81, 56, 55, 40]
                      },
                      {
                          label: "My Second dataset",
                          fillColor: "rgba(151,187,205,0.5)",
                          strokeColor: "rgba(151,187,205,0.8)",
                          highlightFill: "rgba(151,187,205,0.75)",
                          highlightStroke: "rgba(151,187,205,1)",
                          data: [28, 48, 40, 19, 86, 27, 90]
                      }
                  ]
                };


      var data1 = {
                  labels: ["1", "2", "3", "4", "5", "6", "7"],
                  datasets: [
                      {
                          label: "My First dataset",
                          fillColor: "rgba(220,220,220,0.2)",
                          strokeColor: "rgba(220,220,220,1)",
                          pointColor: "rgba(220,220,220,1)",
                          pointStrokeColor: "#fff",
                          pointHighlightFill: "#fff",
                          pointHighlightStroke: "rgba(220,220,220,1)",
                          data: [65, 59, 90, 81, 56, 55, 40]
                      },
                      {
                          label: "My Second dataset",
                          fillColor: "rgba(151,187,205,0.2)",
                          strokeColor: "rgba(151,187,205,1)",
                          pointColor: "rgba(151,187,205,1)",
                          pointStrokeColor: "#fff",
                          pointHighlightFill: "#fff",
                          pointHighlightStroke: "rgba(151,187,205,1)",
                          data: [28, 48, 40, 19, 96, 27, 100]
                      }
                  ]
              };

      var data2 = {
                labels: ["1", "2", "3", "4", "5", "6", "7"],
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(151,187,205,0.2)",
                        strokeColor: "rgba(151,187,205,1)",
                        pointColor: "rgba(151,187,205,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
        };
      var data3 = [
                {
                    value: 300,
                    color:"#F7464A",
                    highlight: "#FF5A5E",
                    label: "Red"
                },
                {
                    value: 50,
                    color: "#46BFBD",
                    highlight: "#5AD3D1",
                    label: "Green"
                },
                {
                    value: 100,
                    color: "#FDB45C",
                    highlight: "#FFC870",
                    label: "Yellow"
                },
                {
                    value: 40,
                    color: "#949FB1",
                    highlight: "#A8B3C5",
                    label: "Grey"
                },
                {
                    value: 120,
                    color: "#4D5360",
                    highlight: "#616774",
                    label: "Dark Grey"
                }

          ];
        var data4 = [
                  {
                      value: 300,
                      color:"#F7464A",
                      highlight: "#FF5A5E",
                      label: "Red"
                  },
                  {
                      value: 50,
                      color: "#46BFBD",
                      highlight: "#5AD3D1",
                      label: "Green"
                  },
                  {
                      value: 100,
                      color: "#FDB45C",
                      highlight: "#FFC870",
                      label: "Yellow"
                  }
              ]
          var myBarChart = new Chart(ctx0).Bar(data0,{animationSteps: 60});
          var myRadarChart = new Chart(ctx1).Radar(data1,{animationSteps: 60});
          var myLineChart = new Chart(ctx2).Line(data2,{animationSteps: 60});
          var myPolarArea = new Chart(ctx3).PolarArea(data3);
          var myPieChart = new Chart(ctx4).Pie(data4);
          var myDoughnutChart = new Chart(ctx5).Doughnut(data4);
          
          var latestLabel0 = data0.labels[6];
          var latestLabel1 = data1.labels[6];
          var latestLabel2 = data2.labels[6];



	})


	.directive('myDraggable', ['$document', function($document) {
  		return function(scope, element, attr) {
    	var startX = 0, startY = 0, x = 0, y = 0;

    element.css({
     position: 'relative',
     cursor: 'pointer'
    });

    element.on('mousedown', function(event) {
      // Prevent default dragging of selected content
      event.preventDefault();
      startX = event.pageX - x;
      startY = event.pageY - y;
      $document.on('mousemove', mousemove);
      $document.on('mouseup', mouseup);
    });

    function mousemove(event) {
      y = event.pageY - startY;
      x = event.pageX - startX;
      element.css({
        top: y + 'px',
        left:  x + 'px'
      });
    }

    function mouseup() {
      $document.off('mousemove', mousemove);
      $document.off('mouseup', mouseup);
    }
  };
}]);

