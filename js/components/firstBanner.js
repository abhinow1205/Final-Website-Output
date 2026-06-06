fetch('../components/firstBanner.html')
.then(response => response.text())
.then(data => {
  document.getElementById('firstBanner').innerHTML = data;
});