import './styles/style.css';
import './styles/home.css';
import yogurtPng from './assets/frozen-yogurt.png';
import createHomePage from './home';

const body = document.querySelector('body');
const contentDiv = document.createElement('div');

// Creates initial elements on webpage load (header, content container)
(() => {
    // Create header element and its children (logo, butttons)
    const newHeader = document.createElement('header');
    // logo
    const bannerDiv = document.createElement('div');
    bannerDiv.classList.toggle('banner');
    const title = document.createElement('p');
    title.classList.toggle('title');
    title.textContent = 'Yogurt';
    const img = document.createElement('img');
    img.src = yogurtPng;
    img.alt = 'Yogurt';
    bannerDiv.appendChild(title);
    bannerDiv.appendChild(img);
    // buttons
    const pgBtns = document.createElement('div');
    pgBtns.classList.toggle('page-btns');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    homeBtn.type = 'button';
    menuBtn.type = 'button';
    contactBtn.type = 'button';
    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    contactBtn.textContent = 'Contact';
    pgBtns.appendChild(homeBtn);
    pgBtns.appendChild(menuBtn);
    pgBtns.appendChild(contactBtn);

    newHeader.appendChild(bannerDiv);
    newHeader.appendChild(pgBtns);
    // Create content container
    contentDiv.id = 'content';
    // Append header and content container to body
    body.appendChild(newHeader);
    body.appendChild(contentDiv);
})(); 

const pageBtns = document.querySelectorAll('.page-btns button');

pageBtns.forEach((btn) => {btn.addEventListener('click', (e) => {changeContent(e.target);})});






const clearContent = () => {contentDiv.innerHTML = '';};

// This function changes the content
const changeContent = (btnPressed) => {
    if (!btnPressed.classList.contains('filled')){
        // Remove child elements of content container
        clearContent();
        // Unfill previously selected button
        pageBtns.forEach(btn => {if(btn.classList.contains('filled')){
            btn.classList.toggle('filled');
        };});

        btnPressed.classList.toggle('filled');
        // Fill content container based on button pressed
        if (btnPressed.textContent == 'Home') {
            createHomePage();
        };
    }
    
};

// const container = document.querySelector('#content');
// const header = document.querySelector('header');

// header.children[0].children[1].src = yogurtPng;

console.log('Hello there');
console.log('Hello there');


// Creates header on webpage
