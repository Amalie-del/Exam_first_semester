document.querySelectorAll('.grid-gallery').forEach(gallery => {
    const images = gallery.querySelectorAll('.image-container img');
    const prevBtn = gallery.querySelector('.prev');
    const nextBtn = gallery.querySelector('.next');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    showImage(currentIndex);
});
