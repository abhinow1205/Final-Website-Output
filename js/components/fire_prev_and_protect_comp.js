fetch('../components/fire_prev_and_protect_comp.html')
.then(response => response.text())
.then(data => {
  document.getElementById('fire-prev-and-protect-comp').innerHTML = data;
});