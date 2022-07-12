var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
var btn = document.querySelector('button');
btn.addEventListener('click', function (e) {
    e.preventDefault();
    var n1 = num1.value;
    var n2 = num1.value;
    var res = add(+n1, +n2);
    console.log(res);
});
function add(n1, n2) {
    return n1 + n2;
}
