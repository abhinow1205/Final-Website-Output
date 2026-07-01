fetch("components/notification_bar.html")
.then(res => res.text())
.then(data => {

    document.getElementById("notification_bar").innerHTML = data;

    const track = document.getElementById("notificationTrack");

    // Duplicate the notifications so scrolling never ends
    track.innerHTML += track.innerHTML;

});