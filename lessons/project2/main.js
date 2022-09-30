fetch("https://api.openweathermap.org/data/2.5/weather?q=москва&lang=ru&appid=6ba9e1e9533fa1ea228446751f5ce6ef")
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector(".icon").innerHTML = `<img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png>`
        document.querySelector(".city-name").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273) + '&deg;C'
        document.querySelector(".temp-min").innerHTML = Math.round(data.main.temp_min - 273) + '&deg;'
        document.querySelector(".temp-max").innerHTML = Math.round(data.main.temp_max - 273) + '&deg;'
        document.querySelector(".wind").innerHTML = 'Ветер' + ' ' + Math.round(data.wind.speed) + 'м/с'
    })