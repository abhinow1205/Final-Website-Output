fetch('components/welfare_mom_comp.html')
.then(res => res.text())
.then(data => {
  document.getElementById('welfare-mom-comp').innerHTML = data;
});