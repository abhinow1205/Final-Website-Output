fetch("components/M2_D3_IOS.html")
.then(res => res.text())
.then(data => {

document.getElementById("directorate_IOS").innerHTML = data;

const documents=[

{
title:"Maharashtra Agni Suraksha Abhiyan 2009",
section:"scheme",
date:"2020-11-30",
size:"397 KB",
language:"Marathi",
file:"../../assets/docs/ios/Maharashtra Agni Suraksha Abhiyan 2009 (Marathi).pdf"
},

{
title:"13th Finance Commission-Distribution of Funds",
section:"dpr",
date:"2020-11-30",
size:"603 KB",
language:"Marathi",
file:"../../assets/docs/ios/13th Finance Commission – Distribution of Funds.pdf"
},

{
title:"DPR Maharashtra Agni Suraksha Abhiyan",
section:"dpr",
date:"2020-11-30",
size:"52 KB",
language:"Marathi",
file:"../../assets/docs/ios/DPR Maharashtra Agni Suraksha Abhiyan.pdf"
},

{
title:"Funds For Phase I",
section:"dpr",
date:"2020-11-30",
size:"356 KB",
language:"Marathi",
file:"../../assets/docs/ios/Funds for Phase I.pdf"
},

{
title:"Survey of Fire Services Form",
section:"dpr",
date:"2020-11-30",
size:"65 KB",
language:"English",
file:"../../assets/docs/ios/Survey of Fire Services Form (English).pdf"
},

{
title:"Survey of Fire Services Form",
section:"dpr",
date:"2020-11-30",
size:"63 KB",
language:"Marathi",
file:"../../assets/docs/ios/Survey of Fire Services Form (Marathi).pdf"
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