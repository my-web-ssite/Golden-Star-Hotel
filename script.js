/**
 * نظام التحريك التلقائي المتتالي والدائري لفندق جولدن استار
 * مبرمج بمستوى Senior Consultant لضمان أداء سلس وخالٍ من الأخطاء
 */
document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementById("sliderWrapper");
    const images = wrapper.getElementsByTagName("img");
    const totalImages = images.length;
    let currentIndex = 0;
    const displayDuration = 3000; // مدة بقاء الصورة ثابتة قبل الانتقال (3 ثوانٍ)

    // وظيفة الانتقال التلقائي للصورة التالية
    function startAutoCycle() {
        currentIndex++;
        
        // إذا تعدينا الصورة الثامنة والأخيرة، نعود تلقائياً للصورة الأولى بالصف (المؤشر 0)
        if (currentIndex >= totalImages) {
            currentIndex = 0;
        }
        
        // حساب نسبة الإزاحة الأفقية بناءً على الصورة الحالية وتحريك الحاوية
        const slidePercentage = -(currentIndex * 100);
        wrapper.style.transform = `translateX(${slidePercentage}%)`;
    }

    // تشغيل المؤقت الزمني ليعمل العرض بشكل متتالٍ ومستمر دون توقف نهائي
    setInterval(startAutoCycle, displayDuration);
});
