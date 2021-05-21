const BASE_URL = 'https://pixabay.com/api/';
const key = '21711861-4ca3c4c0e54ca90fa3aa7f59b';
const pageNumber = '1';
const searchQuery = '';
const PER_PAGE = 12;

function fetchCard(searchQuery) {
  return fetch(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=${PER_PAGE}&key=${key}`,
  ).then(response => response.json());
}

export default { fetchCard };
