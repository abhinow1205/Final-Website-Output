fetch('components/gen_guidelines_comp.html')
.then(res => res.text())
.then(data => {
  document.getElementById('general-guidelines-comp').innerHTML = data;
});