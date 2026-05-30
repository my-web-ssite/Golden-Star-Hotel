// مصفوفة روابط صور حقيقية، سريعة، ومضمونة العمل 100%
const rawImages = [
    { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200", title: "الأجنحة الملكية" },
    { url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200", title: "غرف فخمة" },
    { url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200", title: "إطلالة البرجين" },
    { url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200", title: "خدمة الغرف" },
    { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200", title: "عدسة الزوار" }
];

const wrapper = document.getElementById('galleryWrapper');

// بناء السلايدات
rawImages.forEach((imgData) => {
    wrapper.innerHTML += `
        <div class="swiper-slide">
            <span class="badge"><i class="fas fa-hotel"></i> ${imgData.title}</span>
            <img src="${imgData.url}" alt="Golden Star Hotel">
            <div class="img-info"><h3>فخامة تليق بكم</h3></div>
        </div>`;
});

// تشغيل السلايدر
const swiper = new Swiper('.swiper', {
    loop: true,
    effect: 'fade',
    autoplay: { delay: 4000 },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
});
