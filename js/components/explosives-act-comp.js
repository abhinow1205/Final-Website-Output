fetch("components/explosives-act-comp.html")
.then(res => res.text())
.then(data => {

    document.getElementById("explosives-act-comp").innerHTML = data;

})
.catch(err => console.error(err));