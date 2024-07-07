import Photo from './img/photo.jpg';

export default function renderHome() {

    const homePage = document.createElement('div');
    const message = document.createElement('div');

    homePage.setAttribute('id', 'home-page');
    message.setAttribute('id', 'message');

    message.textContent = `"That's some BOMB ASS SHIT!" - Mark 2024`;

    const myPhoto = new Image();
    myPhoto.src = Photo;

    myPhoto.height = 600;

    homePage.appendChild(myPhoto);
    homePage.appendChild(message);

    return homePage;

}

