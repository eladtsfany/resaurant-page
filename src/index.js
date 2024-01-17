import './styles.css';
import githubIcon from './images/github-mark-white.svg'

const content = document.getElementById('content');
const header = document.getElementById('header');

header.querySelectorAll('.navigate a')
    .forEach(a => a.addEventListener('click', handleNavClick));

function handleNavClick(e) {
    // Delete existing DOM elements inside #content section
    clearContentSection();
    // Toggle wanted nav-item and unmark currently active items
    toggleActive(e);
    // Populate content with the new active nav-item
    const dataName = e.target.getAttribute('data-name');
    if (dataName === 'home') generateHome();
    else if (dataName === 'menu') generateMenu();
    else generateContact();
}

function clearContentSection() { while (content.firstChild) content.removeChild(content.firstChild) };

function toggleActive(e) {
    header.querySelectorAll('a.nav-item').forEach(item => {
        if (item.classList.contains('active')) item.classList.remove('active');
    });
    e.target.classList.add('active');
}

function enterMenu() {
    clearContentSection();

    const homeBtn = header.querySelector("a.nav-item[data-name='home']");
    const menuBtn = header.querySelector("a.nav-item[data-name='menu']");
    homeBtn.classList.remove('active');
    menuBtn.classList.add('active');

    generateMenu();
};

function generateHome() {
    console.log('clicked on home');

    // Elements creation
    const homeContainer = document.createElement('div');
    homeContainer.className = 'home-container';

    const heading = document.createElement('h2');
    heading.textContent = "Welcom to Tiny Town!";

    const textWrapper = document.createElement('div');
    textWrapper.className = 'text-wrapper';

    const paragraph1 = document.createElement('p');
    const paragraph2 = document.createElement('p');
    paragraph1.textContent = "Here we offer a large variety of comforting homemade food for you to enjoy!";
    paragraph2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, non fugit id minima provident officiis. Illum illo et aut praesentium animi tenetur esse commodi facere, iure distinctio provident rerum eum.";

    const btnWrapper = document.createElement('div');
    btnWrapper.className = 'btn-wrapper';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'orderButton';
    btn.textContent = "Order Now!";
    btn.addEventListener('click', enterMenu);

    // Append Elements
    textWrapper.appendChild(paragraph1);
    textWrapper.appendChild(paragraph2);

    btnWrapper.appendChild(btn);

    homeContainer.appendChild(heading);
    homeContainer.appendChild(textWrapper);
    homeContainer.appendChild(btnWrapper);

    content.appendChild(homeContainer);
}
function generateMenu() {
    console.log('clicked on menu');
}
function generateContact() {
    console.log('clicked on contact');
    // TEMPORARY GENERATES BLANK DIV TO DISPLAY BACKGROUND
    const div = document.createElement('div');
    div.style.height = '200vh';
    content.append(div);
    // END OF TEMP CODE
}

function fillFooter() {
    const myIcon = new Image();
    const textDiv = document.createElement('div');
    const dest = document.querySelector('#footer a');

    myIcon.src = githubIcon;
    myIcon.alt = 'github-logo';
    textDiv.textContent = 'Elad Tsfany';
    textDiv.style.fontWeight = 600;

    dest.appendChild(myIcon);
    dest.appendChild(textDiv);
};

// generateHome();
fillFooter();