
// --------------------------------------------------------------
// --------------------------------------------------------------
// Start weather ... 
// create object weather ... 
let weather = 
    {
        // api key ... 
        "apiKey": '4db4e516257f52e613846cc45473cce6',
        //  api weather ... 
        fetchWeather: function(city) 
        {
            fetch("https://api.openweathermap.org/data/2.5/weather?q="
             + city 
             + " &units=metric&appid="
             + this.apiKey
             )

             .then((response) => {
                if (!response.ok) {    
                  // Error Notification ... 
                  swal("OOPS!", "No Weather Found!", "error");

                  throw new Error("No weather found.");
                                    
                }
                return response.json();
              })
              .then((data) => this.displayWeather(data));
          },


        displayWeather: function(data){

            const { name } = data;
            const { icon, description } = data.weather[0];
            const { temp, humidity } = data.main;
            const { speed } = data.wind;
            document.querySelector(".city").innerText = "Weather in " + name;
            document.querySelector(".icon-weather").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".description-weather").innerText = description;
            document.querySelector(".temp").innerText = temp + "°C";
            document.querySelector(".humidity").innerText =
            "Humidity: " + humidity + "%";
            document.querySelector(".wind").innerText =
            "Wind speed: " + speed + " km/h";
            document.querySelector(".weather").classList.remove("loading");
            document.body.style.backgroundImage =
            "url('https://source.unsplash.com/1600x900/?" + name + "')";
        },
        

            search: function () {
            this.fetchWeather(document.querySelector(".search-weather-bar").value);
          },

      };

        

        // action ... 
        document.querySelector(".btn-weather").addEventListener("click", function () {
            weather.search();
          });

          

          document.querySelector(".search-weather-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }

  });

  weather.fetchWeather("Gaza");

// End  weather ... 
// --------------------------------------------------------------
// --------------------------------------------------------------

// -------------------------------------------------------------
// -------------------------------------------------------------

/*=============== Start SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
  // reset: true /* Animations repeat */
})



sr.reveal('.card-weather,.search-weather,.search-weather-bar,.weather loading,.flex-weather,.humidity,.wind,.custom-shape-divider-bottom-1671040044');

sr.reveal('.card-weather', {delay:1000,origin:'left', interval: 500});
sr.reveal('.search-weather',{origin:'top'});



// -------------------------------------------------------------
// End JS ............ 
// -------------------------------------------------------------



