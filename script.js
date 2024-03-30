
const search = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const temp = document.querySelector('.temprature span')
const claud = document.querySelector('.करन')
const humidity = document.querySelector('.humidity-data span')
const speed = document.querySelector('.speed-data span')
const img = document.querySelector('.img img')


searchBtn.addEventListener('click', async ()=>{
    
    let city = search.value;
    // console.log(city);
    const key = 'ab7a4f56033586387880cd541f647a78'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    let res = await fetch(`${url}`).then(result=>result.json());
    if (res.cod == 404) {
        img.src='./assets/404.png'
        return;
    }
    // console.log("hjhh");
    humidity.innerHTML = res.main.humidity
    temp.innerHTML = (res.main.temp - 273.15).toFixed(1)
    speed.innerHTML = res.wind.speed;
    claud.innerHTML = res.weather[0].description;
    switch (res.weather[0].main) {
        case "Clouds":
            img.src='./assets/cloud.png'
            break;

        case 'Mist':
            img.src='./assets/mist.png'
            break;

        case 'Snow':
            img.src='./assets/snow.png'
            break;

        case 'Clear':
            img.src='./assets/clear.png'
            break;
    
        case 'Rain':
            img.src='./assets/rain.png'
            break;
    
        default:
            img.src='./assets/clear.png'
            break;
    }
})
