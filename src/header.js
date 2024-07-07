export default function createHeader() {
    const header = document.createElement("div");

    const title = document.createElement('div');

    const navBar = document.createElement('div');
    const homeBtn = document.createElement('div');
    const menuBtn = document.createElement('div');
    const contactBtn = document.createElement('div');

    title.setAttribute('id', 'title');

    homeBtn.setAttribute('id', 'home-btn');
    menuBtn.setAttribute('id', 'menu-btn');
    contactBtn.setAttribute('id', 'contact-btn');

    header.classList.add('header');
    navBar.classList.add('navBar');
    homeBtn.classList.add('tab');
    menuBtn.classList.add('tab');
    contactBtn.classList.add('tab');

    title.textContent = "Mark's Kitchen";
    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';   
    contactBtn.textContent = 'Contact';

    header.appendChild(title);
    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);
    header.appendChild(navBar);
    
    return header;

}