document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementById("sliderWrapper");
    const images = wrapper.querySelectorAll("img");
    let index = 0;

    setInterval(() => {
        index++;
        if (index >= images.length) index = 0;
        wrapper.style.transform = `translateX(${-index * 100}%)`;
    }, 3500);
});
