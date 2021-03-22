
const splideOptions = {
    type   : 'loop',
    perPage: 4,
    speed: 300,
    autoHeight: true,
    perMove: 1,
    autoplay: true,
    interval: 2500,
    pagination: false,
}


document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', splideOptions ).mount();
} );