//vars
var map;
var pinsDidLoad=false;
var selectedMarker;
var selectedInfowindow;
var tempMarker;
var counter=0;
var positions;
var addButton;
var cancelButton;
var url = "http://localhost:3003/api/pins";



var routerApp = angular.module('routerApp',
	['ui.router']);


routerApp.factory('PositionManager', ['$http', function(http){
    return{
        list:function(callback){
            http({
                method: 'GET',
                url: url,
                cache: true
            }).success(callback);
        },
        push:function(data, callback){
            http({
                method: 'POST',
                url: url,
                data: data
            }).success(callback);
        }
    };
}]);


routerApp.config(
	
	function($stateProvider,$urlRouterProvider){

	//$urlRouterProvider.otherwise('/dashboard');

	$stateProvider

		.state('map', {
	    url: '/map',
	    templateUrl: 'map.html',
	    controller: ['$scope', 'PositionManager', function(scope, PositionManager){
            initMap(scope,PositionManager);
            scope.message = 'ui router works';
            scope.positions={};

            positions = scope.positions;

            scope.add = function (){
                var name = document.getElementById("nameInput").value;
                document.getElementById("nameInput").value="";
                var newPin = {name:name,lat:tempMarker.position.lat(),lng:tempMarker.position.lng()};
                PositionManager.push(newPin,function(data){
                    scope.positions[data._id] ={name:data.name,lat:data.lat, lng:data.lng};
                    tempMarker.setAnimation(null);
                    tempMarker.infowindow.close();
                    tempMarker=null;
                    addButton.disabled = true;
                    cancelButton.disabled=true;
                    cancelButton.disabled=true;
                });
            }

            scope.moveTo = function(){
                    positions["5"] = {name: "test", lat: "123", lng: "312"};
            }

        }]
	});
	});






       //map functions
        function initMap(scope,PositionManager) {
                console.log('initMap called');
                ouputText = document.getElementById("position");
                addButton = document.getElementById("addButton");
                cancelButton = document.getElementById("cancelButton");

                addButton.disabled = true;
                cancelButton.disabled=true;
                var mapProp = {
                    center:new google.maps.LatLng(40.7127,-74.0059),
                    zoom:5,
                    disableDoubleClickZoom:true,
                    disableDefaultUI:true,
                    mapTypeId:google.maps.MapTypeId.ROADMAP
                };
                map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

                PositionManager.list(function (data) {
                    for (i in data) {
                        scope.positions[data[i]._id] = {name:data[i].name,lat:data[i].lat, lng:data[i].lng};
                        dropPin(data[i]._id, data[i].lat, data[i].lng);
                    }
                    pinsDidLoad=true;
                });

                setMapOnclickListener(map);
            }


        function dropPin(id,lat,lng){
            var pinCenter = new google.maps.LatLng(lat,lng);
            var marker=new google.maps.Marker({
                position:pinCenter,
                animation:google.maps.Animation.DROP,
                id:id
            });

            if(pinsDidLoad){
                marker.setAnimation(google.maps.Animation.BOUNCE);
                marker.infowindow = new google.maps.InfoWindow({
                    content:"<p id='infoContent'>New mark</p>"
                });

                marker.infowindow.open(map,marker);
                tempMarker = marker;
            }
            setMarkerOnClickListener(marker);
            marker.setMap(map);
            ouputText.innerHTML = "dropPinAt:"+id+" "+lat+","+lng;
        }

        function setMapOnclickListener(map){
            google.maps.event.addListener(map, 'click', function(event) {
                if(tempMarker){
                    removePin(tempMarker);
                }
                if(selectedMarker){
                    selectedMarker.setAnimation(null);
                    selectedMarker.infowindow.close();
                }

                selectedMarker = null;
                selectedInfowindow = null;

                dropPin("0",event.latLng.lat(),event.latLng.lng());
                addButton.disabled = false;
                cancelButton.disabled=false;
            });
        }

        function setMarkerOnClickListener(marker){
            google.maps.event.addListener(marker, 'click', function() {
                var lat = marker.getPosition().lat();
                var lng = marker.getPosition().lng();
                if(tempMarker){
                    removePin(tempMarker);
                }
                if(selectedMarker){
                    selectedMarker.setAnimation(null);
                    selectedMarker.infowindow.close();
                }
                marker.setAnimation(google.maps.Animation.BOUNCE);

                marker.infowindow = new google.maps.InfoWindow({
                    content:"<p id='infoContent'>"+positions[marker.get("id")].name+"</p>"
                });

                marker.infowindow.open(map,marker);
                selectedMarker = marker;
                addButton.disabled = true;
                cancelButton.disabled=true;
            });
        }

        function removePin(marker){
            marker.infowindow=null;
            marker.setMap(null);
            marker = null;
        }

        function cancel(){
            addButton.disabled = true;
            cancelButton.disabled=true;
            removePin(tempMarker);
        }