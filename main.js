// mostrare e nascondere il menu al click

//creare una funzione che al click aggiunge 
// la classe .active al div.hamburger-menu

const button = document.querySelector('.header-right > a');
console.log(button);

const menu  = document.querySelector('.hamburger-menu');
console.log(menu);

// aprire il menu ad hamburger
button.addEventListener('click',
    function() {
        menu.classList.add('active');
    }
);

// chiudere il menu ad hamburger al click o in base al viewport superiore a 1000px
menu.addEventListener('click',
    function() {
        menu.classList.remove('active');
    }
);