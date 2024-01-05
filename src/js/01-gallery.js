import {galleryItems} from "./gallery-items"
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryUl = document.querySelector(".gallery");

// create gallery
const galleryMaker = galleryItems
  .map(({ preview, original, description }) => {
    return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" loading="lazy" src="${preview}" alt="${description}" />
            </a>
        </li>
      `;
  })
  .join("");

galleryUl.insertAdjacentHTML("afterbegin", galleryMaker);

const interactiveGallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  fadeSpeed: 250,

  captionPosition: "bottom",
  enableKeyboard: true,
  close: true,
  closeText: "x",
});
