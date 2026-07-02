fetch('components/citizen_charter_comp.html')
.then(res => res.text())
.then(data => {
  document.getElementById('citizen-charter-comp').innerHTML = data;
});