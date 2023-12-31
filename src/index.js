import './styles.css';
import githubIcon from './images/github-mark-white.svg'

const content = document.getElementById('content');

document.querySelectorAll('.navigate a')
    .forEach(a => a.addEventListener('click', handleNavClick));

function handleNavClick(e) {
    // Delete existing DOM elements inside #content section
    while (content.firstChild) content.removeChild(content.firstChild);
    // Toggle wanted nav-item and unmark currently active items
    toggleActive(e);
    // Populate content with the new active nav-item
    const dataName = e.target.getAttribute('data-name');
    if (dataName === 'home') generateHome();
    else if (dataName === 'menu') generateMenu();
    else generateContact();
}

function toggleActive(e) {
    document.querySelectorAll('a.nav-item').forEach(item => {
        if (item.classList.contains('active')) item.classList.remove('active');
    });
    e.target.classList.add('active');
}

function generateHome() {

    console.log('clicked');
}
function generateMenu() {
    console.log('clicked');
}
function generateContact() {
    console.log('clicked');
}

function fillFooter() {
    const myIcon = new Image();
    const textDiv = document.createElement('div');
    const dest = document.querySelector('#footer a');

    myIcon.src = githubIcon;
    myIcon.alt = 'github-logo';
    textDiv.textContent = 'Elad Tsfany';

    dest.appendChild(myIcon);
    dest.appendChild(textDiv);
};
fillFooter();