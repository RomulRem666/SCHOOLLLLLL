// localStorage.setItem('dat',13)
// console.log(localStorage.setItem('dat'))
// let score = [100,200,300]
// localStorage.setItem('score', JSON.stringify(score))
// let record = localStorage.getItem('score')
// record = JSON.parse(record)
// console.log(record[1])
// console.log(typeof (record))
// let xhttp = new XMLHttpRequest()
// console.log(xhttp)
// xhttp.onreadystatechange == function() {
//     if (this.readyState == 4&& this.status == 200) {
//         myFunc(this.responseText)
//     }
// }
// xhttp.open("GET","https://automarine.ru")
// xhttp.send()
// function myFunc(data) {
//     console.log(data)
// }
// fetch('https://automarine.ru')
// fetch(data=>{
//     console.log(data)
// })

fetch('...')
.then(data => {
    console.log(data)
    data.text().then(data2 =>{
        console.log(data2)
    })
})
a.then(data =>{
    console.log(data)
})

Promise.all([a,b]).then(data =>{
    console.log(data)
})
b.then(data =>{
    console.log(data)
})