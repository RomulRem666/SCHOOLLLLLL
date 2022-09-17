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
button.classList.remove('atrib')
// let a= 'cool'
// let b = 'well'
// let c = 4

// let d = ['cool','well', 4]

// let e = []

// console.log(d[1])
// console.log(e)

// lat a = [1,2,3,4,5,6,7,8,9]
// const b = ['a', 'b', 'c']

 // Array.push (element1...a.elementN)
// console.log(a.length)
// a.push(11,12,13)
// b.pop()
// console.log(b)

// delete a[2]

// a.splice(2,3)

// let a = [1,2,3]
// let b = [
//     [1,2,3],
//     [6,6,6],
//     [7,7,7]
// ]
// console.log(b)
// for(let i=0; i< b.length; i++){
//     let c = b[i]
//     for(let j=0; j< c.length; j++){
//         console.log(c[j])
//     }
//     // console.log(b[i])
// }
// for(let i=0; i< b.length; i++){
//     let c = b[i]
//     for(let j=c.length -1;j>=0; j--){
//         console.log(c[j])
//     }
    
// }
// let out = ' '
// for (let i = 0; i<blur.length; i++){
//     for(let j = 0;j<b[i].length;j++){
//        out+= b[i][j] + ' '
//     }
//     out += '<br>'
// }
// document.querySelector('.out').innerHTML = out

// for (let i = 0; i<blur.length; i++){
//     for(let j = 0;j<b[i].length;j++){
//        if (b[i][j] >3){
//         out+= b[i][j] + ' '
//     }
//     out += '<br>'
// }

// }

// let a = [1,0,0,0,0]
// document.querySelector('.out').innerHTML = a
// let b = 0 

// document.querySelector('button').onclick = () =>{
//     a[b] = 0
//     a[b+1] = 1
//     b<=1
//     document.querySelector('.out').innerHTML = b
// }


