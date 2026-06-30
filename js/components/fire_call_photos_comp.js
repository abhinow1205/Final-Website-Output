fetch("components/fire_call_photos_comp.html")
.then(res => res.text())
.then(data => {

    document.getElementById("fire-call-photos-section").innerHTML = data;

})