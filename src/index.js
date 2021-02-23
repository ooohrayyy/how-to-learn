import './pages/index.css';

// * Логика поведения формы

const form = document.querySelector('.suggestions__form');
const thxMessage = document.querySelector('.suggestions__thanks');

function handleFormSubmit(evt) {
  evt.preventDefault();

  form.style.visibility = 'hidden';

  setTimeout(() => {
    form.style.display = 'none';
  }, 300);

  thxMessage.style.display = 'block';
}

form.addEventListener('submit', handleFormSubmit);
