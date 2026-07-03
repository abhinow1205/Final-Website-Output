fetch('../components/accessibility_bar.html')
.then(response => response.text())
.then(data => {

    document.getElementById(
        'accessibility_bar'
    ).innerHTML = data;

    // Initialize language selector AFTER component loads
    initializeLanguageSelector();

});

/* =========================
   FONT INCREASE
========================= */

function increaseFont() {

    let currentSize = parseFloat(
        getComputedStyle(
            document.documentElement
        ).fontSize
    );

    document.documentElement.style.fontSize =
        (currentSize + 1) + "px";

}

/* =========================
   FONT DECREASE
========================= */

function decreaseFont() {

    let currentSize = parseFloat(
        getComputedStyle(
            document.documentElement
        ).fontSize
    );

    document.documentElement.style.fontSize =
        (currentSize - 1) + "px";

}

/* =========================
   THEME TOGGLE
========================= */

function toggleTheme() {

    document.body.classList.toggle(
        "dark-theme"
    );

    const themeBtn =
    document.getElementById(
        "theme-btn"
    );

    if (
        document.body.classList.contains(
            "dark-theme"
        )
    ) {

        themeBtn.innerHTML = "☀️";

    }

    else {

        themeBtn.innerHTML = "🌙";

    }

}

/* =========================
   INITIALIZE LANGUAGE
========================= */

function initializeLanguageSelector() {

    const languageSelector =
        document.getElementById("languageSelector");

    if (!languageSelector) return;

    // Default language
    const savedLanguage =
        localStorage.getItem("selectedLanguage") || "en";

    // Update dropdown
    languageSelector.value = savedLanguage;

    // Translate page
    changeLanguage(savedLanguage);

    // Listen for changes
    languageSelector.addEventListener("change", function () {

        changeLanguage(this.value);

    });

}