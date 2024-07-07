import renderMenu from "./menu";
import contact from "./contact";
import createHeader from "./header";
import renderHome from "./home";
import './styles.css';

const content = document.querySelector('#content');

content.append(createHeader(), renderHome());

const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', renderMenu);
