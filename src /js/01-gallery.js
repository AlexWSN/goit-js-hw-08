// Importing the SimpleLightbox library and CSS
import SimpleLightbox from "simplelightbox"; // Import the library
import "simplelightbox/dist/simple-lightbox.min.css"; // Import the CSS styles
import { galleryItems } from "./gallery-items.js"; // Import gallery items

console.log(galleryItems); // Log gallery items to the console

// Select the gallery container
const galleryContainer = document.querySelector(".gallery");

// Function to create gallery items markup
function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>
      `;
    })
    .join("");
}

// Create gallery markup and insert it into the gallery container
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.innerHTML = galleryMarkup;

// Initialize SimpleLightbox
const lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});

