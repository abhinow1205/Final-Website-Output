fetch("components/fire_safety_comp.html")
.then(res => res.text())
.then(data => {

    document.getElementById("fire-safety-comp").innerHTML = data;

});