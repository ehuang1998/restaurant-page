import dishOne from './img/itemOne.jpg';
import dishTwo from './img/itemTwo.jpg';
import dishThree from './img/itemThree.jpg';

export default function renderMenu() {

    const pageContent = document.createElement('div');
    const menuPage = document.createElement('div');
    
    const itemOne = document.createElement('div');
    const photoOne = document.createElement('div');
    const nameOne = document.createElement('div');

    const itemTwo = document.createElement('div');
    const photoTwo = document.createElement('div');
    const nameTwo = document.createElement('div');

    const itemThree = document.createElement('div');
    const photoThree = document.createElement('div');
    const nameThree = document.createElement('div');

    pageContent.classList.add('page-content');
    menuPage.setAttribute('id', 'menu-page');
    itemOne.setAttribute('id', 'menu-item');
    itemTwo.setAttribute('id', 'menu-item');
    itemThree.setAttribute('id', 'menu-item');
    nameOne.setAttribute('id', 'message');
    nameTwo.setAttribute('id', 'message');
    nameThree.setAttribute('id', 'message');

    nameOne.textContent = 'Shrimp Fried Rice';
    nameTwo.textContent = 'Tangerine Chicken';
    nameThree.textContent = 'Spicy Beef'

    const imageOne = new Image();
    imageOne.src = dishOne;

    const imageTwo = new Image();
    imageTwo.src = dishTwo;

    const imageThree = new Image();
    imageThree.src = dishThree;

    imageOne.height = 300;
    imageTwo.height = 300;
    imageThree.height = 300;

    itemOne.appendChild(imageOne);
    itemOne.appendChild(nameOne);

    itemTwo.appendChild(imageTwo);
    itemTwo.appendChild(nameTwo);

    itemThree.appendChild(imageThree);
    itemThree.appendChild(nameThree);

    menuPage.appendChild(itemOne);
    menuPage.appendChild(itemTwo);
    menuPage.appendChild(itemThree);

    pageContent.appendChild(menuPage);

    return pageContent;
    
}
