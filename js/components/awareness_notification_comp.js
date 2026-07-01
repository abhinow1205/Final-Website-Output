/* ==========================================
   LOAD INFORMATION HUB COMPONENT
========================================== */

fetch("components/awareness_notification_comp.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("awareness-notification-comp").innerHTML = data;

    initializeInformationHub();
  });

/* ==========================================
   INITIALIZE INFORMATION HUB
========================================== */

function initializeInformationHub() {

  const notifications = [

    {
      title: "Fire Week Circular 2025",
      date: "2025-04-10",
      file: "../assets/docs/sample1.pdf"
    },

    {
      title: "Recruitment Notice",
      date: "2025-02-12",
      file: "../assets/docs/sample2.pdf"
    },

    {
      title: "Government Resolution",
      date: "2024-12-08",
      file: "../assets/docs/sample3.pdf"
    },

    {
      title: "Awareness Campaign",
      date: "2024-10-15",
      file: "../assets/docs/sample4.pdf"
    },

    {
      title: "Training Schedule",
      date: "2024-08-01",
      file: "../assets/docs/sample5.pdf"
    }

  ];

  const list = document.getElementById("notificationList");
  const search = document.getElementById("notificationSearch");
  const sort = document.getElementById("notificationSort");

  function renderNotifications() {

    let data = [...notifications];

    const text = search.value.toLowerCase();

    data = data.filter(item =>
      item.title.toLowerCase().includes(text)
    );

    data.sort((a, b) => {

      if (sort.value === "latest") {

        return new Date(b.date) - new Date(a.date);

      } else {

        return new Date(a.date) - new Date(b.date);

      }

    });

    list.innerHTML = "";

    data.forEach(item => {

      list.innerHTML += `

        <div class="notificationItem">

          <div>

            <div class="notificationTitle">
              ${item.title}
            </div>

            <div class="notificationDate">
              ${new Date(item.date).toLocaleDateString()}
            </div>

          </div>

          <a
            href="${item.file}"
            target="_blank"
            class="downloadNotification"
          >
            Download
          </a>

        </div>

      `;

    });

  }

  search.addEventListener("input", renderNotifications);

  sort.addEventListener("change", renderNotifications);

  renderNotifications();

}