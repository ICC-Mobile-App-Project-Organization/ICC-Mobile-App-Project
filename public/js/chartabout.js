//Get context with jQuery - using jQuery's .get() method.
		var ctx0 = $("#myChart0").get(0).getContext("2d");
		var ctx1 = $("#myChart1").get(0).getContext("2d");
		var ctx2 = $("#myChart2").get(0).getContext("2d");
		var ctx3 = $("#myChart3").get(0).getContext("2d");
		var ctx4 = $("#myChart4").get(0).getContext("2d");
		var ctx5 = $("#myChart5").get(0).getContext("2d");
		//This will get the first returned node in the jQuery collection.
		/*
		var data = {
				labels : ["January","February","March","April","May","June","July"],
				datasets : [
						{
							fillColor : "rgba(220,220,220,0.5)",
							strokeColor : "rgba(220,220,220,1)",
							pointColor : "rgba(220,220,220,1)",
							pointStrokeColor : "#fff",
							data : [65,59,90,81,56,55,40]
						},
						{
							fillColor : "rgba(151,187,205,0.5)",
							strokeColor : "rgba(151,187,205,1)",
							pointColor : "rgba(151,187,205,1)",
							pointStrokeColor : "#fff",
							data : [28,48,40,19,96,27,100]
						}
							]					
		}
					var myLineChart = new Chart(ctx).Line(data);
					*/
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
					var myBarChart = new Chart(ctx0).Bar(data0,{animationSteps: 15});
					var myRadarChart = new Chart(ctx1).Radar(data1,{animationSteps: 15});
					var myLineChart = new Chart(ctx2).Line(data2,{animationSteps: 15});
					var myPolarArea = new Chart(ctx3).PolarArea(data3);
					var myPieChart = new Chart(ctx4).Pie(data4);
					var myDoughnutChart = new Chart(ctx5).Doughnut(data4);

					var latestLabel0 = data0.labels[6];
					var latestLabel1 = data1.labels[6];
					var latestLabel2 = data2.labels[6];

setInterval(function(){
  // Add two random numbers for each dataset
  myBarChart.addData([Math.random() * 100, Math.random() * 100], ++latestLabel0);
  myRadarChart.addData([Math.random() * 100, Math.random() * 100], ++latestLabel1);
  myLineChart.addData([Math.random() * 100, Math.random() * 100], ++latestLabel2);
  if(latestLabel0==12){
  	latestLabel0=latestLabel1=latestLabel2=0;
  }
  // Remove the first point so we dont just add values forever
  myBarChart.removeData();
  myRadarChart.removeData();
  myLineChart.removeData();
}, 3000);



//************************
/*
    function setTime() {
        var currentTime = new Date();
        document.getElementById("htmer_time").innerHTML
        ="TIME:" + currentTime.getHours() + ":" 
        + currentTime.getMinutes() + ":"+ currentTime.getSeconds() + "." ;
    }
    setInterval(setTime,1000);
    
    */