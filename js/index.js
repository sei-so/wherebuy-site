// Splide

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
    new Splide( '.best-cards', splideOptions ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.sale-cards', splideOptions ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.up-to-x-cards', splideOptions ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.new-cards', splideOptions ).mount();
} );