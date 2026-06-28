fetch("components/provisional_approval_comp.html")
.then(res => res.text())
.then(data => {

    document.getElementById("provisional-approval").innerHTML = data;

})
.catch(err => console.log(err));