document.addEventListener(
"DOMContentLoaded",
() => {


    const menuToggle =
    document.getElementById("menuToggle");

    const navMenu =
    document.getElementById("navMenu");

    menuToggle.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle(
                "show"
            );

        }
    );

}


);

fetch('../components/nav_bar.html')
.then(response => response.text())
.then(data => {
  document.getElementById('navbar').innerHTML = data;
});