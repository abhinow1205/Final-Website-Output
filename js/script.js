document.addEventListener("click", function (e) {

    if (e.target.id === "approval_Link") {

        e.preventDefault();

        const proceed = confirm(
`This link shall take you to a page outside the Maharashtra Fire & Emergency Services website.

For any query regarding the contents of the linked page, please contact the webmaster of the concerned website!`
        );

        if (proceed) {

            window.open(
                "https://mahafireservice.com/Login",
                "_blank"
            );

        }

    }

});

document.addEventListener("click", function (e) {

    if (e.target.id === "feedbackLink") {

        e.preventDefault();

        const proceed = confirm(
`This link shall take you to a page outside the Maharashtra Fire & Emergency Services website.

For any query regarding the contents of the linked page, please contact the webmaster of the concerned website!`
        );

        if (proceed) {

            window.open(
                "https://grievances.maharashtra.gov.in/mr",
                "_blank"
            );

        }

    }

});

// Carousal Banner: Home Page Hero Slider

fetch('../components/hero_slider.html')
.then(response => response.text())
.then(data => {
  document.getElementById('hero_slider').innerHTML = data;
});

