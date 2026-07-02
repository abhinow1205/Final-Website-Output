fetch("components/earthquake_comp.html")
.then(res => res.text())
.then(data => {

    document.getElementById("earthquake-comp").innerHTML = data;

});