fetch('components/medical_form_comp.html')
.then(res => res.text())
.then(data => {
  document.getElementById('medical-form').innerHTML = data;
});