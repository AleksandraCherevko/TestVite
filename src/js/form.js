const form = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };

localStorage.setItem('formData', JSON.stringify(formData));
const parseFormData = JSON.parse()