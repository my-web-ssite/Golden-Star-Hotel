// مبرمج ليعمل بشكل دائري بدون توقف
const wrap = document.getElementById("mainSlider");
const imgs = wrap.getElementsByTagName("img");
let step = 0;

function moveSlider() {
    step++;
    // إذا وصل للصورة الثامنة (رقم 7 في البرمجة) يصفر العداد ليعود للأولى
    if (step >= imgs.length) {
        step = 0;
    }
    // تحريك الصور بناءً على العرض
    wrap.style.transform = `translateX(${step * 100}%)`; 
    // ملاحظة: استخدمنا + أو - حسب اتجاه اللغة، في RTL نستخدم الموجب للتحريك لليسار
}

// العرض يتحرك تلقائياً كل 3 ثوانٍ
setInterval(moveSlider, 3000);
