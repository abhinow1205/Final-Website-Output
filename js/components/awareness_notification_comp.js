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
      title: "Notification for the Fire (Amendment) Act, 2023",
      date: "2025-05-31",
      file: "../../assets/docs/notifications/Notification for the Fire (Amendment) Act, 2023.pdf"
    },

    {
      title: "Notification-UDD-Amendment in Fire Act-Increase in height of Hopital Buildings-06.04.2015",
      date: "2020-11-30",
      file: "../../assets/docs/notifications/Notification-UDD-Amendment in Fire Act-Increase in height of Hopital Buildings-06.042015.pdf"
    },

    {
      title: "Notification-UDD-Appelate Authority under Act & Rules-30.4.2011",
      date: "2020-11-30",
      file: "../../assets/docs/notifications/Notification-UDD-Appelate Authority under Act & Rules-30.4.2011.pdf"
    },

    {
      title: "Notification-UDD-Appointment of date for Fire Act-English-6.12.2008",
      date: "2020-11-30",
      file: "../../assets/docs/notifications/Notification-UDD-Appointment of date for  Fire Act-English-6.12.2008.pdf"
    },

    {
      title: "Notification-UDD-Appointment of date for Fire Act-English-Marathi-07.05.2010",
      date: "2020-11-30",
      file: "../../assets/docs/notifications/Notification-UDD-Appointment of date for  Fire Act-English-Marathi-07.05.2010.pdf"
    },

    {
      title: "Notification-UDD-Appointment of date for Fire Act (Marathi)-6.12.2008",
      date: "2020-11-30",
      file: "../../assets/docs/notifications/Notification-UDD-Appointment of date for Fire Act (Marathi)-6.12.2008.pdf"
    },

    {
      title: "Notification-UDD-DMA-RR of Muncipal Councils-30.01.2017",
      date: "2020-11-30",
      file: "../../assets/docs/notifications/Notification-UDD-DMA-RR of Muncipal Councils-30.01.2017.pdf"
    },

    {
      title: "Notification-UDD-Fire Service Fee-03.03.2014",
      date: "2020-11-30",
      file: "../../assets/docs/notifications/Notification-UDD-Fire Service Fee-03.03.2014.pdf"
    },

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