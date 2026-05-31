document.addEventListener("DOMContentLoaded", () => {
    const wrap = document.getElementById("mainSlider");
    const imgs = wrap.getElementsByTagName("img");
    const total = imgs.length;
    let step = 0;
    const delay = 3000; // 3 ثوانٍ لكل صورة

    function autoPlay() {
        step++;
        
        // إذا وصلنا لآخر صورة، نعود فوراً للبداية
        if (step >= total) {
            step = 0;
        }
        
        // التحريك بنسبة 100% لكل صورة
        // نستخدم القيمة السالبة للتحريك لليسار في الأنظمة التي تدعم الاتجاه العربي
        wrap.style.transform = `translateX(${-step * 100}%)`;
    }

    // تشغيل العرض المتتالي التلقائي
    setInterval(autoPlay, delay);
});
