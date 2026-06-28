fetch('components/welfare_schemes_comp.html')
.then(res => res.text())
.then(data => {
  document.getElementById('welfare-schemes').innerHTML = data;
});