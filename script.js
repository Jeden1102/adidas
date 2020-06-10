let burger = document.querySelector('.burger');
let sideM = document.querySelector('.side-menu');
let text = document.querySelector('#intro-text');
burger.addEventListener('click', sideMenu);

function sideMenu(){
    const burgerLineOne = document.querySelector('.burger-line-one');
    const burgerLineTwo = document.querySelector('.burger-line-two');
    const burgerLineThree = document.querySelector('.burger-line-three');
    sideM.classList.toggle('side-after');
    text.style.display="none";

    burgerLineOne.classList.toggle('transform-line-one');
    burgerLineTwo.classList.toggle('transform-line-two');
    burgerLineThree.classList.toggle('transform-line-three');
    
}

//Menu closing

