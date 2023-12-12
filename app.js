let result = document.getElementById('result');
let searchBtn = document.getElementById('Search-btn');
let cityInput = document.getElementById('cityinput');
const currentDate = new Date().toLocaleDateString();

//function to fetch weather details from api and dispaly them
let getWeather = () => {
    let cityValue = cityInput.value;  //cityInpt.valu ko cityValue variab me rakh dia
    // if input field is empty
    if (cityValue === '') {
       result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
    }
    // if input field is not empty
    else {

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`
        //clear the input field
        cityInput.value = '';
    fetch(url)
    .then((resp) => resp.json())
    //if city name is valid
    .then((data) => {
        console.log(data);
        console.log(data.sys.country);
        console.log(data.timezone);
        console.log(currentDate);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.temp);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        console.log(data.wind.speed);
        console.log(data.main.feels_like);
        console.log(data.main.humidity);
        console.log(data.main.pressure);

        result.innerHTML = `
        <h2>${data.name}</h2>
        <p class="p">${data.sys.country}</p>
        <p class="p">${currentDate}</p>
        <p class="p">${data.timezone}</p>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <div class="deg">
            
        <img src= "https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        </div>
        <h1>${data.main.temp}&#176;</h1>
        
        <div class="temp-container">
           <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.main.temp_min}</h4>
           </div>
           <div>
                <h4 class="title">mix</h4>
                <h4 class="temp">${data.main.temp_max}</h4>
           </div>
        </div>
           <div class="feel-container">
             <div>
                <p class="title">Wind Speed</p>
                <p class="feel">${data.wind.speed}</p>
             </div>
             <div>
                <p class="title">feels_like</p>
                <p class="feel">${data.main.feels_like}</p>
             </div>
             <div>
                <p class="title">Humidity</p>
                <p class="feel">${data.main.humidity}</p>
           </div>
           <div>
                <p class="title">Pressure</p>
                <p class="feel">${data.main.pressure}</p>
           </div>
        </div>` 
    })
    //If city name is not valid
    .catch(()=>{
    result.innerHTML = `<h3 class="msg">city not found</h3>`
    })
    }
};
searchBtn.addEventListener('click', getWeather);
window.addEventListener('load', getWeather);
(is me to 1 condition lagao kar dekh lena jb tm if ki condi dalo input.value me kuch nhi aye to innerhtml empty ' ' aye
or responsive k hwale sy neecy wind pressure ye sb jb mobi device par khrab ho rha ha )

