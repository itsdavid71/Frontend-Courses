function init() {


    // 1 вариант
    const text = prompt('Введите слово');

    let reverseText = text.split('').reverse().join('').replace(/ +/g, '').toLowerCase();

    outputText = text.replace(/ +/g, '').toLowerCase();


    console.log(outputText);
    console.log(reverseText);


    // 2 вариант

    let reversestring = (word) => {

        let result = "";

        for(let i = word.length - 1; i  >= 0; i--) {
            result += word[i];
        }
        return result;
    }

    console.log(reversestring('Hello'));

}

window.onload = init;