fetch("components/seminar_events_comp.html")
.then(res => res.text())
.then(data => {

    document.getElementById("seminar-and-events-comp").innerHTML = data;

});