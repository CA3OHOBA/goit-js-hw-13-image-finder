import galleryTmp from '../templates/gallery.hbs';
import api from './apiService';

const refs = {
  form: document.querySelector('.search-form'),
  galleryList: document.querySelector('.gallery'),
  btn: document.querySelector('.more'),
  input: document.querySelector('input'),
};
let pageNumber = 1;

refs.form.addEventListener('submit', onFormSubmit);
refs.btn.addEventListener('click', loadMore);

function onFormSubmit(e) {
  e.preventDefault();

  const searchQuery = e.currentTarget.elements.query.value;
  clearGallery();
  if (searchQuery !== '') {
    api.fetchCard(searchQuery, pageNumber).then(galleryMarkup);
  }
}

// function galleryMarkup(data) {
//   refs.galleryList.innerHTML = galleryTmp(data);
// }

function clearGallery() {
  refs.galleryList.innerHTML = '';
}

// function loadMore() {
//   const pageNumber = +1;
//   console.log(api.pageNumber);
// }

function loadMore() {
  const searchQuery = inputValue();
  pageNumber = +1;
  api.fetchCard(searchQuery, pageNumber).then(galleryMarkup);
}

function inputValue(e) {
  return refs.input.value;
}

function galleryMarkup(data) {
  refs.galleryList.insertAdjacentHTML('beforeend', galleryTmp(data));
  window.scrollTo({
    top: document.documentElement.scrollHeight - 100,
    behavior: 'smooth',
  });
}
