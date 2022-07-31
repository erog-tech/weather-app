// This display default value
  // This is used to call  and change city
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=metric&appid='
  // console.log(url) 

  const api_key = config.OPEN_WEATHER_API_KEY
    fetch(`${url}${api_key}`)
      .then(function (response) {
        return response.json();
        })
      .then(function (data) {
  
        console.log(data)
        // this is used to display icon
        let iconurl = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        $('.wicon').attr('src', iconurl);
  
         // this is used to display city
         $('.city').each(function () {
          $('.city').text(data.name);
        });
  
         // this is used to display temperature
         $('.temp').each(function () {
          let temp = Math.round(data.main.temp) + ' ' + '°C'
          $('.temp').text('Temp: '+temp)
        });
  
         // this is used to display Wind
         $('.wind').each(function () {
          let wind = data.wind.speed + ' ' + 'km/h'
          $('.wind').text('Wind: '+wind)
        });
  
        // this is used to display Humidity
        $('.humidity').each(function () {
          let humidity = data.main.humidity + ' ' + '%'
          $('.humidity').text('Humidity: '+humidity)
        });
  
        // this is used to display date
      $('.date').each(function () {
      let date = new Date(data.dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
      console.log($('.date').text(date))
        });
       
        
        // this is used to get Lat
        $('.lat').each(function () {
          let lat = data.coord.lat
          $('.lat').text(lat)
        });

        // this is used to get Lon
        $('.lon').each(function () {
          let lon = data.coord.lon
          $('.lon').text(lon)
        });
        
  let lat = $(".lat").html();
  console.log(lat)
  let lon = $(".lon").html();
  console.log(lon)
  // let url = ''
  // This is used to call  and change city
  let url1 = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=metric&appid='
  // console.log(url) 

  const api_key1 = config.OPEN_WEATHER_API_KEY
    fetch(`${url1}${api_key1}`)
      .then(function (response) {
        return response.json();
        })
      .then(function (data) {
  
        console.log(data)

     // this is used to display UV-index
      $('.uv-index').each(function () {
        let uvi = data.current.uvi + ' ' + '%'
        $('.uv-index').text('UV Index: '+uvi)
      });

      // this is used to display date1
      $('.date1').each(function () {
        let date1 = new Date(data.daily[0].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date1').text(date1))
          });

      // this is used to display date2
      $('.date2').each(function () {
        let date2 = new Date(data.daily[1].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date2').text(date2))
          });
      // this is used to display date3
      $('.date3').each(function () {
        let date3 = new Date(data.daily[2].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date3').text(date3))
          });

      // this is used to display date4
      $('.date4').each(function () {
        let date4 = new Date(data.daily[3].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date4').text(date4))
          });

      // this is used to display date5
      $('.date5').each(function () {
        let date5 = new Date(data.daily[4].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date5').text(date5))
          });

      
      // this is used to display icon1
      let iconurl1 = "https://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png"
      $('.wicon1').attr('src', iconurl1);

      // this is used to display icon1
      let iconurl2 = "https://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png"
      $('.wicon2').attr('src', iconurl2);

      // this is used to display icon1
      let iconurl3 = "https://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png"
      $('.wicon3').attr('src', iconurl3);

      // this is used to display icon1
      let iconurl4 = "https://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png"
      $('.wicon4').attr('src', iconurl4);

      // this is used to display icon1
      let iconurl5 = "https://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png"
      $('.wicon5').attr('src', iconurl5);

      // this is used to display temperature1
      $('.temp1').each(function () {
        let temp1 = Math.round(data.daily[0].temp.max) + ' ' + '°C'
        $('.temp1').text('Temp: '+temp1)
      });

      // this is used to display temperature2
      $('.temp2').each(function () {
        let temp2 = Math.round(data.daily[1].temp.max) + ' ' + '°C'
        $('.temp2').text('Temp: '+temp2)
      });

      // this is used to display temperature3
      $('.temp3').each(function () {
        let temp3 = Math.round(data.daily[2].temp.max) + ' ' + '°C'
        $('.temp3').text('Temp: '+temp3)
      });

      // this is used to display temperature4
      $('.temp4').each(function () {
        let temp4 = Math.round(data.daily[3].temp.max) + ' ' + '°C'
        $('.temp4').text('Temp: '+temp4)
      });

      // this is used to display temperature5
      $('.temp5').each(function () {
        let temp5 = Math.round(data.daily[4].temp.max) + ' ' + '°C'
        $('.temp5').text('Temp: '+temp5)
      });

      // this is used to display Wind1
      $('.wind1').each(function () {
        let wind1 = data.daily[0].wind_speed + ' ' + 'km/h'
        $('.wind1').text('Wind: '+wind1)
      });

      // this is used to display Wind2
      $('.wind2').each(function () {
        let wind2 = data.daily[1].wind_speed + ' ' + 'km/h'
        $('.wind2').text('Wind: '+wind2)
      });

      // this is used to display Wind3
      $('.wind3').each(function () {
        let Wind3 = data.daily[2].wind_speed + ' ' + 'km/h'
        $('.wind3').text('Wind: '+Wind3)
      });

      // this is used to display Wind4
      $('.wind4').each(function () {
        let wind4 = data.daily[3].wind_speed + ' ' + 'km/h'
        $('.wind4').text('Wind: '+wind4)
      });

      // this is used to display Wind5
      $('.wind5').each(function () {
        let Wind5 = data.daily[4].wind_speed + ' ' + 'km/h'
        $('.wind5').text('Wind: '+Wind5)
      });


      // this is used to display Humidity1
      $('.humidity1').each(function () {
        let humidity1 = data.daily[0].humidity + ' ' + '%'
        $('.humidity1').text('Humidity: '+humidity1)
      });

      // this is used to display Humidity2
      $('.humidity2').each(function () {
        let humidity2 = data.daily[1].humidity + ' ' + '%'
        $('.humidity2').text('Humidity: '+humidity2)
      });

      // this is used to display Humidity3
      $('.humidity3').each(function () {
        let humidity3= data.daily[2].humidity + ' ' + '%'
        $('.humidity3').text('Humidity: '+humidity3)
      });

      // this is used to display Humidity4
      $('.humidity4').each(function () {
        let humidity4 = data.daily[3].humidity + ' ' + '%'
        $('.humidity4').text('Humidity: '+humidity4)
      });

      // this is used to display Humidity5
      $('.humidity5').each(function () {
        let humidity5 = data.daily[4].humidity + ' ' + '%'
        $('.humidity5').text('Humidity: '+humidity5)
      });

      });
        
      });
      console.log(url) 


// This fetches the weather URL and API key

   function changeCity() 
   {
  let city = $("#site-search").val();
  console.log(city)
  // let url = ''
  // This is used to call  and change city
  let url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='
  // console.log(url) 

  const api_key = config.OPEN_WEATHER_API_KEY
    fetch(`${url}${api_key}`)
      .then(function (response) {
        return response.json();
        })
      .then(function (data) {
  
        console.log(data)
        // this is used to display icon
        let iconurl = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        $('.wicon').attr('src', iconurl);
  
         // this is used to display city
         $('.city').each(function () {
          $('.city').text(data.name);
        });
  
         // this is used to display temperature
         $('.temp').each(function () {
          let temp = Math.round(data.main.temp) + ' ' + '°C'
          $('.temp').text('Temp: '+temp)
        });
  
         // this is used to display Wind
         $('.wind').each(function () {
          let wind = data.wind.speed + ' ' + 'km/h'
          $('.wind').text('Wind: '+wind)
        });
  
        // this is used to display Humidity
        $('.humidity').each(function () {
          let humidity = data.main.humidity + ' ' + '%'
          $('.humidity').text('Humidity: '+humidity)
        });
  
        // this is used to display date
      $('.date').each(function () {
      let date = new Date(data.dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
      console.log($('.date').text(date))
        });
       
        
        // this is used to get Lat
        $('.lat').each(function () {
          let lat = data.coord.lat
          $('.lat').text(lat)
        });

        // this is used to get Lon
        $('.lon').each(function () {
          let lon = data.coord.lon
          $('.lon').text(lon)
        });
        
  let lat = $(".lat").html();
  console.log(lat)
  let lon = $(".lon").html();
  console.log(lon)
  // let url = ''
  // This is used to call  and change city
  let url1 = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=metric&appid='
  // console.log(url) 

  const api_key1 = config.OPEN_WEATHER_API_KEY
    fetch(`${url1}${api_key1}`)
      .then(function (response) {
        return response.json();
        })
      .then(function (data) {
  
        console.log(data)

     // this is used to display UV-index
      $('.uv-index').each(function () {
        let uvi = data.current.uvi + ' ' + '%'
        $('.uv-index').text('UV Index: '+uvi)
      });

      // this is used to display date1
      $('.date1').each(function () {
        let date1 = new Date(data.daily[0].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date1').text(date1))
          });

      // this is used to display date2
      $('.date2').each(function () {
        let date2 = new Date(data.daily[1].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date2').text(date2))
          });
      // this is used to display date3
      $('.date3').each(function () {
        let date3 = new Date(data.daily[2].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date3').text(date3))
          });

      // this is used to display date4
      $('.date4').each(function () {
        let date4 = new Date(data.daily[3].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date4').text(date4))
          });

      // this is used to display date5
      $('.date5').each(function () {
        let date5 = new Date(data.daily[4].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date5').text(date5))
          });

      
      // this is used to display icon1
      let iconurl1 = "https://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png"
      $('.wicon1').attr('src', iconurl1);

      // this is used to display icon1
      let iconurl2 = "https://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png"
      $('.wicon2').attr('src', iconurl2);

      // this is used to display icon1
      let iconurl3 = "https://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png"
      $('.wicon3').attr('src', iconurl3);

      // this is used to display icon1
      let iconurl4 = "https://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png"
      $('.wicon4').attr('src', iconurl4);

      // this is used to display icon1
      let iconurl5 = "https://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png"
      $('.wicon5').attr('src', iconurl5);

      // this is used to display temperature1
      $('.temp1').each(function () {
        let temp1 = Math.round(data.daily[0].temp.max) + ' ' + '°C'
        $('.temp1').text('Temp: '+temp1)
      });

      // this is used to display temperature2
      $('.temp2').each(function () {
        let temp2 = Math.round(data.daily[1].temp.max) + ' ' + '°C'
        $('.temp2').text('Temp: '+temp2)
      });

      // this is used to display temperature3
      $('.temp3').each(function () {
        let temp3 = Math.round(data.daily[2].temp.max) + ' ' + '°C'
        $('.temp3').text('Temp: '+temp3)
      });

      // this is used to display temperature4
      $('.temp4').each(function () {
        let temp4 = Math.round(data.daily[3].temp.max) + ' ' + '°C'
        $('.temp4').text('Temp: '+temp4)
      });

      // this is used to display temperature5
      $('.temp5').each(function () {
        let temp5 = Math.round(data.daily[4].temp.max) + ' ' + '°C'
        $('.temp5').text('Temp: '+temp5)
      });

      // this is used to display Wind1
      $('.wind1').each(function () {
        let wind1 = data.daily[0].wind_speed + ' ' + 'km/h'
        $('.wind1').text('Wind: '+wind1)
      });

      // this is used to display Wind2
      $('.wind2').each(function () {
        let wind2 = data.daily[1].wind_speed + ' ' + 'km/h'
        $('.wind2').text('Wind: '+wind2)
      });

      // this is used to display Wind3
      $('.wind3').each(function () {
        let Wind3 = data.daily[2].wind_speed + ' ' + 'km/h'
        $('.wind3').text('Wind: '+Wind3)
      });

      // this is used to display Wind4
      $('.wind4').each(function () {
        let wind4 = data.daily[3].wind_speed + ' ' + 'km/h'
        $('.wind4').text('Wind: '+wind4)
      });

      // this is used to display Wind5
      $('.wind5').each(function () {
        let Wind5 = data.daily[4].wind_speed + ' ' + 'km/h'
        $('.wind5').text('Wind: '+Wind5)
      });


      // this is used to display Humidity1
      $('.humidity1').each(function () {
        let humidity1 = data.daily[0].humidity + ' ' + '%'
        $('.humidity1').text('Humidity: '+humidity1)
      });

      // this is used to display Humidity2
      $('.humidity2').each(function () {
        let humidity2 = data.daily[1].humidity + ' ' + '%'
        $('.humidity2').text('Humidity: '+humidity2)
      });

      // this is used to display Humidity3
      $('.humidity3').each(function () {
        let humidity3= data.daily[2].humidity + ' ' + '%'
        $('.humidity3').text('Humidity: '+humidity3)
      });

      // this is used to display Humidity4
      $('.humidity4').each(function () {
        let humidity4 = data.daily[3].humidity + ' ' + '%'
        $('.humidity4').text('Humidity: '+humidity4)
      });

      // this is used to display Humidity5
      $('.humidity5').each(function () {
        let humidity5 = data.daily[4].humidity + ' ' + '%'
        $('.humidity5').text('Humidity: '+humidity5)
      });




      });
        
      });
      console.log(url) 

   }
// Berlin Weather
   function berlin() {
  
  // This is used to call  and change city
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=Berlin&units=metric&appid='
  // console.log(url) 

  const api_key = config.OPEN_WEATHER_API_KEY
    fetch(`${url}${api_key}`)
      .then(function (response) {
        return response.json();
        })
      .then(function (data) {
  
        console.log(data)
        // this is used to display icon
        let iconurl = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        $('.wicon').attr('src', iconurl);
  
         // this is used to display city
         $('.city').each(function () {
          $('.city').text(data.name);
        });
  
         // this is used to display temperature
         $('.temp').each(function () {
          let temp = Math.round(data.main.temp) + ' ' + '°C'
          $('.temp').text('Temp: '+temp)
        });
  
         // this is used to display Wind
         $('.wind').each(function () {
          let wind = data.wind.speed + ' ' + 'km/h'
          $('.wind').text('Wind: '+wind)
        });
  
        // this is used to display Humidity
        $('.humidity').each(function () {
          let humidity = data.main.humidity + ' ' + '%'
          $('.humidity').text('Humidity: '+humidity)
        });
  
        // this is used to display date
      $('.date').each(function () {
      let date = new Date(data.dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
      console.log($('.date').text(date))
        });
       
        
        // this is used to get Lat
        $('.lat').each(function () {
          let lat = data.coord.lat
          $('.lat').text(lat)
        });

        // this is used to get Lon
        $('.lon').each(function () {
          let lon = data.coord.lon
          $('.lon').text(lon)
        });
        
  let lat = $(".lat").html();
  console.log(lat)
  let lon = $(".lon").html();
  console.log(lon)
  // let url = ''
  // This is used to call  and change city
  let url1 = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=metric&appid='
  // console.log(url) 

  const api_key1 = config.OPEN_WEATHER_API_KEY
    fetch(`${url1}${api_key1}`)
      .then(function (response) {
        return response.json();
        })
      .then(function (data) {
  
        console.log(data)

     // this is used to display UV-index
      $('.uv-index').each(function () {
        let uvi = data.current.uvi + ' ' + '%'
        $('.uv-index').text('UV Index: '+uvi)
      });

      // this is used to display date1
      $('.date1').each(function () {
        let date1 = new Date(data.daily[0].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date1').text(date1))
          });

      // this is used to display date2
      $('.date2').each(function () {
        let date2 = new Date(data.daily[1].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date2').text(date2))
          });
      // this is used to display date3
      $('.date3').each(function () {
        let date3 = new Date(data.daily[2].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date3').text(date3))
          });

      // this is used to display date4
      $('.date4').each(function () {
        let date4 = new Date(data.daily[3].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date4').text(date4))
          });

      // this is used to display date5
      $('.date5').each(function () {
        let date5 = new Date(data.daily[4].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date5').text(date5))
          });

      
      // this is used to display icon1
      let iconurl1 = "https://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png"
      $('.wicon1').attr('src', iconurl1);

      // this is used to display icon1
      let iconurl2 = "https://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png"
      $('.wicon2').attr('src', iconurl2);

      // this is used to display icon1
      let iconurl3 = "https://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png"
      $('.wicon3').attr('src', iconurl3);

      // this is used to display icon1
      let iconurl4 = "https://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png"
      $('.wicon4').attr('src', iconurl4);

      // this is used to display icon1
      let iconurl5 = "https://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png"
      $('.wicon5').attr('src', iconurl5);

      // this is used to display temperature1
      $('.temp1').each(function () {
        let temp1 = Math.round(data.daily[0].temp.max) + ' ' + '°C'
        $('.temp1').text('Temp: '+temp1)
      });

      // this is used to display temperature2
      $('.temp2').each(function () {
        let temp2 = Math.round(data.daily[1].temp.max) + ' ' + '°C'
        $('.temp2').text('Temp: '+temp2)
      });

      // this is used to display temperature3
      $('.temp3').each(function () {
        let temp3 = Math.round(data.daily[2].temp.max) + ' ' + '°C'
        $('.temp3').text('Temp: '+temp3)
      });

      // this is used to display temperature4
      $('.temp4').each(function () {
        let temp4 = Math.round(data.daily[3].temp.max) + ' ' + '°C'
        $('.temp4').text('Temp: '+temp4)
      });

      // this is used to display temperature5
      $('.temp5').each(function () {
        let temp5 = Math.round(data.daily[4].temp.max) + ' ' + '°C'
        $('.temp5').text('Temp: '+temp5)
      });

      // this is used to display Wind1
      $('.wind1').each(function () {
        let wind1 = data.daily[0].wind_speed + ' ' + 'km/h'
        $('.wind1').text('Wind: '+wind1)
      });

      // this is used to display Wind2
      $('.wind2').each(function () {
        let wind2 = data.daily[1].wind_speed + ' ' + 'km/h'
        $('.wind2').text('Wind: '+wind2)
      });

      // this is used to display Wind3
      $('.wind3').each(function () {
        let Wind3 = data.daily[2].wind_speed + ' ' + 'km/h'
        $('.wind3').text('Wind: '+Wind3)
      });

      // this is used to display Wind4
      $('.wind4').each(function () {
        let wind4 = data.daily[3].wind_speed + ' ' + 'km/h'
        $('.wind4').text('Wind: '+wind4)
      });

      // this is used to display Wind5
      $('.wind5').each(function () {
        let Wind5 = data.daily[4].wind_speed + ' ' + 'km/h'
        $('.wind5').text('Wind: '+Wind5)
      });


      // this is used to display Humidity1
      $('.humidity1').each(function () {
        let humidity1 = data.daily[0].humidity + ' ' + '%'
        $('.humidity1').text('Humidity: '+humidity1)
      });

      // this is used to display Humidity2
      $('.humidity2').each(function () {
        let humidity2 = data.daily[1].humidity + ' ' + '%'
        $('.humidity2').text('Humidity: '+humidity2)
      });

      // this is used to display Humidity3
      $('.humidity3').each(function () {
        let humidity3= data.daily[2].humidity + ' ' + '%'
        $('.humidity3').text('Humidity: '+humidity3)
      });

      // this is used to display Humidity4
      $('.humidity4').each(function () {
        let humidity4 = data.daily[3].humidity + ' ' + '%'
        $('.humidity4').text('Humidity: '+humidity4)
      });

      // this is used to display Humidity5
      $('.humidity5').each(function () {
        let humidity5 = data.daily[4].humidity + ' ' + '%'
        $('.humidity5').text('Humidity: '+humidity5)
      });




      });
        
      });
      console.log(url) 


   }

   function london() {
    
  // This is used to call  and change city
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid='
  // console.log(url) 

  const api_key = config.OPEN_WEATHER_API_KEY
    fetch(`${url}${api_key}`)
      .then(function (response) {
        return response.json();
        })
      .then(function (data) {
  
        console.log(data)
        // this is used to display icon
        let iconurl = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        $('.wicon').attr('src', iconurl);
  
         // this is used to display city
         $('.city').each(function () {
          $('.city').text(data.name);
        });
  
         // this is used to display temperature
         $('.temp').each(function () {
          let temp = Math.round(data.main.temp) + ' ' + '°C'
          $('.temp').text('Temp: '+temp)
        });
  
         // this is used to display Wind
         $('.wind').each(function () {
          let wind = data.wind.speed + ' ' + 'km/h'
          $('.wind').text('Wind: '+wind)
        });
  
        // this is used to display Humidity
        $('.humidity').each(function () {
          let humidity = data.main.humidity + ' ' + '%'
          $('.humidity').text('Humidity: '+humidity)
        });
  
        // this is used to display date
      $('.date').each(function () {
      let date = new Date(data.dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
      console.log($('.date').text(date))
        });
       
        
        // this is used to get Lat
        $('.lat').each(function () {
          let lat = data.coord.lat
          $('.lat').text(lat)
        });

        // this is used to get Lon
        $('.lon').each(function () {
          let lon = data.coord.lon
          $('.lon').text(lon)
        });
        
  let lat = $(".lat").html();
  console.log(lat)
  let lon = $(".lon").html();
  console.log(lon)
  // let url = ''
  // This is used to call  and change city
  let url1 = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=metric&appid='
  // console.log(url) 

  const api_key1 = config.OPEN_WEATHER_API_KEY
    fetch(`${url1}${api_key1}`)
      .then(function (response) {
        return response.json();
        })
      .then(function (data) {
  
        console.log(data)

     // this is used to display UV-index
      $('.uv-index').each(function () {
        let uvi = data.current.uvi + ' ' + '%'
        $('.uv-index').text('UV Index: '+uvi)
      });

      // this is used to display date1
      $('.date1').each(function () {
        let date1 = new Date(data.daily[0].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date1').text(date1))
          });

      // this is used to display date2
      $('.date2').each(function () {
        let date2 = new Date(data.daily[1].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date2').text(date2))
          });
      // this is used to display date3
      $('.date3').each(function () {
        let date3 = new Date(data.daily[2].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date3').text(date3))
          });

      // this is used to display date4
      $('.date4').each(function () {
        let date4 = new Date(data.daily[3].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date4').text(date4))
          });

      // this is used to display date5
      $('.date5').each(function () {
        let date5 = new Date(data.daily[4].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date5').text(date5))
          });

      
      // this is used to display icon1
      let iconurl1 = "https://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png"
      $('.wicon1').attr('src', iconurl1);

      // this is used to display icon1
      let iconurl2 = "https://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png"
      $('.wicon2').attr('src', iconurl2);

      // this is used to display icon1
      let iconurl3 = "https://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png"
      $('.wicon3').attr('src', iconurl3);

      // this is used to display icon1
      let iconurl4 = "https://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png"
      $('.wicon4').attr('src', iconurl4);

      // this is used to display icon1
      let iconurl5 = "https://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png"
      $('.wicon5').attr('src', iconurl5);

      // this is used to display temperature1
      $('.temp1').each(function () {
        let temp1 = Math.round(data.daily[0].temp.max) + ' ' + '°C'
        $('.temp1').text('Temp: '+temp1)
      });

      // this is used to display temperature2
      $('.temp2').each(function () {
        let temp2 = Math.round(data.daily[1].temp.max) + ' ' + '°C'
        $('.temp2').text('Temp: '+temp2)
      });

      // this is used to display temperature3
      $('.temp3').each(function () {
        let temp3 = Math.round(data.daily[2].temp.max) + ' ' + '°C'
        $('.temp3').text('Temp: '+temp3)
      });

      // this is used to display temperature4
      $('.temp4').each(function () {
        let temp4 = Math.round(data.daily[3].temp.max) + ' ' + '°C'
        $('.temp4').text('Temp: '+temp4)
      });

      // this is used to display temperature5
      $('.temp5').each(function () {
        let temp5 = Math.round(data.daily[4].temp.max) + ' ' + '°C'
        $('.temp5').text('Temp: '+temp5)
      });

      // this is used to display Wind1
      $('.wind1').each(function () {
        let wind1 = data.daily[0].wind_speed + ' ' + 'km/h'
        $('.wind1').text('Wind: '+wind1)
      });

      // this is used to display Wind2
      $('.wind2').each(function () {
        let wind2 = data.daily[1].wind_speed + ' ' + 'km/h'
        $('.wind2').text('Wind: '+wind2)
      });

      // this is used to display Wind3
      $('.wind3').each(function () {
        let Wind3 = data.daily[2].wind_speed + ' ' + 'km/h'
        $('.wind3').text('Wind: '+Wind3)
      });

      // this is used to display Wind4
      $('.wind4').each(function () {
        let wind4 = data.daily[3].wind_speed + ' ' + 'km/h'
        $('.wind4').text('Wind: '+wind4)
      });

      // this is used to display Wind5
      $('.wind5').each(function () {
        let Wind5 = data.daily[4].wind_speed + ' ' + 'km/h'
        $('.wind5').text('Wind: '+Wind5)
      });


      // this is used to display Humidity1
      $('.humidity1').each(function () {
        let humidity1 = data.daily[0].humidity + ' ' + '%'
        $('.humidity1').text('Humidity: '+humidity1)
      });

      // this is used to display Humidity2
      $('.humidity2').each(function () {
        let humidity2 = data.daily[1].humidity + ' ' + '%'
        $('.humidity2').text('Humidity: '+humidity2)
      });

      // this is used to display Humidity3
      $('.humidity3').each(function () {
        let humidity3= data.daily[2].humidity + ' ' + '%'
        $('.humidity3').text('Humidity: '+humidity3)
      });

      // this is used to display Humidity4
      $('.humidity4').each(function () {
        let humidity4 = data.daily[3].humidity + ' ' + '%'
        $('.humidity4').text('Humidity: '+humidity4)
      });

      // this is used to display Humidity5
      $('.humidity5').each(function () {
        let humidity5 = data.daily[4].humidity + ' ' + '%'
        $('.humidity5').text('Humidity: '+humidity5)
      });




      });
        
      });
      console.log(url) 

  }
  function paris() {
   
  // This is used to call  and change city
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid='
  // console.log(url) 

  const api_key = config.OPEN_WEATHER_API_KEY
    fetch(`${url}${api_key}`)
      .then(function (response) {
        return response.json();
        })
      .then(function (data) {
  
        console.log(data)
        // this is used to display icon
        let iconurl = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        $('.wicon').attr('src', iconurl);
  
         // this is used to display city
         $('.city').each(function () {
          $('.city').text(data.name);
        });
  
         // this is used to display temperature
         $('.temp').each(function () {
          let temp = Math.round(data.main.temp) + ' ' + '°C'
          $('.temp').text('Temp: '+temp)
        });
  
         // this is used to display Wind
         $('.wind').each(function () {
          let wind = data.wind.speed + ' ' + 'km/h'
          $('.wind').text('Wind: '+wind)
        });
  
        // this is used to display Humidity
        $('.humidity').each(function () {
          let humidity = data.main.humidity + ' ' + '%'
          $('.humidity').text('Humidity: '+humidity)
        });
  
        // this is used to display date
      $('.date').each(function () {
      let date = new Date(data.dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
      console.log($('.date').text(date))
        });
       
        
        // this is used to get Lat
        $('.lat').each(function () {
          let lat = data.coord.lat
          $('.lat').text(lat)
        });

        // this is used to get Lon
        $('.lon').each(function () {
          let lon = data.coord.lon
          $('.lon').text(lon)
        });
        
  let lat = $(".lat").html();
  console.log(lat)
  let lon = $(".lon").html();
  console.log(lon)
  // let url = ''
  // This is used to call  and change city
  let url1 = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=metric&appid='
  // console.log(url) 

  const api_key1 = config.OPEN_WEATHER_API_KEY
    fetch(`${url1}${api_key1}`)
      .then(function (response) {
        return response.json();
        })
      .then(function (data) {
  
        console.log(data)

     // this is used to display UV-index
      $('.uv-index').each(function () {
        let uvi = data.current.uvi + ' ' + '%'
        $('.uv-index').text('UV Index: '+uvi)
      });

      // this is used to display date1
      $('.date1').each(function () {
        let date1 = new Date(data.daily[0].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date1').text(date1))
          });

      // this is used to display date2
      $('.date2').each(function () {
        let date2 = new Date(data.daily[1].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date2').text(date2))
          });
      // this is used to display date3
      $('.date3').each(function () {
        let date3 = new Date(data.daily[2].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date3').text(date3))
          });

      // this is used to display date4
      $('.date4').each(function () {
        let date4 = new Date(data.daily[3].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date4').text(date4))
          });

      // this is used to display date5
      $('.date5').each(function () {
        let date5 = new Date(data.daily[4].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date5').text(date5))
          });

      
      // this is used to display icon1
      let iconurl1 = "https://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png"
      $('.wicon1').attr('src', iconurl1);

      // this is used to display icon1
      let iconurl2 = "https://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png"
      $('.wicon2').attr('src', iconurl2);

      // this is used to display icon1
      let iconurl3 = "https://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png"
      $('.wicon3').attr('src', iconurl3);

      // this is used to display icon1
      let iconurl4 = "https://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png"
      $('.wicon4').attr('src', iconurl4);

      // this is used to display icon1
      let iconurl5 = "https://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png"
      $('.wicon5').attr('src', iconurl5);

      // this is used to display temperature1
      $('.temp1').each(function () {
        let temp1 = Math.round(data.daily[0].temp.max) + ' ' + '°C'
        $('.temp1').text('Temp: '+temp1)
      });

      // this is used to display temperature2
      $('.temp2').each(function () {
        let temp2 = Math.round(data.daily[1].temp.max) + ' ' + '°C'
        $('.temp2').text('Temp: '+temp2)
      });

      // this is used to display temperature3
      $('.temp3').each(function () {
        let temp3 = Math.round(data.daily[2].temp.max) + ' ' + '°C'
        $('.temp3').text('Temp: '+temp3)
      });

      // this is used to display temperature4
      $('.temp4').each(function () {
        let temp4 = Math.round(data.daily[3].temp.max) + ' ' + '°C'
        $('.temp4').text('Temp: '+temp4)
      });

      // this is used to display temperature5
      $('.temp5').each(function () {
        let temp5 = Math.round(data.daily[4].temp.max) + ' ' + '°C'
        $('.temp5').text('Temp: '+temp5)
      });

      // this is used to display Wind1
      $('.wind1').each(function () {
        let wind1 = data.daily[0].wind_speed + ' ' + 'km/h'
        $('.wind1').text('Wind: '+wind1)
      });

      // this is used to display Wind2
      $('.wind2').each(function () {
        let wind2 = data.daily[1].wind_speed + ' ' + 'km/h'
        $('.wind2').text('Wind: '+wind2)
      });

      // this is used to display Wind3
      $('.wind3').each(function () {
        let Wind3 = data.daily[2].wind_speed + ' ' + 'km/h'
        $('.wind3').text('Wind: '+Wind3)
      });

      // this is used to display Wind4
      $('.wind4').each(function () {
        let wind4 = data.daily[3].wind_speed + ' ' + 'km/h'
        $('.wind4').text('Wind: '+wind4)
      });

      // this is used to display Wind5
      $('.wind5').each(function () {
        let Wind5 = data.daily[4].wind_speed + ' ' + 'km/h'
        $('.wind5').text('Wind: '+Wind5)
      });


      // this is used to display Humidity1
      $('.humidity1').each(function () {
        let humidity1 = data.daily[0].humidity + ' ' + '%'
        $('.humidity1').text('Humidity: '+humidity1)
      });

      // this is used to display Humidity2
      $('.humidity2').each(function () {
        let humidity2 = data.daily[1].humidity + ' ' + '%'
        $('.humidity2').text('Humidity: '+humidity2)
      });

      // this is used to display Humidity3
      $('.humidity3').each(function () {
        let humidity3= data.daily[2].humidity + ' ' + '%'
        $('.humidity3').text('Humidity: '+humidity3)
      });

      // this is used to display Humidity4
      $('.humidity4').each(function () {
        let humidity4 = data.daily[3].humidity + ' ' + '%'
        $('.humidity4').text('Humidity: '+humidity4)
      });

      // this is used to display Humidity5
      $('.humidity5').each(function () {
        let humidity5 = data.daily[4].humidity + ' ' + '%'
        $('.humidity5').text('Humidity: '+humidity5)
      });




      });
        
      });
      console.log(url) 

  }
  function sanf() {
    let city = $("#site-search").val();
  console.log(city)
  // let url = ''
  // This is used to call  and change city
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=San\ Francisco&units=metric&appid='
  // console.log(url) 

  const api_key = config.OPEN_WEATHER_API_KEY
    fetch(`${url}${api_key}`)
      .then(function (response) {
        return response.json();
        })
      .then(function (data) {
  
        console.log(data)
        // this is used to display icon
        let iconurl = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        $('.wicon').attr('src', iconurl);
  
         // this is used to display city
         $('.city').each(function () {
          $('.city').text(data.name);
        });
  
         // this is used to display temperature
         $('.temp').each(function () {
          let temp = Math.round(data.main.temp) + ' ' + '°C'
          $('.temp').text('Temp: '+temp)
        });
  
         // this is used to display Wind
         $('.wind').each(function () {
          let wind = data.wind.speed + ' ' + 'km/h'
          $('.wind').text('Wind: '+wind)
        });
  
        // this is used to display Humidity
        $('.humidity').each(function () {
          let humidity = data.main.humidity + ' ' + '%'
          $('.humidity').text('Humidity: '+humidity)
        });
  
        // this is used to display date
      $('.date').each(function () {
      let date = new Date(data.dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
      console.log($('.date').text(date))
        });
       
        
        // this is used to get Lat
        $('.lat').each(function () {
          let lat = data.coord.lat
          $('.lat').text(lat)
        });

        // this is used to get Lon
        $('.lon').each(function () {
          let lon = data.coord.lon
          $('.lon').text(lon)
        });
        
  let lat = $(".lat").html();
  console.log(lat)
  let lon = $(".lon").html();
  console.log(lon)
  // let url = ''
  // This is used to call  and change city
  let url1 = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=metric&appid='
  // console.log(url) 

  const api_key1 = config.OPEN_WEATHER_API_KEY
    fetch(`${url1}${api_key1}`)
      .then(function (response) {
        return response.json();
        })
      .then(function (data) {
  
        console.log(data)

     // this is used to display UV-index
      $('.uv-index').each(function () {
        let uvi = data.current.uvi + ' ' + '%'
        $('.uv-index').text('UV Index: '+uvi)
      });

      // this is used to display date1
      $('.date1').each(function () {
        let date1 = new Date(data.daily[0].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date1').text(date1))
          });

      // this is used to display date2
      $('.date2').each(function () {
        let date2 = new Date(data.daily[1].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date2').text(date2))
          });
      // this is used to display date3
      $('.date3').each(function () {
        let date3 = new Date(data.daily[2].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date3').text(date3))
          });

      // this is used to display date4
      $('.date4').each(function () {
        let date4 = new Date(data.daily[3].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date4').text(date4))
          });

      // this is used to display date5
      $('.date5').each(function () {
        let date5 = new Date(data.daily[4].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date5').text(date5))
          });

      
      // this is used to display icon1
      let iconurl1 = "https://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png"
      $('.wicon1').attr('src', iconurl1);

      // this is used to display icon1
      let iconurl2 = "https://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png"
      $('.wicon2').attr('src', iconurl2);

      // this is used to display icon1
      let iconurl3 = "https://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png"
      $('.wicon3').attr('src', iconurl3);

      // this is used to display icon1
      let iconurl4 = "https://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png"
      $('.wicon4').attr('src', iconurl4);

      // this is used to display icon1
      let iconurl5 = "https://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png"
      $('.wicon5').attr('src', iconurl5);

      // this is used to display temperature1
      $('.temp1').each(function () {
        let temp1 = Math.round(data.daily[0].temp.max) + ' ' + '°C'
        $('.temp1').text('Temp: '+temp1)
      });

      // this is used to display temperature2
      $('.temp2').each(function () {
        let temp2 = Math.round(data.daily[1].temp.max) + ' ' + '°C'
        $('.temp2').text('Temp: '+temp2)
      });

      // this is used to display temperature3
      $('.temp3').each(function () {
        let temp3 = Math.round(data.daily[2].temp.max) + ' ' + '°C'
        $('.temp3').text('Temp: '+temp3)
      });

      // this is used to display temperature4
      $('.temp4').each(function () {
        let temp4 = Math.round(data.daily[3].temp.max) + ' ' + '°C'
        $('.temp4').text('Temp: '+temp4)
      });

      // this is used to display temperature5
      $('.temp5').each(function () {
        let temp5 = Math.round(data.daily[4].temp.max) + ' ' + '°C'
        $('.temp5').text('Temp: '+temp5)
      });

      // this is used to display Wind1
      $('.wind1').each(function () {
        let wind1 = data.daily[0].wind_speed + ' ' + 'km/h'
        $('.wind1').text('Wind: '+wind1)
      });

      // this is used to display Wind2
      $('.wind2').each(function () {
        let wind2 = data.daily[1].wind_speed + ' ' + 'km/h'
        $('.wind2').text('Wind: '+wind2)
      });

      // this is used to display Wind3
      $('.wind3').each(function () {
        let Wind3 = data.daily[2].wind_speed + ' ' + 'km/h'
        $('.wind3').text('Wind: '+Wind3)
      });

      // this is used to display Wind4
      $('.wind4').each(function () {
        let wind4 = data.daily[3].wind_speed + ' ' + 'km/h'
        $('.wind4').text('Wind: '+wind4)
      });

      // this is used to display Wind5
      $('.wind5').each(function () {
        let Wind5 = data.daily[4].wind_speed + ' ' + 'km/h'
        $('.wind5').text('Wind: '+Wind5)
      });


      // this is used to display Humidity1
      $('.humidity1').each(function () {
        let humidity1 = data.daily[0].humidity + ' ' + '%'
        $('.humidity1').text('Humidity: '+humidity1)
      });

      // this is used to display Humidity2
      $('.humidity2').each(function () {
        let humidity2 = data.daily[1].humidity + ' ' + '%'
        $('.humidity2').text('Humidity: '+humidity2)
      });

      // this is used to display Humidity3
      $('.humidity3').each(function () {
        let humidity3= data.daily[2].humidity + ' ' + '%'
        $('.humidity3').text('Humidity: '+humidity3)
      });

      // this is used to display Humidity4
      $('.humidity4').each(function () {
        let humidity4 = data.daily[3].humidity + ' ' + '%'
        $('.humidity4').text('Humidity: '+humidity4)
      });

      // this is used to display Humidity5
      $('.humidity5').each(function () {
        let humidity5 = data.daily[4].humidity + ' ' + '%'
        $('.humidity5').text('Humidity: '+humidity5)
      });




      });
        
      });
      console.log(url) 

  }
  function ny() {
  // This is used to call  and change city
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=New\ York&units=metric&appid='
  // console.log(url) 

  const api_key = config.OPEN_WEATHER_API_KEY
    fetch(`${url}${api_key}`)
      .then(function (response) {
        return response.json();
        })
      .then(function (data) {
  
        console.log(data)
        // this is used to display icon
        let iconurl = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        $('.wicon').attr('src', iconurl);
  
         // this is used to display city
         $('.city').each(function () {
          $('.city').text(data.name);
        });
  
         // this is used to display temperature
         $('.temp').each(function () {
          let temp = Math.round(data.main.temp) + ' ' + '°C'
          $('.temp').text('Temp: '+temp)
        });
  
         // this is used to display Wind
         $('.wind').each(function () {
          let wind = data.wind.speed + ' ' + 'km/h'
          $('.wind').text('Wind: '+wind)
        });
  
        // this is used to display Humidity
        $('.humidity').each(function () {
          let humidity = data.main.humidity + ' ' + '%'
          $('.humidity').text('Humidity: '+humidity)
        });
  
        // this is used to display date
      $('.date').each(function () {
      let date = new Date(data.dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
      console.log($('.date').text(date))
        });
       
        
        // this is used to get Lat
        $('.lat').each(function () {
          let lat = data.coord.lat
          $('.lat').text(lat)
        });

        // this is used to get Lon
        $('.lon').each(function () {
          let lon = data.coord.lon
          $('.lon').text(lon)
        });
        
  let lat = $(".lat").html();
  console.log(lat)
  let lon = $(".lon").html();
  console.log(lon)
  // let url = ''
  // This is used to call  and change city
  let url1 = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=metric&appid='
  // console.log(url) 

  const api_key1 = config.OPEN_WEATHER_API_KEY
    fetch(`${url1}${api_key1}`)
      .then(function (response) {
        return response.json();
        })
      .then(function (data) {
  
        console.log(data)

     // this is used to display UV-index
      $('.uv-index').each(function () {
        let uvi = data.current.uvi + ' ' + '%'
        $('.uv-index').text('UV Index: '+uvi)
      });

      // this is used to display date1
      $('.date1').each(function () {
        let date1 = new Date(data.daily[0].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date1').text(date1))
          });

      // this is used to display date2
      $('.date2').each(function () {
        let date2 = new Date(data.daily[1].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date2').text(date2))
          });
      // this is used to display date3
      $('.date3').each(function () {
        let date3 = new Date(data.daily[2].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date3').text(date3))
          });

      // this is used to display date4
      $('.date4').each(function () {
        let date4 = new Date(data.daily[3].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date4').text(date4))
          });

      // this is used to display date5
      $('.date5').each(function () {
        let date5 = new Date(data.daily[4].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date5').text(date5))
          });

      
      // this is used to display icon1
      let iconurl1 = "https://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png"
      $('.wicon1').attr('src', iconurl1);

      // this is used to display icon1
      let iconurl2 = "https://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png"
      $('.wicon2').attr('src', iconurl2);

      // this is used to display icon1
      let iconurl3 = "https://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png"
      $('.wicon3').attr('src', iconurl3);

      // this is used to display icon1
      let iconurl4 = "https://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png"
      $('.wicon4').attr('src', iconurl4);

      // this is used to display icon1
      let iconurl5 = "https://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png"
      $('.wicon5').attr('src', iconurl5);

      // this is used to display temperature1
      $('.temp1').each(function () {
        let temp1 = Math.round(data.daily[0].temp.max) + ' ' + '°C'
        $('.temp1').text('Temp: '+temp1)
      });

      // this is used to display temperature2
      $('.temp2').each(function () {
        let temp2 = Math.round(data.daily[1].temp.max) + ' ' + '°C'
        $('.temp2').text('Temp: '+temp2)
      });

      // this is used to display temperature3
      $('.temp3').each(function () {
        let temp3 = Math.round(data.daily[2].temp.max) + ' ' + '°C'
        $('.temp3').text('Temp: '+temp3)
      });

      // this is used to display temperature4
      $('.temp4').each(function () {
        let temp4 = Math.round(data.daily[3].temp.max) + ' ' + '°C'
        $('.temp4').text('Temp: '+temp4)
      });

      // this is used to display temperature5
      $('.temp5').each(function () {
        let temp5 = Math.round(data.daily[4].temp.max) + ' ' + '°C'
        $('.temp5').text('Temp: '+temp5)
      });

      // this is used to display Wind1
      $('.wind1').each(function () {
        let wind1 = data.daily[0].wind_speed + ' ' + 'km/h'
        $('.wind1').text('Wind: '+wind1)
      });

      // this is used to display Wind2
      $('.wind2').each(function () {
        let wind2 = data.daily[1].wind_speed + ' ' + 'km/h'
        $('.wind2').text('Wind: '+wind2)
      });

      // this is used to display Wind3
      $('.wind3').each(function () {
        let Wind3 = data.daily[2].wind_speed + ' ' + 'km/h'
        $('.wind3').text('Wind: '+Wind3)
      });

      // this is used to display Wind4
      $('.wind4').each(function () {
        let wind4 = data.daily[3].wind_speed + ' ' + 'km/h'
        $('.wind4').text('Wind: '+wind4)
      });

      // this is used to display Wind5
      $('.wind5').each(function () {
        let Wind5 = data.daily[4].wind_speed + ' ' + 'km/h'
        $('.wind5').text('Wind: '+Wind5)
      });


      // this is used to display Humidity1
      $('.humidity1').each(function () {
        let humidity1 = data.daily[0].humidity + ' ' + '%'
        $('.humidity1').text('Humidity: '+humidity1)
      });

      // this is used to display Humidity2
      $('.humidity2').each(function () {
        let humidity2 = data.daily[1].humidity + ' ' + '%'
        $('.humidity2').text('Humidity: '+humidity2)
      });

      // this is used to display Humidity3
      $('.humidity3').each(function () {
        let humidity3= data.daily[2].humidity + ' ' + '%'
        $('.humidity3').text('Humidity: '+humidity3)
      });

      // this is used to display Humidity4
      $('.humidity4').each(function () {
        let humidity4 = data.daily[3].humidity + ' ' + '%'
        $('.humidity4').text('Humidity: '+humidity4)
      });

      // this is used to display Humidity5
      $('.humidity5').each(function () {
        let humidity5 = data.daily[4].humidity + ' ' + '%'
        $('.humidity5').text('Humidity: '+humidity5)
      });




      });
        
      });
      console.log(url) 

  }
  function barce() {
  // This is used to call  and change city
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&appid='
  // console.log(url) 

  const api_key = config.OPEN_WEATHER_API_KEY
    fetch(`${url}${api_key}`)
      .then(function (response) {
        return response.json();
        })
      .then(function (data) {
  
        console.log(data)
        // this is used to display icon
        let iconurl = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        $('.wicon').attr('src', iconurl);
  
         // this is used to display city
         $('.city').each(function () {
          $('.city').text(data.name);
        });
  
         // this is used to display temperature
         $('.temp').each(function () {
          let temp = Math.round(data.main.temp) + ' ' + '°C'
          $('.temp').text('Temp: '+temp)
        });
  
         // this is used to display Wind
         $('.wind').each(function () {
          let wind = data.wind.speed + ' ' + 'km/h'
          $('.wind').text('Wind: '+wind)
        });
  
        // this is used to display Humidity
        $('.humidity').each(function () {
          let humidity = data.main.humidity + ' ' + '%'
          $('.humidity').text('Humidity: '+humidity)
        });
  
        // this is used to display date
      $('.date').each(function () {
      let date = new Date(data.dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
      console.log($('.date').text(date))
        });
       
        
        // this is used to get Lat
        $('.lat').each(function () {
          let lat = data.coord.lat
          $('.lat').text(lat)
        });

        // this is used to get Lon
        $('.lon').each(function () {
          let lon = data.coord.lon
          $('.lon').text(lon)
        });
        
  let lat = $(".lat").html();
  console.log(lat)
  let lon = $(".lon").html();
  console.log(lon)
  // let url = ''
  // This is used to call  and change city
  let url1 = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=metric&appid='
  // console.log(url) 

  const api_key1 = config.OPEN_WEATHER_API_KEY
    fetch(`${url1}${api_key1}`)
      .then(function (response) {
        return response.json();
        })
      .then(function (data) {
  
        console.log(data)

     // this is used to display UV-index
      $('.uv-index').each(function () {
        let uvi = data.current.uvi + ' ' + '%'
        $('.uv-index').text('UV Index: '+uvi)
      });

      // this is used to display date1
      $('.date1').each(function () {
        let date1 = new Date(data.daily[0].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date1').text(date1))
          });

      // this is used to display date2
      $('.date2').each(function () {
        let date2 = new Date(data.daily[1].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date2').text(date2))
          });
      // this is used to display date3
      $('.date3').each(function () {
        let date3 = new Date(data.daily[2].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date3').text(date3))
          });

      // this is used to display date4
      $('.date4').each(function () {
        let date4 = new Date(data.daily[3].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date4').text(date4))
          });

      // this is used to display date5
      $('.date5').each(function () {
        let date5 = new Date(data.daily[4].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date5').text(date5))
          });

      
      // this is used to display icon1
      let iconurl1 = "https://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png"
      $('.wicon1').attr('src', iconurl1);

      // this is used to display icon1
      let iconurl2 = "https://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png"
      $('.wicon2').attr('src', iconurl2);

      // this is used to display icon1
      let iconurl3 = "https://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png"
      $('.wicon3').attr('src', iconurl3);

      // this is used to display icon1
      let iconurl4 = "https://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png"
      $('.wicon4').attr('src', iconurl4);

      // this is used to display icon1
      let iconurl5 = "https://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png"
      $('.wicon5').attr('src', iconurl5);

      // this is used to display temperature1
      $('.temp1').each(function () {
        let temp1 = Math.round(data.daily[0].temp.max) + ' ' + '°C'
        $('.temp1').text('Temp: '+temp1)
      });

      // this is used to display temperature2
      $('.temp2').each(function () {
        let temp2 = Math.round(data.daily[1].temp.max) + ' ' + '°C'
        $('.temp2').text('Temp: '+temp2)
      });

      // this is used to display temperature3
      $('.temp3').each(function () {
        let temp3 = Math.round(data.daily[2].temp.max) + ' ' + '°C'
        $('.temp3').text('Temp: '+temp3)
      });

      // this is used to display temperature4
      $('.temp4').each(function () {
        let temp4 = Math.round(data.daily[3].temp.max) + ' ' + '°C'
        $('.temp4').text('Temp: '+temp4)
      });

      // this is used to display temperature5
      $('.temp5').each(function () {
        let temp5 = Math.round(data.daily[4].temp.max) + ' ' + '°C'
        $('.temp5').text('Temp: '+temp5)
      });

      // this is used to display Wind1
      $('.wind1').each(function () {
        let wind1 = data.daily[0].wind_speed + ' ' + 'km/h'
        $('.wind1').text('Wind: '+wind1)
      });

      // this is used to display Wind2
      $('.wind2').each(function () {
        let wind2 = data.daily[1].wind_speed + ' ' + 'km/h'
        $('.wind2').text('Wind: '+wind2)
      });

      // this is used to display Wind3
      $('.wind3').each(function () {
        let Wind3 = data.daily[2].wind_speed + ' ' + 'km/h'
        $('.wind3').text('Wind: '+Wind3)
      });

      // this is used to display Wind4
      $('.wind4').each(function () {
        let wind4 = data.daily[3].wind_speed + ' ' + 'km/h'
        $('.wind4').text('Wind: '+wind4)
      });

      // this is used to display Wind5
      $('.wind5').each(function () {
        let Wind5 = data.daily[4].wind_speed + ' ' + 'km/h'
        $('.wind5').text('Wind: '+Wind5)
      });


      // this is used to display Humidity1
      $('.humidity1').each(function () {
        let humidity1 = data.daily[0].humidity + ' ' + '%'
        $('.humidity1').text('Humidity: '+humidity1)
      });

      // this is used to display Humidity2
      $('.humidity2').each(function () {
        let humidity2 = data.daily[1].humidity + ' ' + '%'
        $('.humidity2').text('Humidity: '+humidity2)
      });

      // this is used to display Humidity3
      $('.humidity3').each(function () {
        let humidity3= data.daily[2].humidity + ' ' + '%'
        $('.humidity3').text('Humidity: '+humidity3)
      });

      // this is used to display Humidity4
      $('.humidity4').each(function () {
        let humidity4 = data.daily[3].humidity + ' ' + '%'
        $('.humidity4').text('Humidity: '+humidity4)
      });

      // this is used to display Humidity5
      $('.humidity5').each(function () {
        let humidity5 = data.daily[4].humidity + ' ' + '%'
        $('.humidity5').text('Humidity: '+humidity5)
      });




      });
        
      });
      console.log(url) 

  }
  function madrid() {
  // This is used to call  and change city
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&appid='
  // console.log(url) 

  const api_key = config.OPEN_WEATHER_API_KEY
    fetch(`${url}${api_key}`)
      .then(function (response) {
        return response.json();
        })
      .then(function (data) {
  
        console.log(data)
        // this is used to display icon
        let iconurl = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        $('.wicon').attr('src', iconurl);
  
         // this is used to display city
         $('.city').each(function () {
          $('.city').text(data.name);
        });
  
         // this is used to display temperature
         $('.temp').each(function () {
          let temp = Math.round(data.main.temp) + ' ' + '°C'
          $('.temp').text('Temp: '+temp)
        });
  
         // this is used to display Wind
         $('.wind').each(function () {
          let wind = data.wind.speed + ' ' + 'km/h'
          $('.wind').text('Wind: '+wind)
        });
  
        // this is used to display Humidity
        $('.humidity').each(function () {
          let humidity = data.main.humidity + ' ' + '%'
          $('.humidity').text('Humidity: '+humidity)
        });
  
        // this is used to display date
      $('.date').each(function () {
      let date = new Date(data.dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
      console.log($('.date').text(date))
        });
       
        
        // this is used to get Lat
        $('.lat').each(function () {
          let lat = data.coord.lat
          $('.lat').text(lat)
        });

        // this is used to get Lon
        $('.lon').each(function () {
          let lon = data.coord.lon
          $('.lon').text(lon)
        });
        
  let lat = $(".lat").html();
  console.log(lat)
  let lon = $(".lon").html();
  console.log(lon)
  // let url = ''
  // This is used to call  and change city
  let url1 = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=metric&appid='
  // console.log(url) 

  const api_key1 = config.OPEN_WEATHER_API_KEY
    fetch(`${url1}${api_key1}`)
      .then(function (response) {
        return response.json();
        })
      .then(function (data) {
  
        console.log(data)

     // this is used to display UV-index
      $('.uv-index').each(function () {
        let uvi = data.current.uvi + ' ' + '%'
        $('.uv-index').text('UV Index: '+uvi)
      });

      // this is used to display date1
      $('.date1').each(function () {
        let date1 = new Date(data.daily[0].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date1').text(date1))
          });

      // this is used to display date2
      $('.date2').each(function () {
        let date2 = new Date(data.daily[1].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date2').text(date2))
          });
      // this is used to display date3
      $('.date3').each(function () {
        let date3 = new Date(data.daily[2].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date3').text(date3))
          });

      // this is used to display date4
      $('.date4').each(function () {
        let date4 = new Date(data.daily[3].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date4').text(date4))
          });

      // this is used to display date5
      $('.date5').each(function () {
        let date5 = new Date(data.daily[4].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date5').text(date5))
          });

      
      // this is used to display icon1
      let iconurl1 = "https://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png"
      $('.wicon1').attr('src', iconurl1);

      // this is used to display icon1
      let iconurl2 = "https://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png"
      $('.wicon2').attr('src', iconurl2);

      // this is used to display icon1
      let iconurl3 = "https://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png"
      $('.wicon3').attr('src', iconurl3);

      // this is used to display icon1
      let iconurl4 = "https://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png"
      $('.wicon4').attr('src', iconurl4);

      // this is used to display icon1
      let iconurl5 = "https://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png"
      $('.wicon5').attr('src', iconurl5);

      // this is used to display temperature1
      $('.temp1').each(function () {
        let temp1 = Math.round(data.daily[0].temp.max) + ' ' + '°C'
        $('.temp1').text('Temp: '+temp1)
      });

      // this is used to display temperature2
      $('.temp2').each(function () {
        let temp2 = Math.round(data.daily[1].temp.max) + ' ' + '°C'
        $('.temp2').text('Temp: '+temp2)
      });

      // this is used to display temperature3
      $('.temp3').each(function () {
        let temp3 = Math.round(data.daily[2].temp.max) + ' ' + '°C'
        $('.temp3').text('Temp: '+temp3)
      });

      // this is used to display temperature4
      $('.temp4').each(function () {
        let temp4 = Math.round(data.daily[3].temp.max) + ' ' + '°C'
        $('.temp4').text('Temp: '+temp4)
      });

      // this is used to display temperature5
      $('.temp5').each(function () {
        let temp5 = Math.round(data.daily[4].temp.max) + ' ' + '°C'
        $('.temp5').text('Temp: '+temp5)
      });

      // this is used to display Wind1
      $('.wind1').each(function () {
        let wind1 = data.daily[0].wind_speed + ' ' + 'km/h'
        $('.wind1').text('Wind: '+wind1)
      });

      // this is used to display Wind2
      $('.wind2').each(function () {
        let wind2 = data.daily[1].wind_speed + ' ' + 'km/h'
        $('.wind2').text('Wind: '+wind2)
      });

      // this is used to display Wind3
      $('.wind3').each(function () {
        let Wind3 = data.daily[2].wind_speed + ' ' + 'km/h'
        $('.wind3').text('Wind: '+Wind3)
      });

      // this is used to display Wind4
      $('.wind4').each(function () {
        let wind4 = data.daily[3].wind_speed + ' ' + 'km/h'
        $('.wind4').text('Wind: '+wind4)
      });

      // this is used to display Wind5
      $('.wind5').each(function () {
        let Wind5 = data.daily[4].wind_speed + ' ' + 'km/h'
        $('.wind5').text('Wind: '+Wind5)
      });


      // this is used to display Humidity1
      $('.humidity1').each(function () {
        let humidity1 = data.daily[0].humidity + ' ' + '%'
        $('.humidity1').text('Humidity: '+humidity1)
      });

      // this is used to display Humidity2
      $('.humidity2').each(function () {
        let humidity2 = data.daily[1].humidity + ' ' + '%'
        $('.humidity2').text('Humidity: '+humidity2)
      });

      // this is used to display Humidity3
      $('.humidity3').each(function () {
        let humidity3= data.daily[2].humidity + ' ' + '%'
        $('.humidity3').text('Humidity: '+humidity3)
      });

      // this is used to display Humidity4
      $('.humidity4').each(function () {
        let humidity4 = data.daily[3].humidity + ' ' + '%'
        $('.humidity4').text('Humidity: '+humidity4)
      });

      // this is used to display Humidity5
      $('.humidity5').each(function () {
        let humidity5 = data.daily[4].humidity + ' ' + '%'
        $('.humidity5').text('Humidity: '+humidity5)
      });




      });
        
      });
      console.log(url) 

  }
  function athens() {
  // This is used to call  and change city
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=Athens&units=metric&appid='
  // console.log(url) 

  const api_key = config.OPEN_WEATHER_API_KEY
    fetch(`${url}${api_key}`)
      .then(function (response) {
        return response.json();
        })
      .then(function (data) {
  
        console.log(data)
        // this is used to display icon
        let iconurl = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        $('.wicon').attr('src', iconurl);
  
         // this is used to display city
         $('.city').each(function () {
          $('.city').text(data.name);
        });
  
         // this is used to display temperature
         $('.temp').each(function () {
          let temp = Math.round(data.main.temp) + ' ' + '°C'
          $('.temp').text('Temp: '+temp)
        });
  
         // this is used to display Wind
         $('.wind').each(function () {
          let wind = data.wind.speed + ' ' + 'km/h'
          $('.wind').text('Wind: '+wind)
        });
  
        // this is used to display Humidity
        $('.humidity').each(function () {
          let humidity = data.main.humidity + ' ' + '%'
          $('.humidity').text('Humidity: '+humidity)
        });
  
        // this is used to display date
      $('.date').each(function () {
      let date = new Date(data.dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
      console.log($('.date').text(date))
        });
       
        
        // this is used to get Lat
        $('.lat').each(function () {
          let lat = data.coord.lat
          $('.lat').text(lat)
        });

        // this is used to get Lon
        $('.lon').each(function () {
          let lon = data.coord.lon
          $('.lon').text(lon)
        });
        
  let lat = $(".lat").html();
  console.log(lat)
  let lon = $(".lon").html();
  console.log(lon)
  // let url = ''
  // This is used to call  and change city
  let url1 = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=metric&appid='
  // console.log(url) 

  const api_key1 = config.OPEN_WEATHER_API_KEY
    fetch(`${url1}${api_key1}`)
      .then(function (response) {
        return response.json();
        })
      .then(function (data) {
  
        console.log(data)

     // this is used to display UV-index
      $('.uv-index').each(function () {
        let uvi = data.current.uvi + ' ' + '%'
        $('.uv-index').text('UV Index: '+uvi)
      });

      // this is used to display date1
      $('.date1').each(function () {
        let date1 = new Date(data.daily[0].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date1').text(date1))
          });

      // this is used to display date2
      $('.date2').each(function () {
        let date2 = new Date(data.daily[1].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date2').text(date2))
          });
      // this is used to display date3
      $('.date3').each(function () {
        let date3 = new Date(data.daily[2].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date3').text(date3))
          });

      // this is used to display date4
      $('.date4').each(function () {
        let date4 = new Date(data.daily[3].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date4').text(date4))
          });

      // this is used to display date5
      $('.date5').each(function () {
        let date5 = new Date(data.daily[4].dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" });
        console.log($('.date5').text(date5))
          });

      
      // this is used to display icon1
      let iconurl1 = "https://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png"
      $('.wicon1').attr('src', iconurl1);

      // this is used to display icon1
      let iconurl2 = "https://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png"
      $('.wicon2').attr('src', iconurl2);

      // this is used to display icon1
      let iconurl3 = "https://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png"
      $('.wicon3').attr('src', iconurl3);

      // this is used to display icon1
      let iconurl4 = "https://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png"
      $('.wicon4').attr('src', iconurl4);

      // this is used to display icon1
      let iconurl5 = "https://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png"
      $('.wicon5').attr('src', iconurl5);

      // this is used to display temperature1
      $('.temp1').each(function () {
        let temp1 = Math.round(data.daily[0].temp.max) + ' ' + '°C'
        $('.temp1').text('Temp: '+temp1)
      });

      // this is used to display temperature2
      $('.temp2').each(function () {
        let temp2 = Math.round(data.daily[1].temp.max) + ' ' + '°C'
        $('.temp2').text('Temp: '+temp2)
      });

      // this is used to display temperature3
      $('.temp3').each(function () {
        let temp3 = Math.round(data.daily[2].temp.max) + ' ' + '°C'
        $('.temp3').text('Temp: '+temp3)
      });

      // this is used to display temperature4
      $('.temp4').each(function () {
        let temp4 = Math.round(data.daily[3].temp.max) + ' ' + '°C'
        $('.temp4').text('Temp: '+temp4)
      });

      // this is used to display temperature5
      $('.temp5').each(function () {
        let temp5 = Math.round(data.daily[4].temp.max) + ' ' + '°C'
        $('.temp5').text('Temp: '+temp5)
      });

      // this is used to display Wind1
      $('.wind1').each(function () {
        let wind1 = data.daily[0].wind_speed + ' ' + 'km/h'
        $('.wind1').text('Wind: '+wind1)
      });

      // this is used to display Wind2
      $('.wind2').each(function () {
        let wind2 = data.daily[1].wind_speed + ' ' + 'km/h'
        $('.wind2').text('Wind: '+wind2)
      });

      // this is used to display Wind3
      $('.wind3').each(function () {
        let Wind3 = data.daily[2].wind_speed + ' ' + 'km/h'
        $('.wind3').text('Wind: '+Wind3)
      });

      // this is used to display Wind4
      $('.wind4').each(function () {
        let wind4 = data.daily[3].wind_speed + ' ' + 'km/h'
        $('.wind4').text('Wind: '+wind4)
      });

      // this is used to display Wind5
      $('.wind5').each(function () {
        let Wind5 = data.daily[4].wind_speed + ' ' + 'km/h'
        $('.wind5').text('Wind: '+Wind5)
      });


      // this is used to display Humidity1
      $('.humidity1').each(function () {
        let humidity1 = data.daily[0].humidity + ' ' + '%'
        $('.humidity1').text('Humidity: '+humidity1)
      });

      // this is used to display Humidity2
      $('.humidity2').each(function () {
        let humidity2 = data.daily[1].humidity + ' ' + '%'
        $('.humidity2').text('Humidity: '+humidity2)
      });

      // this is used to display Humidity3
      $('.humidity3').each(function () {
        let humidity3= data.daily[2].humidity + ' ' + '%'
        $('.humidity3').text('Humidity: '+humidity3)
      });

      // this is used to display Humidity4
      $('.humidity4').each(function () {
        let humidity4 = data.daily[3].humidity + ' ' + '%'
        $('.humidity4').text('Humidity: '+humidity4)
      });

      // this is used to display Humidity5
      $('.humidity5').each(function () {
        let humidity5 = data.daily[4].humidity + ' ' + '%'
        $('.humidity5').text('Humidity: '+humidity5)
      });

      });
        
      });
      console.log(url) 

  }