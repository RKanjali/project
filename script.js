
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0656707d2amshbcf25613815d95fp1c4ffejsnc1c4bd5e068d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
	
      cityName.innerHTML =city

     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= Delhi'+city ,options)
     .then(response => response.json())
     .then((response) => {
          
       console.log(response)

        
        cloud_pct.innerHTML = response.cloud_pc
        feels_like.innerHTML = response.feels_like 
        humidity.innerHTML = response.humidit
        humidity2.innerHTML = response.humidit
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_tem
        sunrise.innerHTML = response.sunris
        sunset.innerHTML = response.sunset 
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed

     })
     .catch(err => console.error(err));
}

SubmitEvent.addEventListener("click",()=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")