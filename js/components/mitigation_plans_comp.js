fetch("components/mitigation_plans_comp.html")
.then(res => res.text())
.then(data => {

document.getElementById("mitigation-plans-comp").innerHTML = data;

const documents=[

{
title:"Govt. Notification for Mitigation",
section:"scheme",
date:"2020-11-30",
size:"60 KB",
language:"English",
file:"../../assets/docs/mitigation-plans/Govt. Notification for Mitigation.pdf"
},

{
title:"Fire Hazard Mitigation Plan - Model Plan Navi Mumbai",
section:"scheme",
date:"2020-11-30",
size:"3 MB",
language:"English",
file:"../../assets/docs/mitigation-plans/Fire Hazard Mitigation Plan - Model Plan Navi Mumbai.pdf"
},

{
title:"Fire Hazards Mitigation Plan Check List 2022",
section:"scheme",
date:"2022-04-14",
size:"265 KB",
language:"English",
file:"../../assets/docs/mitigation-plans/Fire Hazards Mitigation Plan Check List 2022.pdf"
},

{
title:"Kalyan",
section:"dpr",
date:"2020-11-30",
size:"13 MB",
language:"Marathi",
file:"../../assets/docs/mitigation-plans/Kalyan.pdf"
},

{
title:"Mumbai",
section:"dpr",
date:"2020-11-30",
size:"2 MB",
language:"English",
file:"../../assets/docs/mitigation-plans/Mumbai.pdf"
},

{
title:"Nagpur",
section:"dpr",
date:"2020-11-30",
size:"2 MB",
language:"Marathi",
file:"../../assets/docs/mitigation-plans/Nagpur.pdf"
},

{
title:"Nashik",
section:"dpr",
date:"2020-11-30",
size:"1 MB",
language:"English",
file:"../../assets/docs/mitigation-plans/Nashik.pdf"
},

{
title:"Pimpri-Chinchwad",
section:"dpr",
date:"2020-11-30",
size:"21 MB",
language:"English",
file:"../../assets/docs/mitigation-plans/Pimpri-Chinchwad.pdf"
},

{
title:"Pune",
section:"dpr",
date:"2020-11-30",
size:"947 KB",
language:"English",
file:"../../assets/docs/mitigation-plans/Pune.pdf"
},

{
title:"Thane",
section:"dpr",
date:"2020-11-30",
size:"3 MB",
language:"English",
file:"../../assets/docs/mitigation-plans/Thane.pdf"
}

];

const schemeContainer=document.getElementById("schemeDocuments");

const dprContainer=document.getElementById("dprDocuments");

const search=document.getElementById("searchDocuments");

const sort=document.getElementById("sortDocuments");

function card(doc){

return `

<div class="document-card">

<div class="document-left">

<div class="document-icon">

📄

</div>

<div>

<div class="document-title">

${doc.title}

</div>

<div class="document-meta">

<span>📅 ${new Date(doc.date).toLocaleDateString()}</span>

<span>${doc.language}</span>

<span>${doc.size}</span>

<span>PDF</span>

</div>

</div>

</div>

<a href="${doc.file}" target="_blank">

<button class="download-btn">

Download

</button>

</a>

</div>

`;

}

function render(){

let data=[...documents];

const text=search.value.toLowerCase();

data=data.filter(d=>d.title.toLowerCase().includes(text));

data.sort((a,b)=>{

return sort.value==="latest"

?new Date(b.date)-new Date(a.date)

:new Date(a.date)-new Date(b.date);

});

schemeContainer.innerHTML="";

dprContainer.innerHTML="";

data.forEach(doc=>{

if(doc.section==="scheme"){

schemeContainer.innerHTML+=card(doc);

}

else{

dprContainer.innerHTML+=card(doc);

}

});

}

search.addEventListener("input",render);

sort.addEventListener("change",render);

render();

});