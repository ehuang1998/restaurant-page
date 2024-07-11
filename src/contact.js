export default function renderContact() {
    const pageContent = document.createElement('div');

    pageContent.classList.add('page-content');

    const message = document.createElement('div');
    message.setAttribute('id', 'message');
    message.textContent = "If you don't like then you don't pay me get the fuck out!"

    const form = document.createElement('form');
    form.classList.add('contact-form');
    form.appendChild(message);

    const headingInput = document.createElement('input');
    headingInput.type = 'text';
    headingInput.placeholder = 'Enter Name';
    form.appendChild(headingInput);

    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.placeholder = 'Enter Email Address';
    form.appendChild(addressInput);

    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.placeholder = 'Enter Phone Number';
    form.appendChild(phoneInput);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    form.appendChild(submitButton);

    pageContent.appendChild(form);

    return pageContent;
}
