let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header');
let product = document.querySelector('.product');
let oy = document.querySelector('.oy');
let mobile1 = document.querySelector('.mobile1');
let mobile2 = document.querySelector('.mobile2');
let mobile3 = document.querySelector('.mobile3');
let mobile4 = document.querySelector('.mobile4');
let mobile5 = document.querySelector('.mobile5');
let mobile6 = document.querySelector('.mobile6');
let active = document.querySelector('.active');
let body = document.getElementsByTagName('body');












menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll =()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
    product.classList.remove('active');
    

}


oy.addEventListener("click",(e)=>{
    e.preventDefault();
     document.body.classList.toggle('darkMode');
    header.classList.toggle('darkMode');
   product.classList.remove('darkMode');

    navbar.classList.remove('darkMode');
    oy.classList.toggle('darkMode');
    mobile1.classList.toggle('darkMode');
    mobile2.classList.toggle('darkMode');
    mobile3.classList.toggle('darkMode');
    mobile4.classList.toggle('darkMode');
    mobile5.classList.toggle('darkMode');
    mobile6.classList.toggle('darkMode');



})


