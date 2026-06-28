fetch('components/contact_us_comp.html')
.then(res => res.text())
.then(data => {
  document.getElementById('contact-us-comp').innerHTML = data;
});