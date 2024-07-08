const form = document.querySelector(`form.feedback-form`);
form.addEventListener('submit', submitDone);

const email = document.querySelector(`form.feedback-form > label > input`);
const message = document.querySelector(`form.feedback-form > label > textarea`);
const localStorageKey = 'feedback-form-state';

// const email = form.elements.email;
// const message = form.elements.message;

// form.addEventListener('input', evt => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

function submitDone(event) {
  event.preventDefault();
  if (
    event.target.elements.email.value.trim() === '' ||
    event.target.elements.message.value === ''
  ) {
    alert('All form fields must be filled in');
  } else if (
    event.target.elements.email.value.trim() !== '' ||
    event.target.elements.message.value !== ''
  ) {
    console.log('Submit done!');
    console.log({
      email: event.target.elements.email.value,
      message: event.target.elements.message.value,
    });
    localStorage.setItem(localStorageKey, [
      event.target.elements.email.value,
      event.target.elements.message.value,
    ]);
  }
  form.reset();
}

const saveFormData =
  JSON.parse(localStorage.getItem('feedback-form-state').trim()) ?? {};
console.log(saveFormData);

email.value = saveFormData.email ?? {};
message.value = saveFormData.message ?? {};

// const formFill = {
//   'feedback-form-state': [formInput, formText],
// };

// localStorage.setItem('feedback-form-state', JSON.stringify(formInput).trim());
// localStorage.setItem('feedback-form-state', JSON.stringify(formFill).trim());
// localStorage.setItem('feedback-form-state', JSON.stringify(formFill));
