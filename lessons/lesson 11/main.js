// let a = new Set ()
// a.add (666)         
// a.add("start")
// a.add(5)
// a.add(666)
// console.log(a);
// // a.clear()           
// // console.log(a);

// a.delete("start")      
// console.log(a);

// console.log(a.has(666));   

// for (let i of a) {          
//     console.log(i);
// }

//for in

// key - item - i  

// for(let i in b ) {    индексы
//     console.log(i);
// }

// for(let i in b ) {    значения
//     console.log(b[i]);
// }
//перевод массива в сет
// let c = new Set (b)                
// console.log(c);

// let d = Array.from(c)
// console.log(d);
let a = new Set ()
a.add("e")
a.add("r")
a.add("i")
a.add("k")
a.add("t")
a.add("h")
a.add("e")
a.add("b")
a.add("e")
a.add("s")
a.add("t")
console.log(a);

let input = document.querySelector(".input")
let button = document.querySelector(".btn")

button.onclick = () => {
    a.add (input.value)
    console.log(a);
}

let input2 = document.querySelector(".input2")
let button1 = document.querySelector(".btn1")

button1.onclick = () => {
    document.querySelector(".result").innerHTML = a.has (input2.value)
}

let button2 = document.querySelector(".btn2")
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
button2.onclick = () => {
    for (let i of b ) {
        if (i > 5) {
            let c = [i]
           console.log(c);
        }
    }
}