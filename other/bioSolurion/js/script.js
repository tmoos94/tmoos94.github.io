const BODY = document.querySelector('body'); //scrolling
const HTML = document.querySelector('html');
const fixedTop = document.querySelector('.fixedTop');

//hero slider
const swiper = new Swiper(".hero", {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

// floating button
window.addEventListener('scroll', function () {
    //fixed scroll btn

    let i = this.document.documentElement.scrollTop

    console.log(i);
    if (i > 800) {
        BODY.classList.add('scrolling');
    }
    else {
        BODY.classList.remove('scrolling');
    }
});

fixedTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// news slider

const carousel_slider = new Swiper(".carousel_wrap", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        999: {
            slidesPerView: 3,
        },
    },
});


// nck_contractor slider

const dep3_slide = new Swiper(".dep3_slide", {
    speed: 1000,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 36,
    autoplay: {
        disableOnInteraction: false
    }
})

// kebab_ico

const kebabBtn = document.querySelector('.kebab_ico')

kebabBtn.addEventListener('click', function (e) {
    e.preventDefault()

    BODY.classList.toggle('mobNav')

    if (BODY.classList.contains('mobNav')) {
        HTML.style.overflow = "hidden"
        HTML.style.paddingRight = "17px"
    } else {

        HTML.style.paddingRight = 0
        HTML.style.overflowY = "visible"
    }

    function resize() {
        HTML.style.paddingRight = 0
        HTML.style.overflowY = "visible"
        BODY.classList.remove('mobNav')
    }

    window.addEventListener('resize', function () {
        if (this.window.innerWidth > 999) {
            resize()
        }
    })

})