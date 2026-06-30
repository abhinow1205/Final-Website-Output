fetch("components/national_disaster_mgmt_act_comp.html")
.then(res => res.text())
.then(data => {

    document.getElementById("national-disaster-management-act-comp").innerHTML = data;

})
.catch(err => console.error(err));