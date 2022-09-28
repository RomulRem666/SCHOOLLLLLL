document.querySelector(".one").onclick = (event) => {
    console.log(event);
    console.log("clik-block-1");
}

// document.querySelector(".two").ondblclick = () => {
//     console.log();
//     console.log("clik-block-2");
// }

document.querySelector(".two").oncontextmenu = () => {
    console.log("clik-block-2");
    return false
}
let width = 30
let height = 30
document.querySelector(".three").onmousemove = () => {
    document.querySelector(".three").style.width = width + "px"
    width++
    document.querySelector(".three").style.height = height + "px"
    height++
}

document.querySelector(".three").onmouseenter = () => {
    document.querySelector(".three").style.background = "pink"
}
document.querySelector(".three").onmouseleave = () => {
    document.querySelector(".three").style.background = "#fff"
}
document.querySelector(".three").onmousedown = () => {
    document.querySelector(".three").style.background = "red"
}
document.querySelector(".three").onmouseup = () => {
    document.querySelector(".three").style.background = "#000"
}

// document.querySelector(".inp-test-1").oninput = (event) => {
//     console.log(event);
// }

// document.querySelector(".inp-test-1").onkeypress = (event) => {
//     console.log(event.charCode);
//     console.log(event.code);
//     console.log(event.keyCode);
//     console.log(event.key);
// }

// document.querySelector(".inp-test-1").onkeydown = (event) => {
//     console.log(event.charCode);
//     console.log(event.code);
//     console.log(event.keyCode);
//     console.log(event.key);
// }

document.querySelector(".inp-test-1").onkeyup = (event) => {
    console.log(event.charCode);
    console.log(event.code);
    console.log(event.keyCode);
    console.log(event.key);
}

let wight = 40
let height = 40
document.querySelector(".four").onclick = () => {
    document.querySelector(".four").style.width = wight + "px"
    wight++
    document.querySelector(".four").style.height = height + "px"
    height++
}
let a = document.querySelector(".five").innerHTML
document.querySelector(".five").ondblclick = () => {
    console.log(a);
}
let b = document.querySelector(".img")
let i = 0
let imgs = ["img.jpg", "img2.jpg"]
document.querySelector(".img").onclick = () => {
    b.src = imgs[i++]
    if (i == imgs.length) {
        i = 0
    }
}

document.querySelector(".inp-test-2").onkeypress = (event) => {
    document.querySelector(".out").innerHTML = event.code
}
let c = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0']
document.querySelector(".inp-test-3").onkeypress = (event) => {
    for (let i in c) {
        if (event.code == c[i]) {
            document.querySelector(".out1").innerHTML = false
        }
    } 
}