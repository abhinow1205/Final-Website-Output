fetch("components/copyright_comp.html")
.then(res => res.text())
.then(data => {

    document.getElementById("copyright-comp").innerHTML = data;

});