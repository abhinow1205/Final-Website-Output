fetch('../components/logos_section.html')
.then(res => res.text())
.then(data => {
  document.getElementById('logos_section').innerHTML = data;
});

/* ================================= */
/* ===== OPTIONAL PAUSE ON HOVER === */
/* ================================= */

const logoTrack = document.querySelector(".logoTrack");

logoTrack.addEventListener("mouseenter", () => {

    logoTrack.style.animationPlayState = "paused";

});

logoTrack.addEventListener("mouseleave", () => {

    logoTrack.style.animationPlayState = "running";

});