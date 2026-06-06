/* =========================
   TRANSLATIONS
========================= */

const translations = {

    en: {

        skipNavigation:
        "Skip to Navigation",

        skipContent:
        "Skip to Content",

        government:
        "Government of Maharashtra",

        department:
        "Maharashtra Fire & Emergency Services",

        notifications:
        "Notifications"

    },

    hi: {

        skipNavigation:
        "नेविगेशन पर जाएँ",

        skipContent:
        "सामग्री पर जाएँ",

        government:
        "महाराष्ट्र सरकार",

        department:
        "महाराष्ट्र अग्निशमन एवं आपातकालीन सेवाएँ",

        notifications:
        "अधिसूचनाएँ"

    },

    mr: {

        skipNavigation:
        "नेव्हिगेशनकडे जा",

        skipContent:
        "माहितीकडे जा",

        government:
        "महाराष्ट्र शासन",

        department:
        "महाराष्ट्र अग्निशमन व आपत्कालीन सेवा",    

        notifications:
        "अधिसूचना"

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

    const governmentText = document.querySelector('[data-key="government"]');
    const departmentText = document.querySelector('[data-key="department"]');

    if(governmentText) {

        governmentText.textContent =
        translations[lang]
        .government;

    }

    if(departmentText) {

        departmentText.textContent =
        translations[lang]
        .department;

    }

    const notificationsText = document.querySelector('[data-key="notifications"]');

    if(notificationsText) {

        notificationsText.textContent =
        translations[lang]
        .notifications;

    }

}