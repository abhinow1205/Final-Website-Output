fetch("components/govt_resolution_comp.html")
.then(res => res.text())
.then(data => {

document.getElementById("govt-resolution-comp").innerHTML = data;

const documents=[

{
title:"Abhiyaan - Revised Funds for Fire Engine and Fire Station 12.03.2021",
section:"scheme",
date:"2021-03-17",
size:"147 KB",
language:"Marathi",
file:"../../assets/docs/govt-resolutions/Abhiyaan - Revised Funds for Fire Engine and Fire Station 12.03.2021.pdf"
},

{
title:"GR – 131 Post Approved by UDD for MFS dated 26.03.2021",
section:"scheme",
date:"2021-04-01",
size:"722 KB",
language:"Marathi",
file:"../../assets/docs/govt-resolutions/GR – 131 Post Approved by UDD for MFS dated 26.03.2021.pdf"
},

{
title:"GR-UDD-13th Finance Commission - guideline-25.10.2010",
section:"scheme",
date:"2020-11-30",
size:"604 KB",
language:"Marathi",
file:"../../assets/docs/govt-resolutions/GR-UDD-13th Finance Commission - guideline-25.10.2010.pdf"
},

{
title:"GR-UDD-14th Finance Commission - guideline-03.08.2015",
section:"scheme",
date:"2020-11-30",
size:"413 KB",
language:"Marathi",
file:"../../assets/docs/govt-resolutions/GR-UDD-14th Finance Commission - guideline-03.08.2015.pdf"
},

{
title:"GR-UDD-Classification of Municipal Corporations-01.09.2014",
section:"scheme",
date:"2020-11-30",
size:"331 KB",
language:"Marathi",
file:"../../assets/docs/govt-resolutions/GR-UDD-Classification of Municipal Corporations-01.09.2014.pdf"
},

{
title:"GR-UDD-Committee for recommending for Fire Service Medals-06.12.2016",
section:"scheme",
date:"2020-11-30",
size:"192 KB",
language:"Marathi",
file:"../../assets/docs/govt-resolutions/GR-UDD-Committee for recommending for Fire Service Medals-06.12.2016.pdf"
},

{
title:"GR-UDD-Declaration Fire Service as a 'Fire and Emergency Services'-August,2006",
section:"scheme",
date:"2020-11-30",
size:"54 KB",
language:"Marathi",
file:"../../assets/docs/govt-resolutions/GR-UDD-Declaration Fire Service as a 'Fire and Emergency Services'-August,2006.pdf"
},

{
title:"GR-UDD-Exemption in establishment cost for recruitment of Fire Staff-09.09.2014",
section:"scheme",
date:"2020-11-30",
size:"238 KB",
language:"Marathi",
file:"../../assets/docs/govt-resolutions/GR-UDD-Exemption in establishment cost for recruitment of Fire Staff-09.09.2014.pdf"
},

{
title:"GR-UDD-Fireman-10th Pass & SFTC Course compulsory-24.06.2004",
section:"scheme",
date:"2020-11-30",
size:"971 KB",
language:"Marathi",
file:"../../assets/docs/govt-resolutions/GR-UDD-Fireman-10th Pass & SFTC Course compulsory-24.06.2004.pdf"
},

{
title:"GR-UDD-Implimentation of Agnisuraksha Abhiyan in new D Class Mun. Corporations-Councils-Nagar Panchayati-12.08.2016",
section:"scheme",
date:"2020-11-30",
size:"140 KB",
language:"Marathi",
file:"../../assets/docs/govt-resolutions/GR-UDD-Implimentation of Agnisuraksha Abhiyan in new D Class Mun. Corporations-Councils-Nagar Panchayati-12.08.2016.pdf"
},

{
title:"GR-UDD-Maharashtra Agnisuraksha Abhiyan (Dist. level)-DPDC Fund-01.01.2011",
section:"scheme",
date:"2020-11-30",
size:"118 KB",
language:"Marathi",
file:"../../assets/docs/govt-resolutions/GR-UDD-Maharashtra Agnisuraksha Abhiyan (Dist. level)-DPDC Fund-01.01.2011.pdf"
},

{
title:"	GR-UDD-Maharashtra Agnisuraksha Abhiyan-31.08.2009",
section:"scheme",
date:"2020-11-30",
size:"397 KB",
language:"Marathi",
file:"../../assets/docs/govt-resolutions/GR-UDD-Maharashtra Agnisuraksha Abhiyan-31.08.2009.pdf"
},

{
title:"GR-UDD-Maharashtra Fire Service Flag-05.04.2017",
section:"scheme",
date:"2020-11-30",
size:"3.2 MB",
language:"Marathi",
file:"../../assets/docs/govt-resolutions/GR-UDD-Maharashtra Fire Service Flag-05.04.2017.pdf"
},

{
title:"GR-UDD-Recognation to 8 Regional Fire Training Centres-01.10.2016",
section:"scheme",
date:"2020-11-30",
size:"140 KB",
language:"Marathi",
file:"../../assets/docs/govt-resolutions/GR-UDD-Recognation to 8 Regional Fire Training Centres-01.10.2016.pdf"
},

{
title:"GR-UDD-Use of Fire Protection Fund of Hospital Building beyond 30 meters-12.05.2015",
section:"scheme",
date:"2020-11-30",
size:"156 KB",
language:"Marathi",
file:"../../assets/docs/govt-resolutions/GR-UDD-Use of Fire Protection Fund of Hospital Building beyond 30 meters-12.05.2015.pdf"
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