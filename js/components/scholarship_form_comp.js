fetch('components/scholarship_form_comp.html')
.then(res => res.text())
.then(data => {
  document.getElementById('scholarship-form').innerHTML = data;
});