fetch("components/flood_prev_comp.html")
.then(res => res.text())
.then(data => {

    document.getElementById("flood-prev-comp").innerHTML = data;

});