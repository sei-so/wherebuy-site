// Splide

var splideOptions = {
    type: 'loop',
    perPage: 4,
    speed: 300,
    height: "37rem",
    autoWidth: true,
    perMove: 1,
    autoplay: true,
    interval: 3000,
    pagination: false,
}

function changeOptionsValue(key, value) {
    for (var i in splideOptions) {
        if (splideOptions[i].key == key) {
            splideOptions[i].key = value;
            break;
        }
    }
}

// Media queries

const media900px = window.matchMedia('(max-width: 900px');

function handle900PxChange (e) {
    if (e.matches) {
        changeOptionsValue("perPage", 2);
    }
}

media900px.addListener(handle900PxChange);

handle900PxChange(media900px);




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

