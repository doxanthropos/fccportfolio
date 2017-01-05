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
      /* Secondly, we get the weather data for the location */
      /* my key for OpenWeatherMap: 420a256bd565195fc4cfe5da7c01cf51 */
      var key = "420a256bd565195fc4cfe5da7c01cf51";
      var url = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&APPID=420a256bd565195fc4cfe5da7c01cf51";
      $.getJSON(url,function(weather){
        var city = weather.name;
        console.log(city);
        /* Finally we display the data on the website */
        document.getElementById("location").innerHTML = city + ", " + weather.sys.country;
        document.getElementById("temperatureC").innerHTML = (Math.round(weather.main.temp-273.15));
        /* converting to Fahrenheit according to http://www.rapidtables.com/convert/temperature/how-kelvin-to-fahrenheit.htm */
        document.getElementById("temperatureF").innerHTML = (Math.round((weather.main.temp*9/5)-459.67));
        document.getElementById("description").innerHTML = weather.weather[0].description;
        document.getElementById("weatherIcon").className = "wi wi-owm-"+weather.weather[0].id;
      });
    });
  } else {
    console.log("geolocation IS NOT available");
  }
}
/* From here on you will find the UI */
/* switching between Fahrenheit and Celsius */

$("#celsius").click(function(){
  this.style.display = "none";
  document.getElementById("fahrenheit").style.display = "block";
});
$("#fahrenheit").click(function(){
  this.style.display = "none";
  document.getElementById("celsius").style.display = "block";
});
