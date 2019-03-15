document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.getElementById('openMenu');
    var navList =  document.getElementsByClassName('d-none')[0];

    hamburger.addEventListener('click', function (e) {
        e.preventDefault();

        navList.classList.toggle('d-flex');
        hamburger.classList.toggle('rotate');
    });
});

var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 264
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
    gutter:30,
    horizontalOrder: true
});



