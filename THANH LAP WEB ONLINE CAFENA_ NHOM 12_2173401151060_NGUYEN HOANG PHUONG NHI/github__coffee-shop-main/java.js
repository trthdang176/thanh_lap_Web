// header search
var headerSearch = document.querySelector('.header__search-input')

document.querySelector('#header__icon-search').onclick = function() {
    headerSearch.classList.toggle('active')
    //headerCart.classList.remove('active')
    menu.classList.remove('active')
}

window.onscroll = function() {
    headerSearch.classList.remove('active')
    //headerCart.classList.remove('active')
    menu.classList.remove('active')

}

// header cart

//var headerCart = document.querySelector('.header__cart')

document.querySelector('#header__icon-cart').onclick = function() {
    //headerCart.classList.toggle('active')
    headerSearch.classList.remove('active')
    menu.classList.remove('active')
}

// tablet and mobile menu
var menu = document.querySelector('.header__menu-list')

document.querySelector('#header__icon-menu').onclick = function() {
    menu.classList.toggle('active')
    //headerCart.classList.remove('active')
    headerSearch.classList.remove('active')
}

//Cart
