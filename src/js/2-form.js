let formData = {
  email: '',
  message: '',
};

const localStorageKey = 'feedback-form-state';

const form = document.querySelector(`.feedback-form`);

getDataFromLs();

form.addEventListener(`input`, event => {
  const name = event.target.name;
  const value = event.target.value.trim();
  formData[name] = value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

function getDataFromLs() {
  const savedLSData = localStorage.getItem(localStorageKey);

  if (!savedLSData) return;
  try {
    const formDataLS = JSON.parse(savedLSData);
    form.elements.email.value = formDataLS.email || '';
    form.elements.message.value = formDataLS.message || '';
    formData = formDataLS;
  } catch (error) {
    alert(`wrong`);
  }
}

form.addEventListener(`submit`, event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  form.reset();
  formData = {
    email: '',
    message: '',
  };
});
