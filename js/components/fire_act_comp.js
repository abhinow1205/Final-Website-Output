fetch("components/fire_act_comp.html")
.then(res => res.text())
.then(data => {

document.getElementById("fire-acts-comp").innerHTML = data;

const documents=[

{
title:"Maharashtra Agni Suraksha Abhiyan 2009",
section:"scheme",
date:"2020-11-30",
size:"397 KB",
language:"Marathi",
file:"pdfs/sample1.pdf"
},

{
title:"13th Finance Commission Distribution of Funds",
section:"dpr",
date:"2020-11-30",
size:"603 KB",
language:"English",
file:"pdfs/sample2.pdf"
},

{
title:"DPR Maharashtra Agni Suraksha Abhiyan",
section:"dpr",
date:"2020-11-30",
size:"52 KB",
language:"English",
file:"pdfs/sample3.pdf"
},

{
title:"Funds For Phase I",
section:"dpr",
date:"2022-02-15",
size:"356 KB",
language:"English",
file:"pdfs/sample4.pdf"
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