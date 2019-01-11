$(document).ready(function () {
    $('a[href*=#]').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500);
        e.preventDefault();
        return false;
    });
});


var $grid = $('.grid').imagesLoaded(function () {
    $grid.masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });
});


function initMap() {
    var pos = {lat: 49.440779, lng: 32.064405}

    var opt = {
        center: pos,
        zoom: 17,
    };

    var map = new google.maps.Map(document.getElementById("Map"), opt);

    var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: "Our office",
        icon: '../img/map-mark.svg'
    });

    var info = new google.maps.InfoWindow({
        content: '<h4>This is our main office!</h4>'
    });

    marker.addListener("click", function () {
        info.open(map, marker);
    });
}



