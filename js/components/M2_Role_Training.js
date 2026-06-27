fetch('components/M2_Role_Training.html')
.then(res => res.text())
.then(data => {
  document.getElementById('about_role_training').innerHTML = data;
});