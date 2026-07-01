fetch("components/disclaimer_comp.html")
.then(res => res.text())
.then(data => {

    document.getElementById("disclaimer-comp").innerHTML = data;

});