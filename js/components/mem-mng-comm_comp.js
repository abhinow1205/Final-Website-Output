fetch('components/mem-mng-comm_comp.html')
.then(res => res.text())
.then(data => {
  document.getElementById('mem-mang-comm-comp').innerHTML = data;
});