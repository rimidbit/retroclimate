window.onload = function() {

    initActiveMenu();												// инициализируем функцию для меню

    function initActiveMenu() {
        var holder = document.querySelector('#menu');				// находим обертку с кнопкой для открытия
        var menuButton = holder.querySelector('.head-menu-button'); // находим кнопку
        var classActive  = 'active'; 								// активный класс

        menuButton.addEventListener('click', function() {
            holder.classList.toggle(classActive); 					// доабвляется класс
        });
    }
}
