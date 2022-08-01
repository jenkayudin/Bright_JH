let burger = document.querySelector('.header__burger');
let headerList = document.querySelector('.header__list')
burger.addEventListener('click', function(e){
    e.preventDefault;
    headerList.classList.toggle('header__list_active');
    burger.classList.toggle('header__burger_active');
});