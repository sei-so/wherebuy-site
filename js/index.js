
const splideOptions = {
    type   : 'loop',
    perPage: 4,
    speed: 300,
    height: "37rem",
    perMove: 1,
    autoplay: true,
    interval: 3000,
    pagination: false,
}


document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', splideOptions ).mount();
} );