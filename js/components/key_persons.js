fetch('components/key_person.html')
.then(res => res.text())
.then(data => {
  document.getElementById('key_persons').innerHTML = data;
});

const kpRow = document.querySelector('.kp-row');

function scrollKP(direction) {
  kpRow.scrollBy({
    left: direction * 250,
    behavior: 'smooth'
  });
}