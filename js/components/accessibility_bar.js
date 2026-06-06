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
   TRANSLATIONS
========================= */

const translations = {

    en: {

        skipNavigation:
        "Skip to Navigation",

        skipContent:
        "Skip to Content"

    },

    hi: {

        skipNavigation:
        "नेविगेशन पर जाएँ",

        skipContent:
        "सामग्री पर जाएँ"

    },

    mr: {

        skipNavigation:
        "नेव्हिगेशनकडे जा",

        skipContent:
        "माहितीकडे जा"

    }

};

/* =========================
   CHANGE LANGUAGE
========================= */

function changeLanguage(lang) {

    const navText =
    document.querySelector(
        '[data-key="skipNavigation"]'
    );

    const contentText =
    document.querySelector(
        '[data-key="skipContent"]'
    );

    if(navText) {

        navText.textContent =
        translations[lang]
        .skipNavigation;

    }

    if(contentText) {

        contentText.textContent =
        translations[lang]
        .skipContent;

    }

}

/* =========================
   INITIALIZE LANGUAGE
========================= */

function initializeLanguageSelector() {

    const languageSelector =
    document.getElementById(
        "languageSelector"
    );

    if (!languageSelector) return;

    const savedLanguage =
    localStorage.getItem(
        "selectedLanguage"
    ) || "en";

    languageSelector.value =
    savedLanguage;

    changeLanguage(
        savedLanguage
    );

    languageSelector.addEventListener(
        "change",
        function() {

            const selectedLanguage =
            this.value;

            localStorage.setItem(
                "selectedLanguage",
                selectedLanguage
            );

            changeLanguage(
                selectedLanguage
            );

        }
    );

}