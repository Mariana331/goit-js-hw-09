let formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

initForm();

function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
  const body = localStorage.getItem(key);
  try {
    const data = JSON.parse(body);
    return data;
  } catch {
    return body;
  }
}

form.addEventListener('input', e => {
  formData.email = e.currentTarget.elements.email.value.trim();
  formData.message = e.currentTarget.elements.message.value.trim();
  saveToLS(STORAGE_KEY, formData);
});

function initForm() {
  const saveData = loadFromLS(STORAGE_KEY);
  if (saveData) {
    formData = saveData;
    form.elements.email.value = saveData.email || '';
    form.elements.message.value = saveData.message || '';
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = {
    email: '',
    message: '',
  };
});
