import { galleryItems } from './gallery-items.js';
// Change code below this line
const imagesGallery = document.querySelector(".gallery");
const createImageMurlUpList = createImageMurlUp(galleryItems)

function createImageMurlUp(gallery) {
    return gallery.map(({ original, preview, description }) => {
        return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
    }).join('');
}

imagesGallery.insertAdjacentHTML("beforeend", createImageMurlUpList);
    
imagesGallery.addEventListener("click", (e) => {
    e.preventDefault();

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});

})