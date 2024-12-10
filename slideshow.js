let currentIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".image-slideshow .slide");
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
    });

    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(showSlides, 3000);
});
