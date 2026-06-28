fetch('components/membership_list_comp.html')
.then(res => res.text())
.then(data => {
  document.getElementById('membership-list-comp').innerHTML = data;
});