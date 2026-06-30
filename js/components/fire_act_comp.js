fetch("components/fire_act_comp.html")
.then(res => res.text())
.then(data => {

document.getElementById("fire-acts-comp").innerHTML = data;


/*=========================================
DOCUMENT DATA
=========================================*/

const documents=[

{

title:"English",

section:"scheme",

date:"2020-11-30",

size:"1.5 MB",

language:"English",

file:"../../assets/docs/fire-acts/Table 1/English.pdf"

},

{

title:"Maharashtra Fire Prevention & Life Safety Measures Act, 2006",

section:"scheme",

date:"2026-03-23",

size:"881 KB",

language:"English",

file:"../../assets/docs/fire-acts/Table 1/Maharashtra Fire Prevention and Life Safety Measures Act, 2006.pdf"

},

{

title:"Marathi",

section:"scheme",

date:"2020-11-30",

size:"689 KB",

language:"Marathi",

file:"../../assets/docs/fire-acts/Table 1/Marathi.pdf"

},

{

title:"English",

section:"dpr",

date:"2020-11-30",

size:"1.3 MB",

language:"English",

file:"../../assets/docs/fire-acts/Table 2/English.pdf"

},

{

title:"Marathi",

section:"dpr",

date:"2020-11-30",

size:"1.2 MB",

language:"Marathi",

file:"../../assets/docs/fire-acts/Table 2/Marathi.pdf"

},

{

title:"English",

section:"rules",

date:"2023-05-31",

size:"3.1 MB",

language:"English",

file:"../../assets/docs/fire-acts/Table 3/English.pdf"

},

{

title:"Marathi",

section:"rules",

date:"2023-05-31",

size:"288 KB",

language:"Marathi",

file:"../../assets/docs/fire-acts/Table 3/Marathi.pdf"

},

{

title:"Act to Rules (Amended)",

section:"nbc",

date:"2025-06-22",

size:"576 KB",

language:"English",

file:"../../assets/docs/fire-acts/Table 4/Act to Rules (Amended) English.pdf"

},

{

title:"Act to Rules (Amended)",

section:"nbc",

date:"2025-06-22",

size:"576 KB",

language:"Marathi",

file:"../../assets/docs/fire-acts/Table 4/Act to Rules (Amended) Marathi.pdf"

}

];


/*=========================================
GET ELEMENTS
=========================================*/

const schemeContainer=document.getElementById("schemeDocuments");

const dprContainer=document.getElementById("dprDocuments");

const rulesContainer=document.getElementById("rulesDocuments");

const nbcContainer=document.getElementById("nbcDocuments");

const search=document.getElementById("searchDocuments");

const sort=document.getElementById("sortDocuments");


/*=========================================
CARD
=========================================*/

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

<a
href="${doc.file}"
target="_blank">

<button class="download-btn">

Download

</button>

</a>

</div>

`;

}


/*=========================================
RENDER
=========================================*/

function render(){

let data=[...documents];

const text=search.value.toLowerCase();

data=data.filter(doc=>

doc.title.toLowerCase().includes(text)

);

data.sort((a,b)=>{

return sort.value==="latest"

?new Date(b.date)-new Date(a.date)

:new Date(a.date)-new Date(b.date);

});


schemeContainer.innerHTML="";

dprContainer.innerHTML="";

rulesContainer.innerHTML="";

nbcContainer.innerHTML="";


data.forEach(doc=>{

switch(doc.section){

case "scheme":

schemeContainer.innerHTML+=card(doc);

break;

case "dpr":

dprContainer.innerHTML+=card(doc);

break;

case "rules":

rulesContainer.innerHTML+=card(doc);

break;

case "nbc":

nbcContainer.innerHTML+=card(doc);

break;

}

});

}


/*=========================================
EVENTS
=========================================*/

search.addEventListener(

"input",

render

);

sort.addEventListener(

"change",

render

);


/*=========================================
INITIAL LOAD
=========================================*/

render();

});