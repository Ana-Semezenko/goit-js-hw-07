import { galleryItems } from './gallery-items.js';

// Change code below this line
const imagesGallery = document.querySelector(".gallery");
const createImageMurlUpList = createImageMurlUp(galleryItems)

function createImageMurlUp(gallery) {
    return gallery.map(({ original, preview, description }) => {
        return `
    <div class = "gallery__item">
    <a class = "gallery__link" href = "${original}">
    <img
    class = "gallery__image"
    src="${preview}" 
    data-source = "${original}"
    alt="${description}"/> 
    </a>
    </div>`;
    }).join('');
}

imagesGallery.insertAdjacentHTML("beforeend" ,createImageMurlUpList);

imagesGallery.addEventListener("click", (e) => {
    e.preventDefault();

    if (!e.target.classList.contains("gallery__image")) {
        return;
    } 

    const modalImage = e.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${modalImage}" width="800" height="600">
`)
    
    instance.show()
});