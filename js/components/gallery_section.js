fetch('../components/gallery_section.html')
.then(res => res.text())
.then(data => {
  document.getElementById('gallery_sec').innerHTML = data;
});

const track =
document.querySelector(".gallery-track");

const items =
document.querySelectorAll(".gallery-item");

let currentIndex = 0;

document
.getElementById("galleryNext")
.addEventListener("click",()=>{

    const visible =
    window.innerWidth < 768
    ? 1
    : window.innerWidth < 992
    ? 3
    : 4;

    if(
        currentIndex <
        items.length - visible
    ){

        currentIndex++;

    }

    updateGallery();

});

document
.getElementById("galleryPrev")
.addEventListener("click",()=>{

    if(currentIndex > 0){

        currentIndex--;

    }

    updateGallery();

});

function updateGallery(){

    const itemWidth =
    items[0].offsetWidth + 20;

    track.style.transform =
    `translateX(-${currentIndex * itemWidth}px)`;

}

/* MODAL */

const modal =
document.querySelector(".gallery-modal");

const modalContent =
document.querySelector(".modal-content");

document
.querySelectorAll(".gallery-item")
.forEach(item=>{

    item.addEventListener("click",()=>{

        modalContent.innerHTML="";

        if(item.classList.contains("video")){

            const video =
            item.querySelector("video")
            .cloneNode(true);

            video.controls=true;

            video.autoplay=true;

            modalContent.appendChild(video);

        }
        else{

            const img =
            item.querySelector("img")
            .cloneNode(true);

            modalContent.appendChild(img);

        }

        modal.classList.add("active");

    });

});

document
.querySelector(".close-modal")
.addEventListener("click",()=>{

    modal.classList.remove("active");

    modalContent.innerHTML="";

});

