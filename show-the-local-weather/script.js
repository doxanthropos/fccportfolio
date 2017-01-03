window.onload = function(){
  var latitude;// = 50.314382099999996;
  var longitude;// =7.5623594;

  /*
  First we need to find the users location
  */
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position){
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      console.log("Latitude : " + latitude);
      console.log("Longitude : " + longitude);
      /* my key for OpenWeatherMap: 420a256bd565195fc4cfe5da7c01cf51 */
      var url = "http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=420a256bd565195fc4cfe5da7c01cf51";
      $.getJSON(url,function(weather){
        console.log(weather)
      });
    });
  } else {
    console.log("geolocation IS NOT available");
  }



  /*
  Secondly based on the location, we ask OpenWeatherMap for the weather in this location.
  */

  /*
  And lastly we display the weather on the page
  */

}
