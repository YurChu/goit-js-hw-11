import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// --------------------------------------------------------
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery li a', {});

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function renderGallery(images) {
  if (images.length === 0) {
    // iziToast.show({
    //   message: `Sorry, there are no images matching <br/> your search query. Please try again!`,
    //   messageColor: '#fafafa',
    //   messageSize: '16px',
    //   messageLineHeight: '20px',
    //   backgroundColor: '#ef4040',
    //   progressBar: false,
    //   position: 'topRight',
    // });
    return;
  }
  const markup = images
    .map(
      image => `<li>
          <a href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}"/>
          </a>
          <ul class="gallery-info">
            <li>
              <span class="gallery-info-subtitle">Likes</span>
              <span>${image.likes}</span>
            </li>
            <li>
              <span class="gallery-info-subtitle">Views</span>
              <span>${image.views}</span>
            </li>
            <li>
              <span class="gallery-info-subtitle">Comments</span>
              <span>${image.comments}</span>
            </li>
            <li>
              <span class="gallery-info-subtitle">Downloads</span>
              <span>${image.downloads}</span>
            </li>
          </ul>
        </li>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}
