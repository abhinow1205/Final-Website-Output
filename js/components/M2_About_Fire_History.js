fetch('components/M2_About_Fire_History.html')
.then(res => res.text())
.then(data => {
  document.getElementById('about_fire_history').innerHTML = data;
});