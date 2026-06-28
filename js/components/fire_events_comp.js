fetch('components/fire_events_comp.html')
.then(res => res.text())
.then(data => {
  document.getElementById('fire-events').innerHTML = data;
});