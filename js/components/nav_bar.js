document.addEventListener("DOMContentLoaded", () => {

    fetch("../../components/nav_bar.html")
        .then(response => response.text())
        .then(data => {

            document.getElementById("navbar").innerHTML = data;

            // Hamburger
            const menuToggle = document.getElementById("menuToggle");
            const navMenu = document.getElementById("navMenu");

            menuToggle.addEventListener("click", () => {
                navMenu.classList.toggle("show");
            });

            // Mobile Dropdowns
            const dropdownLinks = document.querySelectorAll(
                ".dropdown > a, .dropdown-sub > a"
            );

            dropdownLinks.forEach(link => {

                const submenu = link.nextElementSibling;

                // Only treat this as a dropdown "toggle" if it actually has
                // a submenu next to it. Plain leaf links (e.g. "Contact Us")
                // have no submenu, so they should navigate normally instead
                // of being blocked by preventDefault().
                const hasSubmenu =
                    submenu &&
                    (submenu.classList.contains("dropdown-menu") ||
                        submenu.classList.contains("dropdown-sub-menu"));

                link.addEventListener("click", function (e) {

                    if (window.innerWidth <= 992 && hasSubmenu) {

                        e.preventDefault();

                        submenu.classList.toggle("show");

                    }

                });

            });

            // Highlight the active nav link based on the current page
            setActiveLink();

        });

});

function setActiveLink() {

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const allLinks = document.querySelectorAll("#navMenu a[href]");

    allLinks.forEach(link => {

        const linkPage = link.getAttribute("href").split("/").pop();

        if (linkPage && linkPage === currentPage) {

            link.classList.add("active");

            // Bubble the active state up so parent dropdown triggers
            // (e.g. "Directorate ▾") also get highlighted when a page
            // inside that dropdown is the current page.
            let ancestorLi = link.closest(".dropdown, .dropdown-sub");

            while (ancestorLi) {

                const ancestorLink = ancestorLi.querySelector(":scope > a");

                if (ancestorLink) {
                    ancestorLink.classList.add("active");
                }

                ancestorLi = ancestorLi.parentElement
                    ? ancestorLi.parentElement.closest(".dropdown, .dropdown-sub")
                    : null;

            }

        }

    });

}
