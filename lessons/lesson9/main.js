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

let a = [1,1,1,1,11,1,11,2,2,2,2,2,2,2,2]
document.querySelector("button").onclick = ( ) => {
    document.querySelector(".vivod").innerHTML = a[4]
}
let b = [1,2,2,2,2,2,2,1,1,1,1,1,2,2,2,2]
document.querySelector(".chetniy").onclick = () => {
    for (let i = 0; i < b.length; i++) {
        if (i % 2 === 0) { 
            document.querySelector(".out").innerHTML += b[i]
        }
    }
}
let c= [1,1,1,1,11,1,11,2,2,2,2,2,2,2,2]
document.querySelector(".nechetniy").onclick = () => {
    for (let i = 0; i < c.length; i++) {
        if (i % 2 === 0) {
            console.log('chet')
        }else {
            document.querySelector(".out1").innerHTML += c[i]
        }
        
    }
}
let d = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
document.querySelector(".naobor").onclick = () => {
    for (let i = d.length - 1; i >= 0; i--) {
        for (let b = d[i].length - 1; b >= 0; b-- ) {
            document.querySelector(".out2").innerHTML += d[i][b]
        }
        
    }
}