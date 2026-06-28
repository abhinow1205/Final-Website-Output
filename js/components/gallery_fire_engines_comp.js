
/* ==========================================
   ACCORDION
========================================== */

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {

    const button = accordion.querySelector(".accordionBtn");

    // Open first accordion by default
    if (index === 0) {
        accordion.classList.add("active");
    }

    button.addEventListener("click", () => {
        accordion.classList.toggle("active");
    });

});


/* ==========================================
   IMAGE MODAL
========================================== */

const modal = document.getElementById("galleryModal");
const modalImage = document.getElementById("modalImage");

const closeBtn = document.querySelector(".closeModal");
const prevBtn = document.querySelector(".prevImage");
const nextBtn = document.querySelector(".nextImage");
const counter = document.querySelector(".imageCounter");

let currentImages = [];
let currentIndex = 0;


/* ==========================================
   OPEN IMAGE
========================================== */

document.querySelectorAll(".imageGrid").forEach(grid => {

    const images = grid.querySelectorAll("img");

    images.forEach((image, index) => {

        image.addEventListener("click", () => {

            // Save only this accordion's images
            currentImages = Array.from(images);

            currentIndex = index;

            updateModal();

            modal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });

});


/* ==========================================
   UPDATE MODAL
========================================== */

function updateModal() {

    modalImage.src = currentImages[currentIndex].src;

    modalImage.alt = currentImages[currentIndex].alt;

    counter.textContent =
        `${currentIndex + 1} / ${currentImages.length}`;

}


/* ==========================================
   NEXT IMAGE
========================================== */

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }

    updateModal();

});


/* ==========================================
   PREVIOUS IMAGE
========================================== */

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    }

    updateModal();

});


/* ==========================================
   CLOSE MODAL
========================================== */

function closeGallery() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}

closeBtn.addEventListener("click", closeGallery);


/* ==========================================
   CLICK OUTSIDE IMAGE
========================================== */

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        closeGallery();

    }

});


/* ==========================================
   KEYBOARD CONTROLS
========================================== */

document.addEventListener("keydown", (e) => {

    if (!modal.classList.contains("active")) return;

    if (e.key === "Escape") {

        closeGallery();

    }

    if (e.key === "ArrowRight") {

        nextBtn.click();

    }

    if (e.key === "ArrowLeft") {

        prevBtn.click();

    }

});


/* ==========================================
   SWIPE SUPPORT (MOBILE)
========================================== */

let touchStartX = 0;
let touchEndX = 0;

modal.addEventListener("touchstart", e => {

    touchStartX = e.changedTouches[0].screenX;

});

modal.addEventListener("touchend", e => {

    touchEndX = e.changedTouches[0].screenX;

    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) < 40) return;

    if (diff > 0) {

        nextBtn.click();

    } else {

        prevBtn.click();

    }

});