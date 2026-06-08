function initializeHeroSlider() {

    const slides =
    document.querySelectorAll(".slide");

    const dots =
    document.querySelectorAll(".dot");

    const nextBtn =
    document.querySelector(".next");

    const prevBtn =
    document.querySelector(".prev");

    let currentSlide = 0;

    /* SHOW SLIDE */

    function showSlide(index) {

        slides.forEach((slide) => {

            slide.classList.remove("active");

        });

        dots.forEach((dot) => {

            dot.classList.remove("active");

        });

        slides[index].classList.add("active");

        dots[index].classList.add("active");

    }

    /* NEXT */

    function nextSlide() {

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;

        }

        showSlide(currentSlide);

    }

    /* PREVIOUS */

    function prevSlide() {

        currentSlide--;

        if (currentSlide < 0) {

            currentSlide = slides.length - 1;

        }

        showSlide(currentSlide);

    }

    /* BUTTON EVENTS */

    nextBtn.addEventListener(
        "click",
        nextSlide
    );

    prevBtn.addEventListener(
        "click",
        prevSlide
    );

    /* DOT EVENTS */

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            currentSlide = index;

            showSlide(currentSlide);

        });

    });

    /* AUTO SLIDE */

    setInterval(() => {

        nextSlide();

    }, 5000);

}

fetch('components/hero_slider.html')

.then(response => response.text())

.then(data => {

    document.getElementById(
      'hero_slider'
    ).innerHTML = data;

    // INITIALIZE AFTER HTML LOADS

    initializeHeroSlider();

});