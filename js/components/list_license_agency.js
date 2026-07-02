fetch("components/list_license_agency.html")
.then(res => res.text())
.then(data => {

document.getElementById("list-license-agencies").innerHTML = data;

const documents=[

{
title:"Application for Fire License Agency-Form-M & Checklist 18.07.2025",
section:"scheme",
date:"2025-07-22",
size:"161 KB",
language:"English",
file:"../../assets/docs/list-license-agencies/Application for Fire License Agency-Form-M & Checklist 18.07.2025.doc"
},

{
title:"List of Approved Licensed Agencies Valid Up to 30.01.2028",
section:"scheme",
date:"2026-03-31",
size:"753 KB",
language:"English",
file:"../../assets/docs/list-license-agencies/List of Approved Licensed Agencies Valid Up to 30.01.2028.pdf"
},

{
title:"	List of License Suspended or Blacklisted",
section:"scheme",
date:"2021-11-20",
size:"59 KB",
language:"English",
file:"../../assets/docs/list-license-agencies/List of License Suspended or Blacklisted.pdf"
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