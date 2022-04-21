function init () {

    let value = 0;
    
    const buttonPlus = document.querySelector('.js__plus');
    const buttonMinus = document.querySelector('.js__minus');
    const result = document.querySelector('.js__value');
    const diff = document.querySelector('.js__diff');



    
    const min = -50;
    const max = 50;

    
    function plus() {
        
        const val_el = value + Number(diff.value);
        const diff_el = val_el < max ? Number(diff.value) : 0;
        value = value + diff_el;
        result.innerText = value;

        // if (value <= 10) {
        //     result.style.color = '#000';
        // } else if (value > 10 && value <= 20) {
        //     result.style.color = '#f00';
        // } else {
        //     result.style.color = '#0f0';
        // }

        switch(value) {
            case 1: 
                result.style.color = "#00f";
                break;
            case 2: 
                result.style.color = "#0f0";
                break;
            case 3: 
                result.style.color = "#f00";
                break;
            default: 
                result.style.color = "#000";
                break;
        }

    };

    function minus() {
        if (value > min) {
            value = value - Number(diff.value);
            result.innerText = value;
        }
    };

    result.innerText = value;
    buttonPlus.onclick = plus;
    buttonMinus.onclick = minus;
}

window.onload = init;