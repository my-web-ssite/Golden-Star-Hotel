document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementById("sliderWrapper");
    const images = wrapper.querySelectorAll("img");
    let index = 0;

    function startSlider() {
        index++;
        if (index >= images.length) index = 0;
        wrapper.style.transform = `translateX(${-index * 100}%)`;
    }

    setInterval(startSlider, 3500); // 3.5 ثوانٍ لكل صورة
});
