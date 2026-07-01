// welfare_events_comp.js
fetch('components/welfare_events_comp.html')
.then(r=>r.text())
.then(html=>{
 document.getElementById('welfare-events-comp').innerHTML=html;
 initFireEngines();
});

function initFireEngines(){
 document.querySelectorAll('.accordionBtn').forEach(btn=>{
  btn.onclick=()=>btn.parentElement.classList.toggle('active');
 });
 const modal=document.querySelector('.galleryModal');
 const img=document.querySelector('.modalImage');
 const counter=document.querySelector('.imageCounter');
 const prev=document.querySelector('.prevImage');
 const next=document.querySelector('.nextImage');
 const close=document.querySelector('.closeModal');
 let imgs=[],i=0;
 function show(){img.src=imgs[i].src;counter.textContent=`${i+1} / ${imgs.length}`;}
 document.querySelectorAll('.imageGrid').forEach(grid=>{
   const arr=[...grid.querySelectorAll('img')];
   arr.forEach((im,idx)=>im.onclick=()=>{imgs=arr;i=idx;show();modal.classList.add('active');});
 });
 prev.onclick=()=>{i=(i-1+imgs.length)%imgs.length;show();}
 next.onclick=()=>{i=(i+1)%imgs.length;show();}
 close.onclick=()=>modal.classList.remove('active');
 modal.onclick=e=>{if(e.target===modal)modal.classList.remove('active');}
}
