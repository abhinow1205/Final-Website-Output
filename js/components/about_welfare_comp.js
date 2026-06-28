fetch("components/about_welfare_comp.html")
.then(res => res.text())
.then(data => {

    document.getElementById("about-welfare-association").innerHTML = data;

})
.catch(err => console.error(err));