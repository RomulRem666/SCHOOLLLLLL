let inp = document.querySelector(".ad")
let butt = document.querySelector(".btn")
let ul = document.querySelector('.ul');
butt.onclick = () => {
    let li = document.createElement('li');
    ul.append(li);
    li.textContent = inp.value;
    let btn = document.createElement("button")
    li.append(btn)
    btn.textContent = "Удалить"
}
ul.addEventListener('click', function (event) {
    if (event.target.nodeName === 'BUTTON') {
        event.target.closest('button')
        event.target.closest('li').remove()
    }
})