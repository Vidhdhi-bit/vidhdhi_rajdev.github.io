let currentTestimonial = 0;
const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".dot");

function showTestimonial(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentTestimonial = index;
}

// AUTO SLIDE
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % slides.length;
    showTestimonial(currentTestimonial);
}, 5000);

