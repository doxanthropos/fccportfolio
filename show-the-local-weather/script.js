window.onload = function(){

/*
First we need to find the users location
*/
if ("geolocation" in navigator) {
  console.log("geolocation is available");
} else {
  console.log("geolocation IS NOT available");
}

navigator.geolocation.getCurrentPosition(function(position){
  console.log("Latitude  : " + position.coords.latitude);
  console.log("Longitude : " + position.coords.longitude);
});

/*
Secondly based on the location, we ask OpenWeatherMap for the weather in this location.
*/

/*
And lastly we display the weather on the page
*/

}
