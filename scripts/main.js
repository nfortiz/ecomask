const config = {
    "FORM_RESPONSE_URL": "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdmZL4_DQNT61xbYPMjnZS_HUuXmxWXDzVbUB8f1dg1_M5WAw/formResponse",
    "NAME_INPUT": "entry.1932662751",
    "EMAIL_INPUT": "emailAddress"
};

const form = document.querySelector('form');

function successfullSubmit() {
    const successHtml = '<div class="form-row my-5 py-5 d-flex align-items-center form__success"><i class="fas fa-check pr-2"></i>Pronto te contactaremos.</div>';
    form.innerHTML = successHtml;
}

function submit(event) {
    event.preventDefault();

    const inputName = document.getElementById('name-input');
    const inputEmail = document.getElementById('email-input');

    const formData = new FormData();
    formData.append(config.NAME_INPUT, inputName.value);
    formData.append(config.EMAIL_INPUT, inputEmail.value);

    axios.post(config.FORM_RESPONSE_URL, formData)
    .catch(function(err) { successfullSubmit() });
}

function addForm (e) {
    form.addEventListener('submit', submit)
    form.action = config.FORM_RESPONSE_URL;
    form.method = 'POST';

    const inputName = document.getElementById('name-input');
    inputName.name = config.NAME_INPUT;
}

window.addEventListener('load', addForm);