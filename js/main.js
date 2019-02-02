function openMenu() {
    menu.classList.toggle('active');
}
var menu = document.querySelector('#nav-mob');
menu.addEventListener('click', openMenu);
