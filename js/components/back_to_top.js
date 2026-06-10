fetch('../components/back_to_top.html')
.then(response => response.text())
.then(data => {
  document.getElementById('go_to_top').innerHTML = data;
});

/* =========================
   SHOW BUTTON ON SCROLL
========================= */

window.onscroll = function () {

    const btn =
    document.getElementById("goTopBtn");

    if (
        document.body.scrollTop > 300 ||

        document.documentElement.scrollTop > 300
    ) {

        btn.style.display = "block";

    }

    else {

        btn.style.display = "none";

    }

};

/* =========================
   SCROLL TO TOP
========================= */

function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}