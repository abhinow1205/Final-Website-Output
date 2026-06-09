// Carousal Banner: Home Page Hero Slider

fetch('../components/hero_slider.html')
.then(response => response.text())
.then(data => {
  document.getElementById('hero_slider').innerHTML = data;
});

