// const title = document.querySelector('.title')
// // title.style.color = 'blue'
// // title.style.marginLeft = '200px'

// console.log(title.style)

// title.classList.add('black')
// title.classList.remove('black')

// let btn = document.querySelector(".btn")
// btn.onclick = function  () {
//     this.classList.toggle('black')
// }

// console.log(title.getAttribute('data'))
// console.log(document.querySelector('link')[1].getAttribute('href'))


// // [link1 link2]
// // [0,1]

// title.setAttribute('date-num', 6)

// let genre = document.querySelectorAll('.genge')

// for (let i=0; i<genge.length; i++){
//     genge[i].onclick = function(){
//         let shop = document.querySelector('.shop').value
//         let price =  this.getAttribute('data')
//         console.log(shop*price)
//     }
// }

const button = document.querySelector('input')
let shirina= 5
let visota= 6

let element = document.querySelectorAll('.element')
for (let i=0; i<=element.length; i++){
    element[i].onclick = function(){
        let shirina= document.querySelector('.shirina')
        let visota = document.querySelector('.visota')
        console.log([shirina,visota])
    }
}
let atrib = 6
let monopol= 8
let extra = 9
let part= document.querySelector('button')
for (let i=0; i<=part.length; i++){
    part[i].onclick = function(){
        console.log([atrib, monopol, extra])
    }
}

