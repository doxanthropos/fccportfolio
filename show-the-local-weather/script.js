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
      /* my key for OpenWeatherMap: 420a256bd565195fc4cfe5da7c01cf51 */
      var key = "420a256bd565195fc4cfe5da7c01cf51";
      var url = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&APPID=420a256bd565195fc4cfe5da7c01cf51";
      $.getJSON(url,function(weather){
        var city = weather.name;
        document.getElementById("location").innerHTML = city + ", " + weather.sys.country;
        document.getElementById("temperatureC").innerHTML = (Math.round(weather.main.temp-273.15));
        /* converting to Fahrenheit according to http://www.rapidtables.com/convert/temperature/how-kelvin-to-fahrenheit.htm */
        document.getElementById("temperatureF").innerHTML = (Math.round((weather.main.temp*9/5)-459.67));
        document.getElementById("description").innerHTML = weather.weather[0].description;
        document.getElementById("weatherIcon").src = "https://openweathermap.org/img/w/"+weather.weather[0].icon+".png"
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
