//6ba9e1e9533fa1ea228446751f5ce6ef



fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscowlon=10.99&appid=6ba9e1e9533fa1ea228446751f5ce6efZZZ')
.then(function(resp) { requestAnimationFrame.resp.json})
.then(function(data){
    console.log(data)
    document.querySelector('.city-name').innerHTML = data.name
    document.querySelector('.temp').innerHTML = math.round(data.main.temp - 273) +'&deg;C' 
    document.querySelector(".weather").innerHTML = data.weather[0]['description']
    document.querySelector(".icon").innerHTML = `<img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png>`
    document.querySelector(".wind").innerHTML = 'Ветер' + ' ' + Math.round(data.wind.speed) + 'м/с'
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".country").innerHTML = data.sys.country
    document.querySelector(".sunrise").innerHTML =new Date (data.sys.sunrise * 1000)
    document.querySelector(".sunset").innerHTML = new Date (data.sys.sunset * 1000)         

})