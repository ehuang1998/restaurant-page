import renderMenu from "./menu";
import renderContact from "./contact";
import createHeader from "./header";
import renderHome from "./home";
import './styles.css';

const content = document.querySelector('#content');

content.append(createHeader(), renderHome());

const menuBtn = document.querySelector('#menu-btn');
const homeBtn = document.querySelector('#home-btn');
const contactBtn = document.querySelector('#contact-btn');

menuBtn.addEventListener('click', () => {
    clearContent();
    content.append(renderMenu());
})

homeBtn.addEventListener('click', () => {
    clearContent();
    content.append(renderHome());
})

contactBtn.addEventListener('click', () => {
    clearContent();
    content.append(renderContact());
})

function clearContent() {
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');
    if (pageContent) {
        content.removeChild(pageContent);
    }
}