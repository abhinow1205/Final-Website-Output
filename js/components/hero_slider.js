async function loadHeroSlides() {

    try {

        const response = await fetch(
            "http://localhost:1337/api/hero-sliders?populate=*"
        );

        const result = await response.json();

        const slidesContainer =
            document.getElementById("heroSlides");

        const dotsContainer =
            document.getElementById("sliderDots");

        slidesContainer.innerHTML = "";
        dotsContainer.innerHTML = "";

        const slidesData = result.data
            .filter(item => item.Active)
            .sort(
                (a, b) =>
                a.Display_Order -
                b.Display_Order
            );

        slidesData.forEach((item, index) => {

            const slide =
                document.createElement("div");

            slide.classList.add("slide");

            if(index === 0) {

                slide.classList.add("active");

            }

            const mediaUrl =
                "http://localhost:1337" +
                item.Media.url;

            if(item.Media_Type === "video") {

                slide.innerHTML = `
                    <video
                        autoplay
                        muted
                        loop
                        playsinline>

                        <source
                            src="${mediaUrl}"
                            type="video/mp4">

                    </video>
                `;

            }
            else {

                slide.innerHTML = `
                    <img
                        src="${mediaUrl}"
                        alt="Hero Slide">
                `;

            }

            slidesContainer.appendChild(
                slide
            );

            const dot =
                document.createElement("span");

            dot.classList.add("dot");

            if(index === 0) {

                dot.classList.add("active");

            }

            dotsContainer.appendChild(dot);

        });

        initializeHeroSlider();

    }
    catch(error) {

        console.error(
            "Error loading hero slides:",
            error
        );

    }

}

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

    function nextSlide() {

        currentSlide++;

        if(currentSlide >= slides.length) {

            currentSlide = 0;

        }

        showSlide(currentSlide);

    }

    function prevSlide() {

        currentSlide--;

        if(currentSlide < 0) {

            currentSlide =
                slides.length - 1;

        }

        showSlide(currentSlide);

    }

    nextBtn.addEventListener(
        "click",
        nextSlide
    );

    prevBtn.addEventListener(
        "click",
        prevSlide
    );

    dots.forEach((dot, index) => {

        dot.addEventListener(
            "click",
            () => {

                currentSlide = index;

                showSlide(currentSlide);

            }
        );

    });

    setInterval(() => {

        nextSlide();

    }, 5000);

}

loadHeroSlides();