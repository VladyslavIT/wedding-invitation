const swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,

    loop: false,

    speed: 700,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    allowTouchMove: true,
});