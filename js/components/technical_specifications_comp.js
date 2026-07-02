fetch('components/technical_specifications_comp.html')
.then(res => res.text())
.then(data => {
  document.getElementById('technical-specifications-comp').innerHTML = data;
});