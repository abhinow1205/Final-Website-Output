/* ==========================================
   LOAD FIRE WEEK COMPONENT
========================================== */

fetch("components/fire_week_photos_comp.html")
  .then((res) => res.text())
  .then((data) => {

    // Insert component
    document.getElementById("fire_week_photos_comp").innerHTML = data;

    /* ==========================================
       FIRE WEEK ACCORDION
    ========================================== */

    const fireAccordion = document.querySelector(".fireAccordion");

    if (fireAccordion) {

      fireAccordion.classList.add("active");

      fireAccordion
        .querySelector(".fireAccordionBtn")
        .addEventListener("click", () => {

          fireAccordion.classList.toggle("active");

        });

    }

    /* ==========================================
       GALLERY MODAL
    ========================================== */

    const galleryModal = document.querySelector(".galleryModal");
    const modalImage = document.querySelector(".modalImage");

    const closeModal = document.querySelector(".closeModal");
    const prevBtn = document.querySelector(".prevImage");
    const nextBtn = document.querySelector(".nextImage");
    const counter = document.querySelector(".imageCounter");

    const galleryImages = document.querySelectorAll(".fireGallery img");

    let currentIndex = 0;

    function updateModal() {

      modalImage.src = galleryImages[currentIndex].src;
      modalImage.alt = galleryImages[currentIndex].alt || "";

      counter.textContent =
        `${currentIndex + 1} / ${galleryImages.length}`;

    }

    galleryImages.forEach((image, index) => {

      image.addEventListener("click", () => {

        currentIndex = index;

        updateModal();

        galleryModal.classList.add("active");

        document.body.style.overflow = "hidden";

      });

    });

    /* NEXT */

    nextBtn.addEventListener("click", () => {

      currentIndex++;

      if (currentIndex >= galleryImages.length) {

        currentIndex = 0;

      }

      updateModal();

    });

    /* PREVIOUS */

    prevBtn.addEventListener("click", () => {

      currentIndex--;

      if (currentIndex < 0) {

        currentIndex = galleryImages.length - 1;

      }

      updateModal();

    });

    /* CLOSE */

    function closeGallery() {

      galleryModal.classList.remove("active");

      document.body.style.overflow = "";

    }

    closeModal.addEventListener("click", closeGallery);

    galleryModal.addEventListener("click", (e) => {

      if (e.target === galleryModal) {

        closeGallery();

      }

    });

    /* KEYBOARD */

    document.addEventListener("keydown", (e) => {

      if (!galleryModal.classList.contains("active")) return;

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

  })
  .catch((err) => console.error("Error loading Fire Week component:", err));