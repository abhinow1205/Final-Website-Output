fetch('components/membership_form_comp.html')
.then(res => res.text())
.then(data => {
  document.getElementById('membership-form-comp').innerHTML = data;
});