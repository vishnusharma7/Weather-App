
const weatherApi = {
    key: "321da9f31304e6b778dea184b19ae1d9",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

const searchInputBox = document.getElementById('input-box');

searchInputBox.addEventListener('keyup', (event) => {
    
    if(event.key== 'Enter') {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weatherdetail').style.display = "block";
    }

});
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

function showWeatherReport(weather){
    console.log(weather);
    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;
    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    
    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('img/sunny.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('img/cloud.jpg')";
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('img/haze.jpg')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('img/Rainy.jpg')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('img/snow.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('img/thunderstorm.jpg')";
   
        
    } 
    else if(weatherType.textContent == 'img/Mist') {
    
        document.body.style.backgroundImage = "url('mist.jpg')";
}
}

function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}
/* could do with a timeline here */

gsap.from(".inner-top", {
	opacity: 0,
	scale: 0.01,
	duration: 2,
	delay: 0.5
});
gsap.from(".outer-top", {
	opacity: 0,
	scale: 0.2,
	duration: 2,
	delay: 1.5
});
gsap.from(".tick", {
	y: -150,
	opacity: 0,
	ease: "back.out",
	duration: 1.5,
	delay: 3.5
});
gsap.from(".lower-inner", {
	opacity: 0,
	scale: 0.15,
	duration: 2,
	delay: 2
});
gsap.from(".tick-bottom", {
	y: 320,
	opacity: 0,
	ease: "back.out",
	duration: 1.5,
	delay: 4.15
});
gsap.to(".tick-bottom", {
	scaleY: 3,
	yPercent: 70,
	duration: 1.5,
	delay: 7.75
});
gsap.from(".diamond-bottom2", {
	opacity: 0,
	duration: 0.75,
	delay: 8.45
});

gsap.from(".lower-outer", {
	opacity: 0,
	scale: 0.5,
	duration: 2,
	delay: 1.5
});

gsap.to(".wrap", {
	duration: 13,
	delay: 6.5,
	repeat: 1,
	yoyo: true,
	ease: "back.inOut",
	rotate: 180
});
