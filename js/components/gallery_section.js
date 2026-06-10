function initializeGallery() {

    /* =========================
       ELEMENTS
    ========================== */

    const galleryTrack =
    document.querySelector(".galleryTrack");

    const leftArrow =
    document.querySelector(".leftArrow");

    const rightArrow =
    document.querySelector(".rightArrow");

    const seeAllBtn =
    document.querySelector(".seeAllBtn");

    const imageModal =
    document.querySelector(".imageModal");

    const modalImage =
    document.querySelector(".modalImage");

    const viewButtons =
    document.querySelectorAll(".viewImage");

    const closeImageModal =
    document.querySelector(".closeImageModal");

    const videoModal =
    document.querySelector(".videoModal");

    const modalVideo =
    document.querySelector(".modalVideo");

    const playButtons =
    document.querySelectorAll(".playVideo");

    const closeVideoModal =
    document.querySelector(".closeVideoModal");

    /* =========================
       SCROLL RIGHT
    ========================== */

    rightArrow?.addEventListener(
      "click",
      () => {

        galleryTrack.scrollBy({
          left: 400,
          behavior: "smooth"
        });

      }
    );

    /* =========================
       SCROLL LEFT
    ========================== */

    leftArrow?.addEventListener(
      "click",
      () => {

        galleryTrack.scrollBy({
          left: -400,
          behavior: "smooth"
        });

      }
    );

    /* =========================
       SEE ALL
    ========================== */

    seeAllBtn?.addEventListener(
      "click",
      () => {

        window.location.href =
        "gallery.html";

      }
    );

    /* =========================
       OPEN IMAGE
    ========================== */

    viewButtons.forEach(button => {

      button.addEventListener(
        "click",
        () => {

          modalImage.src =
          button.dataset.image;

          imageModal.classList.add(
            "active"
          );

          document.body.style.overflow =
          "hidden";

        }
      );

    });

    /* =========================
       CLOSE IMAGE
    ========================== */

    closeImageModal?.addEventListener(
      "click",
      () => {

        imageModal.classList.remove(
          "active"
        );

        document.body.style.overflow =
        "auto";

      }
    );

    /* =========================
       OPEN VIDEO
    ========================== */

    playButtons.forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const source =
          modalVideo.querySelector(
            "source"
          );

          source.src =
          button.dataset.video;

          modalVideo.load();

          videoModal.classList.add(
            "active"
          );

          modalVideo.play();

          document.body.style.overflow =
          "hidden";

        }
      );

    });

    /* =========================
       CLOSE VIDEO
    ========================== */

    closeVideoModal?.addEventListener(
      "click",
      () => {

        videoModal.classList.remove(
          "active"
        );

        modalVideo.pause();

        document.body.style.overflow =
        "auto";

      }
    );

    /* =========================
       CLOSE OUTSIDE CLICK
    ========================== */

    imageModal?.addEventListener(
      "click",
      (e) => {

        if(e.target === imageModal){

          imageModal.classList.remove(
            "active"
          );

          document.body.style.overflow =
          "auto";

        }

      }
    );

    videoModal?.addEventListener(
      "click",
      (e) => {

        if(e.target === videoModal){

          videoModal.classList.remove(
            "active"
          );

          modalVideo.pause();

          document.body.style.overflow =
          "auto";

        }

      }
    );

}

/* =========================
   LOAD COMPONENT
========================= */

fetch('components/gallery_section.html')
.then(res => res.text())
.then(data => {

    document.getElementById(
      'gallery_sec'
    ).innerHTML = data;

    initializeGallery();

});