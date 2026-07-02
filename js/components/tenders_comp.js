fetch("components/tenders_comp.html")
.then(res => res.text())
.then(data => {

    document.getElementById("tenders-comp").innerHTML = data;

})
.catch(err => console.error(err));