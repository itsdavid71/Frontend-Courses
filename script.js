let x_num = prompt('Введите значение X');
let y_num = prompt('Введите значение Y');

let result = (Number(x_num) + 2 * Number(y_num)) / 2;

const container = document.getElementById("result");
container.innerText = result;

const div = document.createElement('div');

document.body.appendChild(div);
div.innerText = 'созданный на js блок';

function hello (a) {
    alert('Ну привет! ' + a + '!');
}

window.onload = hello('Омлет');