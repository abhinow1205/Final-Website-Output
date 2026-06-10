fetch('../components/sticky_icons.html')
.then(res => res.text())
.then(data => {
  document.getElementById('sticky_icons').innerHTML = data;
});