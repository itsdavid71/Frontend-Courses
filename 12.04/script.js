function init() {

    function handler1() {
        console.log('привет 1');
        elem.removeEventListener("click", handler1);
    }

    let i = 0;
    function handler2(e) {
        console.log('привет ' + i);
        console.log(e);
        i = i + 1;
    }
    function handler3(num) {
        console.log('опа ' + num);
    }

    function bgRed() {
        document.body.style.background = "yellow";
    }

    const div = document.getElementById('content');
    function hideMe(e) {
        div.style.display = 'none';
        e.target.innerText = 'Ну спрятал!';
    }

    const elem = document.getElementById('elem');
    elem.addEventListener('click', hideMe);



    const menuHeader = document.querySelector('.menu__header');


    function menuButton(e) {
        console.log(e);
        const menu = document.querySelector('.menu__items');
        menuShow = window.getComputedStyle(menu).display;
    
        // function toggle(e) {
            
        // }

        
        let display = menu.style.display;


        console.log(menuShow);
        // menuShow = 'none' ? menu.style.display = 'block' : menu.style.display = 'none';

        // switch (menuShow) {
        //     case 'none':
        //         show;
        //         break;
        //     case 'block':
        //         hide;
        //         console.log('BLOCK!');
        //         break;
        // }

        if (menuShow == 'none') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    }


    menuHeader.addEventListener('click', event => menuButton(event));



    const popup = document.getElementById('popup');

    let popupItems = document.querySelectorAll('.popup__item');


    let removeElement = (e) => e.remove();

    const popupField = document.getElementById('popup');
    popupField.onclick = function(e) {
        let popupParent = e.target.closest('.popup__item');
        if (!e.target.classList.contains('popup__close')) return;
        if (!popupParent) return;
        removeElement(popupParent);
    }



    // Tabs

    const tabField = document.getElementById('tabs');
    const tabResult = document.querySelector('.tab__result');
    tabField.onclick = function(e) {
        if (!e.target.classList.contains('tab')) return;
        for (let i = 0; i < tabField.children.length; i++) {
            tabField.children[i].classList.remove('tab__active');
        }
        e.target.classList.add('tab__active');        
        let tabName = e.target.textContent;
        tabResult.innerText = tabName;
    }

    // 



    // Accordion

    const accordionField = document.getElementById('accordion');

    accordionField.onclick = function(e) {

        const accordionParent = e.target.closest('.accordion__item');
        const accordionField = e.target.closest('#accordion');;
        
        if (accordionParent.classList.contains('accordion__active')) {
            accordionParent.classList.remove('accordion__active'); 
            return;
        }
        
        for (let i = 0; i < accordionField.children.length; i++) {
            accordionField.children[i].classList.remove('accordion__active');
        }
        accordionParent.classList.add('accordion__active');
    }



    // popupItems.forEach(function(e) {
    //     console.log(e);
    //     let closeEl = document.createElement("span");
    //     let close = e.appendChild(closeEl);
    //     close.innerText = 'X';
    //     close.className = 'popup__close';
    //     close.addEventListener('click', closePopup);
    // });


    

    // const popupClose = document.querySelectorAll('.popup__close');
    // console.log(popupClose);
    // popupClose.addEventListener('click', close);



    // POPUP

    
    

    // elem.onclick = () => console.log(3);
    // elem.addEventListener("click", handler1);
    // elem.addEventListener("click", handler2);
    // elem.addEventListener("dblclick", bgRed);



    // Football

    const field = document.getElementById('football');
    const ball = document.querySelector('.ball');

    function position(e) {

        console.log(e);
        // Проверка клика на поле
        const clickField = e.srcElement;
        if (clickField.id != 'football') return false;

        console.log(field.offsetWidth);
        console.log(field.offsetHeight);

        let offX = e.offsetX;
        let offY = e.offsetY;
        console.log(offX);
        console.log(offY);
        offX = Number(offX) - 30;
        offY = Number(offY) - 30;
        
        ball.style.top = offY + "px";
        ball.style.left = offX + "px";
    }

    field.addEventListener('click', position);

}


window.onload = init;