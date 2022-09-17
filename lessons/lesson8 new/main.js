let element = document.querySelectorlector('.element');
let add = document.querySelector('.add');
let del = document.querySelector('del');

add.onclick = function() {
    element.classlist.toggle('length')
}

add.onclick = function() {
    element.classlist.add('btn1','btn2','btn3')
}
del.onclick = function() {
    element.classlist.remove('btn3')
}