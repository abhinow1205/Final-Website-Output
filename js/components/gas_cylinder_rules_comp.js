fetch("components/gas_cylinder_rules_comp.html")
.then(res => res.text())
.then(data => {

    document.getElementById("gas-cylinder-rules-comp").innerHTML = data;

})
.catch(err => console.error(err));