fetch("components/privacy_policy_comp.html")
.then(res => res.text())
.then(data => {

    document.getElementById("privacy-policy-comp").innerHTML = data;

});