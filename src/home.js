import Photo from './img/photo.jpg';

export default function renderHome() {

    const pageContent = document.createElement('div');
    const homePage = document.createElement('div');
    const message = document.createElement('div');

    pageContent.classList.add('page-content');
    homePage.setAttribute('id', 'home-page');
    message.setAttribute('id', 'message');

    message.textContent = `"That's some BOMB ASS SHIT!" - Mark 2024`;

    const myPhoto = new Image();
    myPhoto.src = Photo;

    myPhoto.height = 600;

    homePage.appendChild(myPhoto);
    homePage.appendChild(message);

    pageContent.appendChild(homePage);

    return pageContent;

}

