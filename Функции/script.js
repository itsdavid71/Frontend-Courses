// Теория:
// 1. Нельзя в пределах одной видимости объявить переменную и функции одного названия
// 2. Стрелочная функция:
// const arrowFunc = (a + b) => a + b;

function init() {


    // 1
    // const numBlock = prompt('Введите количество блоков');
    // const field = document.querySelector('.js__blocks');


    // function setColor(e, i) {
    //     const numberBlock = Number(e);
    //     if (i % 2 == 0) {
    //         e.style.background = 'red';
    //     }
    // }

    // for (let i = 0; i < numBlock; i++) {
    //     const appendBlock = document.createElement('button');
    //     const appendTitle = document.createElement('h2');
    //     appendTitle.innerText = 'Заголовок ' + i;
    //     appendBlock.innerText = 'Блок ' + i;
    //     field.appendChild(appendBlock);
    //     field.appendChild(appendTitle);
    //     setColor(appendBlock, i);
    // }

    // 2
    // let userName = 'Вася';
    // function showMessage(name, text = 'Текст по-умолчанию') {
    //     // userName = prompt('Как вас зовут?');
    //     // const message = 'Привет ' + userName + '!';

    //     const message = name + ': ' + text ;
    //     console.log(message);
    // }

    // const messageName = 'Диоген';
    // const messageText = 'Как дела?'
    // showMessage(messageName, messageText);

    // 3

    const sum = (a, b) => a + b;

    let result = sum(3,4);
    console.log(result);

    // // 4
    
    // function checkAge(age) {
    //     if (age > 18) {
    //         return true;
    //     } else {
    //         return confirm('А родители разрешили?');
    //     }
    // }

    // let age = prompt('Введите свой возраст');
    // if (checkAge(age)) {
    //     console.log('Доступ разрешен');
    // } else {
    //     console.log('Доступ закрыт');
    // }


    // 5

    function checkMin(a, b) {
        return a > b ? b : a;
    }

    function mathPow(a, b) {
        // const result = Math.pow(a, b)
        let powNum = Number(a);
        let powResult = 0;
        for (let i = 0; i < b; i ++) {
            powResult = powResult + powNum;
        }
        
        return powResult;
    }

    const numberFirst = prompt('Введите первое значение');
    const numberSecond = prompt('Введите второе значение');
    // const numberMin = checkMin(numberFirst, numberSecond);
    const runPow = mathPow(numberFirst, numberSecond);
    
    // console.log(numberMin);
    console.log(runPow);


    // 6

    function ask(question, yes, no) {
        if (confirm(question)) {
            yes();
        } else {
            no();
        }
    }

    function showYes() {
        alert('Да');
    }

    function showNo() {
        alert('Никак нет!');
    }

    ask('Вы согласны?', showYes, showNo);

}

window.onload = init; // Callback - присваивание функции


