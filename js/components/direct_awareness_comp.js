fetch("components/direct_awareness_comp.html")

.then(res=>res.text())

.then(data=>{

document.getElementById("directorate-awareness-comp").innerHTML=data;

const documents=[

{

title:"Fire Extinguisher Awareness Presentation",

date:"30 Nov 2020",

size:"1383 KB",

format:"PPSX",

file:"pdfs/fire-awareness.ppsx"

}

];

const container=document.getElementById("awarenessDocuments");

documents.forEach(doc=>{

container.innerHTML+=`

<div class="documentCard">

<div class="documentLeft">

<div class="documentIcon">

📄

</div>

<div>

<div class="documentTitle">

${doc.title}

</div>

<div class="documentMeta">

<span>📅 ${doc.date}</span>

<span>${doc.size}</span>

<span>${doc.format}</span>

</div>

</div>

</div>

<a href="${doc.file}" target="_blank">

<button class="downloadBtn">

Download

</button>

</a>

</div>

`;

});

});