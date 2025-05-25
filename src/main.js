import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

// ----------------------------------------------
import { fetchData } from './js/pixabay-api';
import {
  renderGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
// ----------------------------------------------
// const loader = document.querySelector('.loader');
const form = document.querySelector('.form');
const input = document.querySelector("input[name='search-text']");
// const gallery = document.querySelector('.gallery');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const query = input.value.trim();
  if (query === '') {
    iziToast.show({
      message: `No data`,
      messageColor: '#fff',
      messageSize: '16px',
      messageLineHeight: '1.5',
      backgroundColor: '#ffa000',
      progressBar: false,
      position: 'topRight',
    });
    form.reset();
    return;
  }

  clearGallery();
  showLoader();

  fetchData(query)
    .then(images => {
      renderGallery(images);
    })
    .catch(() => {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        color: '#ef4040',
        messageColor: '#fff',
        maxWidth: '360px',
        messageSize: '16',
        messageLineHeight: '140%',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
}
