$(function() {
			navigator.geolocation.getCurrentPosition(locationSuccess,function(){alert("did not manage to get location");})
		});

		function locationSuccess(location) {
  		alert(location.coords.latitude+" "+location.coords.longitude);
  		latlon = location.coords.latitude+','+location.coords.longitude;
		
		
		