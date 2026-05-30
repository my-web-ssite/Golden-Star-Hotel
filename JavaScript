// مصفوفة الروابط الـ 17 الحقيقية لصور الفندق
const rawImages = [
    "https://maps.app.goo.gl/T8DYNahpnQjJqX3R6?g_st=ac",
    "https://maps.app.goo.gl/oNEKBovHtfp17TFn8?g_st=ac",
    "https://maps.app.goo.gl/CoiZfC1GvVckiuC28?g_st=ac",
    "https://maps.app.goo.gl/RwomK7MrhdYDaCDL6?g_st=ac",
    "https://maps.app.goo.gl/tEYxz1XeLiK5A8xd8?g_st=ac",
    "https://maps.app.goo.gl/iyqFjjynLudTCExT7?g_st=ac",
    "https://maps.app.goo.gl/RtVMR3esbWmVPJ9T9?g_st=ac",
    "https://maps.app.goo.gl/gr33Dc28WPN3GoJP8?g_st=ac",
    "https://maps.app.goo.gl/qgeUkrJrHvkrYNMe8?g_st=ac",
    "https://maps.app.goo.gl/SkAxhCHWJfvNdkRK6?g_st=ac",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.9332!2d43.2500!3d13.3100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDE4JzM2LjAiTiA0M8KwMTUnMDAuMCJF!5e0!3m2!1sar!2sye!4v1620000000000!5m2!1sar!2sye",
    "https://maps.app.goo.gl/v1VDGB4MPEfoUSVu5?g_st=ac",
    "https://maps.app.goo.gl/qW9WoFJfZj3a6xAQ8?g_st=ac",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.123456789!2d43.25!3d13.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x160f2526f6d20369%3A0x755bd9cc6118c3f9!2zZm9uZG9xIGdvbGRlbiBzdGFy!5e0!3m2!1sar!2sye!4v1715000000000!5m2!1sar!2sye",
    "https://maps.app.goo.gl/to5tz3GKvjeNRMoG8?g_st=ac",
    "https://maps.app.goo.gl/zswVVPH8mg6fZkHL8?g_st=ac",
    "https://maps.app.goo.gl/UcrYUPAmLEXN9g8F7?g_st=ac"
];

const wrapper = document.getElementById('galleryWrapper');

// بناء وإدراج السلايدات وتصنيفها ذكياً
rawImages.forEach((url, index) => {
    // معالجة مشكلة الأمان تلقائياً بتحويل الروابط إلى https
    const secureUrl = url.replace("http://", "https://");
    
    let title = "الأجنحة الملكية";
    let isVisitor = false;

    // توزيع الشارات والبطاقات بناءً على مصفوفتك المرتبة
    if (index >= 14) {
        title = "عدسة الزوار";
        isVisitor = true;
    } else if (index >= 10 && index < 14) {
        title = "إدارة الفندق";
    } else if (index >= 4 && index < 10) {
        title = "غرف فاخرة";
    }

    const badgeClass = isVisitor ? 'badge visitor' : 'badge';
    const icon = isVisitor ? '<i class="fas fa-camera"></i>' : '<i class="fas fa-bed"></i>';
    
    wrapper.innerHTML += `
        <div class="swiper-slide">
            <span class="${badgeClass}">${icon} ${title}</span>
            <img src="${secureUrl}" alt="فندق جولدن استار المخا" loading="lazy">
            <div class="img-info"><h3>تجربة إقامة استثنائية</h3></div>
        </div>`;
});

// تشغيل وتفعيل محرك العرض السلايدر (Swiper)
const swiper = new Swiper('.swiper', {
    loop: true,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
});
