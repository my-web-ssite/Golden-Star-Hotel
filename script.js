const rawImages = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", // صورة مضمونة
    "https://googleusercontent.com/maps.google.com/8",
    "https://googleusercontent.com/maps.google.com/9",
    "https://googleusercontent.com/maps.google.com/10",
    "https://googleusercontent.com/maps.google.com/11",
    "https://googleusercontent.com/maps.google.com/12"
];

const wrapper = document.getElementById('galleryWrapper');

rawImages.forEach((url) => {
    wrapper.innerHTML += `
        <div class="swiper-slide">
            <img src="${url}" 
                 onerror="this.src='https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200'" 
                 alt="فندق جولدن استار">
        </div>`;
});

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: { delay: 3000 },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
});
