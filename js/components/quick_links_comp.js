fetch("components/quick_links_comp.html")
.then(res => res.text())
.then(data => {

    document.getElementById("quick-links-comp").innerHTML = data;

});