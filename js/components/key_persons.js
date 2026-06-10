fetch('components/key_person.html')
.then(res => res.text())
.then(data => {
  document.getElementById('key_persons').innerHTML = data;
});

const kpRow = document.querySelector('.kp-row');

function scrollKP(direction) {
  kpRow.scrollBy({
    left: direction * 250,
    behavior: 'smooth'
  });
}

async function loadKeyPersons() {

    try {

        const currentLanguage =
            localStorage.getItem("language") || "en";

        const response = await fetch(
            `http://localhost:1337/api/key-people?populate=*&locale=${currentLanguage}`
        );

        const result = await response.json();

        const container =
            document.getElementById("keyPersonsContainer");

        container.innerHTML = "";

        const persons = result.data
            .filter(person => person.Active)
            .sort(
                (a, b) =>
                a.Display_Order -
                b.Display_Order
            );

        persons.forEach(person => {

            const imageUrl =
                "http://localhost:1337" +
                person.Photo.url;

            const card =
                document.createElement("div");

            card.classList.add("kp-card");

            card.innerHTML = `
                <div class="kp-img">
                    <img
                        src="${imageUrl}"
                        alt="${person.Name}">
                </div>

                <h3 class="kp-name">
                    ${person.Name}
                </h3>

                <p class="kp-designation">
                    ${person.Designation}
                </p>

                <p class="kp-dept">
                    ${person.Department}
                </p>
            `;

            container.appendChild(card);

        });

    }
    catch(error) {

        console.error(
            "Error loading key persons:",
            error
        );

    }

}

loadKeyPersons();

if(typeof loadKeyPersons === "function") {

    loadKeyPersons();

}