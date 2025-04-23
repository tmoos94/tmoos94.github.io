//슬라이드 옆으로 자동과 멈춤

let slideInterval;
let isPlaying = true;

function startAutoSlide() {
    slideInterval = setInterval(() => {
        fullpage_api.moveSlideRight();
    }, 60000); // 1분마다
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

document.getElementById('toggleSlide').addEventListener('click', function () {
    if (isPlaying) {
        stopAutoSlide();
        this.textContent = '▶️ Play';
    } else {
        startAutoSlide();
        this.textContent = '⏸ Pause';
    }
    isPlaying = !isPlaying;
});

new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    controlArrows: false,
    scrollHorizontally: true,

    afterLoad: function (origin, destination) {
        const btn = document.getElementById('slideControl');

        if (destination.index === 3) {
            btn.style.display = 'block';
            startAutoSlide();
            isPlaying = true;
            document.getElementById('toggleSlide').textContent = '⏸ Pause';
        } else {
            btn.style.display = 'none';
            stopAutoSlide();
            isPlaying = false;
            document.getElementById('toggleSlide').textContent = '▶️ Play';
        }
    }
});

