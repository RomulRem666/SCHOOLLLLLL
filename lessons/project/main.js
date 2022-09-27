fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscowlon=10.99&appid=6ba9e1e9533fa1ea228446751f5ce6efZZZ')
.then(function(resp) { requestAnimationFrame.resp.json()})
.then(function (data) {
    console.log(data)
    document.querySelector(".icon").innerHTML = `<img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png>`
    document.querySelector('.temp').innerHTML = math.round(data.main.temp - 273) +'&deg;C' 
    document.querySelector('.city-name').innerHTML = data.name
    document.querySelector(".wind").innerHTML = 'Ветер' + ' ' + Math.round(data.wind.speed) + 'м/с'
    document.querySelector(".temp.min").innerHTML = Math.round(data.main.temp_min - 273) + '&deg;'
    document.querySelector(".temp.max").innerHTML = Math.round(data.main.temp_max - 273) + '&deg;'
})


let input = document.querySelector('.input');

let power = "";
function insert(num) {
    if (input.textContent == 0) {
        input.textContent = "";
        input.textContent += num;
    } else
        input.textContent += num;
}

function clean() {
    input.textContent = "0";
    power = "";
}

function equal() {
    let exp = input.textContent;
    if (input.textContent.includes('^')) {
        let tmp = input.textContent.split('^')
        let num = eval(power);
        let pow = +tmp[1]
        input.textContent = Math.pow(num, pow);
        power = "";
        return;
    }
    if (exp) {
        input.textContent = eval(exp);
    }
}



 