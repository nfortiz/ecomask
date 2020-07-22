const config = {
    "FORM_RESPONSE_URL": "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdmZL4_DQNT61xbYPMjnZS_HUuXmxWXDzVbUB8f1dg1_M5WAw/formResponse",
    "NAME_INPUT": "entry.1932662751"
};

const addForm = function (e) {
    const form = document.querySelector('form');
    form.action = config.FORM_RESPONSE_URL;
    form.method = 'POST';

    const inputName = document.getElementById('name-input');
    inputName.name = config.NAME_INPUT;
}

window.addEventListener('load', addForm);