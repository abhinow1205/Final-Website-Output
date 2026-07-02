fetch("components/right_to_info_comp.html")
.then(res => res.text())
.then(data => {

document.getElementById("right-to-info-comp").innerHTML = data;

const documents=[

{
title:"Duties & Responsibilities-RTI Act-2015-4_1__B_- 24.01.2019",
section:"scheme",
date:"2020-11-30",
size:"132 KB",
language:"Marathi",
file:"../../assets/docs/RTI/Duties & Responsibilities-RTI Act-2015-4_1__B_-24.01.2019.pdf"
},

{
title:"	RTI Act,2015",
section:"scheme",
date:"2020-11-30",
size:"1.4 MB",
language:"Marathi",
file:"../../assets/docs/RTI/RTI Act,2015-Marathi.pdf"
},

{
title:"RTI Act-2005",
section:"scheme",
date:"2020-11-30",
size:"1.5 MB",
language:"English",
file:"../../assets/docs/RTI/RTI Act-2005-English.pdf"
},

{
title:"RTI Chart",
section:"scheme",
date:"2020-11-30",
size:"67 KB",
language:"Marathi",
file:"../../assets/docs/RTI/RTI Chart.pdf"
},

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