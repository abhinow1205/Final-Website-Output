fetch('../components/notification_bar.html')
.then(response => response.text())
.then(data => {
  document.getElementById('notification_bar').innerHTML = data;
});

async function loadNotifications() {
  try {
    const currentLanguage =
    localStorage.getItem("language") || "en";

    const response = await fetch(
    `http://localhost:1337/api/notification-bars?locale=${currentLanguage}`
    );

    const result = await response.json();

    const track = document.getElementById("notificationTrack");

    track.innerHTML = "";

    result.data.forEach((item) => {

      const span = document.createElement("span");

      span.textContent = item.Title;

      track.appendChild(span);

    });

  } catch (error) {
    console.error("Error loading notifications:", error);
  }
}

loadNotifications();