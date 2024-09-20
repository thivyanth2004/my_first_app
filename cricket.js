let currentSlide = 0;

function moveSlide(direction) {
    const slide = document.querySelector('.carousel-slide');
    const items = document.querySelectorAll('.item');
    const totalSlides = items.length;

    currentSlide += direction;

    // Check boundaries
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Move the slide
    slide.style.transform = `translateX(${-currentSlide * 300}px)`;
}
