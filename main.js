const apiKey ="e120ff5ba0f6c09cf6ddc3da989a44b5";
const apiURL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const icon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
     if(response.status == 404){
        document.querySelector(".error").style.display ="block";
     document.querySelector(".weather").style.display ="none";
    }
    else {
        var data = await response.json();

  

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =  Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
        
        if(data.weather[0].main=="Clouds"){
              icon.src="images/clouds.png"
         }
          
        else  if(data.weather[0].main == "Clear"){
            icon.src="./images/clear.png"
        } 
        else if(data.weather[0].main == "Rain"){
            icon.src="./images/rain.png"
        } 
        else if(data.weather[0].main == "Drizzle"){
            icon.src="./images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            icon.src="./images/mist.png"
        } 
        
        document.querySelector(".weather").style.display= "block";
        document.querySelector(".error").style.display ="none";
        }
    }
  
searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
})

 

